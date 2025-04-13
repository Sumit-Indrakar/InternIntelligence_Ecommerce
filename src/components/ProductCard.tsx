
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating) 
                ? 'text-yellow-400 fill-yellow-400' 
                : i < rating 
                  ? 'text-yellow-400 fill-yellow-400 opacity-50' 
                  : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({product.reviews})</span>
      </div>
    );
  };

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-md">
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative h-48 sm:h-64">
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onLoad={(e) => (e.target as HTMLElement).parentElement?.querySelector('.animate-pulse')?.classList.add('hidden')}
        />
        {!product.inStock && (
          <div className="absolute top-0 right-0 m-2">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
        {product.featured && (
          <div className="absolute top-0 left-0 m-2">
            <Badge className="bg-brand-purple">Featured</Badge>
          </div>
        )}
      </Link>

      <CardContent className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-brand-navy truncate hover:text-brand-purple transition-colors">
            {product.name}
          </h3>
          <div className="mt-1 text-xl font-bold text-brand-navy">
            ${product.price.toFixed(2)}
          </div>
          <div className="mt-2 text-sm">
            {renderStars(product.rating)}
          </div>
        </Link>
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-0">
        <Button 
          variant="default" 
          className="w-full bg-brand-purple hover:bg-brand-purple-dark" 
          disabled={!product.inStock}
          onClick={() => product.inStock && addToCart(product)}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
