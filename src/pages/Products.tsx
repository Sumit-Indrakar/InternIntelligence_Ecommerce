
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProductCard from '../components/ProductCard';
import { products as allProducts, Product } from '../data/products';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FilterIcon, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Products: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isMobile = useIsMobile();
  
  // Get URL parameters
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');
  
  // State for filters and products
  const [category, setCategory] = useState<string | null>(categoryParam);
  const [searchQuery, setSearchQuery] = useState<string | null>(searchParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [showFilters, setShowFilters] = useState<boolean>(!isMobile);
  
  // Get unique categories
  const categories = Array.from(new Set(allProducts.map(product => product.category)));
  
  // Filter and sort products when filters change
  useEffect(() => {
    let result = [...allProducts];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    // Apply category filter
    if (category) {
      result = result.filter(product => product.category === category);
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply in-stock filter
    if (inStockOnly) {
      result = result.filter(product => product.inStock);
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'nameAsc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [category, searchQuery, priceRange, sortBy, inStockOnly]);
  
  const clearFilters = () => {
    setCategory(null);
    setPriceRange([0, 1000]);
    setInStockOnly(false);
    setSortBy('featured');
  };
  
  const FiltersPanel = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-medium text-brand-navy mb-3">Categories</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox 
              id="all-categories" 
              checked={!category} 
              onCheckedChange={() => setCategory(null)}
            />
            <Label htmlFor="all-categories" className="ml-2 text-sm cursor-pointer">
              All Categories
            </Label>
          </div>
          
          {categories.map(cat => (
            <div key={cat} className="flex items-center">
              <Checkbox 
                id={`category-${cat}`} 
                checked={category === cat}
                onCheckedChange={() => setCategory(category === cat ? null : cat)}
              />
              <Label htmlFor={`category-${cat}`} className="ml-2 text-sm cursor-pointer">
                {cat}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Range Filter */}
      <div>
        <h3 className="text-lg font-medium text-brand-navy mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[0, 1000]}
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className="mb-6"
          />
          <div className="flex items-center justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      {/* In Stock Filter */}
      <div>
        <div className="flex items-center">
          <Checkbox 
            id="in-stock" 
            checked={inStockOnly}
            onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
          />
          <Label htmlFor="in-stock" className="ml-2 cursor-pointer">
            In Stock Only
          </Label>
        </div>
      </div>
      
      {/* Clear Filters */}
      <Button 
        variant="outline" 
        className="w-full"
        onClick={clearFilters}
      >
        Clear All Filters
      </Button>
    </div>
  );
  
  return (
    <MainLayout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-brand-navy mb-2">
            {category || 'All Products'}
          </h1>
          
          {searchQuery && (
            <p className="text-gray-600 mb-4">
              Search results for: "{searchQuery}"
            </p>
          )}
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            {!isMobile && (
              <div className="w-full md:w-64 flex-shrink-0">
                <FiltersPanel />
              </div>
            )}
            
            {/* Filters button - Mobile */}
            {isMobile && (
              <Button 
                variant="outline" 
                className="self-start flex items-center mb-4"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FilterIcon className="h-4 w-4 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            )}
            
            {/* Products */}
            <div className="flex-grow">
              {/* Mobile filters */}
              {isMobile && showFilters && (
                <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-white">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium">Filters</h2>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowFilters(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <FiltersPanel />
                </div>
              )}
              
              {/* Sort and Results count */}
              <div className="flex flex-wrap justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                </p>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <Select
                    value={sortBy}
                    onValueChange={setSortBy}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                      <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                      <SelectItem value="nameAsc">Name: A to Z</SelectItem>
                      <SelectItem value="nameDesc">Name: Z to A</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-gray-600 mb-2">No products found</h3>
                  <p className="text-gray-500">Try adjusting your filters</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
