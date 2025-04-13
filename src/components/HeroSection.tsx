
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
              Shop Smarter, <span className="text-brand-purple">Shop Faster</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Discover the latest products with lightning-fast delivery and exceptional customer service. Your satisfaction is our priority.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-brand-purple hover:bg-brand-purple-dark"
                asChild
              >
                <Link to="/products">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <Link to="/products?category=Electronics">
                  Trending
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-purple-light rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-purple rounded-full opacity-30 blur-xl"></div>
            
            <div className="relative bg-white p-4 rounded-lg shadow-lg transform md:rotate-3 transition-transform hover:rotate-0">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Electronics collection"
                className="w-full h-full object-cover rounded"
              />
            </div>
            
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-lg rotate-6 transition-transform hover:rotate-0 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Footwear"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
            
            <div className="absolute -bottom-8 left-4 bg-white p-2 rounded-lg shadow-lg -rotate-3 transition-transform hover:rotate-0 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
                alt="Watch"
                className="w-24 h-24 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Diagonal slice design */}
      <div className="absolute -bottom-10 left-0 right-0 h-16 bg-white transform -skew-y-2"></div>
    </div>
  );
};

export default HeroSection;
