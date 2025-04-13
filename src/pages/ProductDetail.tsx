
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { getProductById, getProductsByCategory, Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StarIcon, Minus, Plus, AlertCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  
  // Handle quantity changes
  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));
  
  // If product not found
  if (!product) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12 text-center">
          <AlertCircle className="w-16 h-16 text-brand-purple mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-brand-navy mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  // Get related products
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${
              i < Math.floor(rating) 
                ? 'text-yellow-400 fill-yellow-400' 
                : i < rating 
                  ? 'text-yellow-400 fill-yellow-400 opacity-50' 
                  : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-gray-600">
          {rating.toFixed(1)} ({product.reviews} reviews)
        </span>
      </div>
    );
  };
  
  return (
    <MainLayout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-6">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="hover:text-brand-purple">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/products" className="hover:text-brand-purple">Products</Link>
              </li>
              <li>/</li>
              <li>
                <Link 
                  to={`/products?category=${encodeURIComponent(product.category)}`} 
                  className="hover:text-brand-purple"
                >
                  {product.category}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-700 font-medium truncate max-w-[200px]">{product.name}</li>
            </ol>
          </nav>
          
          {/* Product Detail Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              {/* Product Image */}
              <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {!product.inStock && (
                    <Badge variant="destructive" className="block">Out of Stock</Badge>
                  )}
                  {product.featured && (
                    <Badge className="bg-brand-purple block">Featured</Badge>
                  )}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-brand-navy mb-2">{product.name}</h1>
                  {renderStars(product.rating)}
                </div>
                
                <div className="text-3xl font-bold text-brand-navy">
                  ${product.price.toFixed(2)}
                </div>
                
                <div className="prose text-gray-600">
                  <p>{product.description}</p>
                </div>
                
                {/* Availability */}
                <div className="flex items-center">
                  <span className="font-medium mr-2">Availability:</span>
                  {product.inStock ? (
                    <span className="text-green-600">In Stock</span>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                </div>
                
                {/* Quantity Selector */}
                {product.inStock && (
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={decrementQuantity}
                        disabled={quantity <= 1}
                        className="h-10 w-10 rounded-none"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <div className="w-12 text-center">{quantity}</div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={incrementQuantity}
                        className="h-10 w-10 rounded-none"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Add to Cart Button */}
                <div className="flex items-center space-x-4 pt-2">
                  <Button 
                    size="lg"
                    className="bg-brand-purple hover:bg-brand-purple-dark"
                    disabled={!product.inStock}
                    onClick={() => {
                      for (let i = 0; i < quantity; i++) {
                        addToCart(product);
                      }
                    }}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Product Tabs */}
            <div className="border-t border-gray-200">
              <Tabs defaultValue="description" className="p-6">
                <TabsList className="mb-6">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specs">Specifications</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="prose max-w-none">
                  <p>{product.description}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.
                  </p>
                  <p>
                    Sed sit amet enim placerat, faucibus nisl et, porta ipsum. Integer efficitur nulla id orci varius, in lobortis magna viverra. Praesent volutpat nunc velit, eget dignissim orci sagittis vitae.
                  </p>
                </TabsContent>
                
                <TabsContent value="specs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4">
                      <h3 className="font-semibold mb-2">Technical Details</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-600">Brand</span>
                          <span className="font-medium">SwiftStore</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Category</span>
                          <span className="font-medium">{product.category}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">SKU</span>
                          <span className="font-medium">SWIFT-{product.id}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Available</span>
                          <span className="font-medium">{product.inStock ? 'Yes' : 'No'}</span>
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h3 className="font-semibold mb-2">Features</h3>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>High quality materials</li>
                        <li>Durable construction</li>
                        <li>Modern design</li>
                        <li>Easy to use</li>
                        <li>1 year warranty</li>
                      </ul>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold">Customer Reviews</h3>
                      <Button variant="outline">Write a Review</Button>
                    </div>
                    
                    {/* Sample Reviews */}
                    <div className="space-y-6">
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between mb-2">
                          <div className="font-medium">John Doe</div>
                          <div className="text-gray-500 text-sm">2 days ago</div>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">
                          Great product! Exceeded my expectations. The quality is excellent and it works exactly as described.
                        </p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between mb-2">
                          <div className="font-medium">Jane Smith</div>
                          <div className="text-gray-500 text-sm">1 week ago</div>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">
                          Very satisfied with my purchase. Shipping was fast and the product is just as described. Would recommend!
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
