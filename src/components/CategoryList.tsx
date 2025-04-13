
import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/products';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryIconProps {
  category: string;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ category }) => {
  const getIconForCategory = (category: string) => {
    // Add appropriate images for each category
    const categoryIcons: Record<string, string> = {
      'Electronics': 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1101&q=80',
      'Wearables': 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      'Furniture': 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      'Photography': 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
      'Fashion': 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      'Home & Kitchen': 'https://images.unsplash.com/photo-1556911220-bda9da8a518b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'Fitness': 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    };

    return categoryIcons[category] || 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
  };

  return (
    <div className="w-full h-40 bg-gray-200 rounded-md overflow-hidden">
      <img 
        src={getIconForCategory(category)} 
        alt={category}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
};

const CategoryList: React.FC = () => {
  const categories = getCategories();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8 text-center">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link 
              to={`/products?category=${encodeURIComponent(category)}`}
              key={category}
            >
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <CategoryIcon category={category} />
                <CardContent className="p-4 text-center">
                  <h3 className="font-medium text-brand-navy">{category}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
