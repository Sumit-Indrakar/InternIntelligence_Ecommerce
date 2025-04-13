
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Product } from '../data/products';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  viewAllLink?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  title = "Featured Products",
  viewAllLink = "/products"
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">{title}</h2>
          <Button variant="ghost" asChild>
            <Link to={viewAllLink} className="flex items-center text-brand-purple hover:text-brand-purple-dark">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
