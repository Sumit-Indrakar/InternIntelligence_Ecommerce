
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoryList from '../components/CategoryList';
import { getFeaturedProducts } from '../data/products';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, RotateCcw, HeadphonesIcon } from 'lucide-react';

const Index: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <MainLayout>
      <HeroSection />
      
      {/* Featured Products */}
      <FeaturedProducts products={featuredProducts} />
      
      {/* Categories */}
      <CategoryList />
      
      {/* Promo Banner */}
      <section className="py-12 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Upgrade Your Tech Game with Our Premium Collection
              </h2>
              <p className="text-gray-300 text-lg max-w-md">
                Discover the latest innovations in technology with unbeatable prices and free shipping on all electronics.
              </p>
              <Button 
                size="lg" 
                className="bg-brand-purple hover:bg-brand-purple-dark"
                asChild
              >
                <Link to="/products?category=Electronics">
                  Shop Electronics
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Electronics Collection" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
              <Truck className="h-10 w-10 text-brand-purple mb-4" />
              <h3 className="text-lg font-semibold text-brand-navy mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">
                Free shipping on all orders over $50
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
              <ShieldCheck className="h-10 w-10 text-brand-purple mb-4" />
              <h3 className="text-lg font-semibold text-brand-navy mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm">
                Protected by industry leading encryption
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
              <RotateCcw className="h-10 w-10 text-brand-purple mb-4" />
              <h3 className="text-lg font-semibold text-brand-navy mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">
                30-day money back guarantee
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
              <HeadphonesIcon className="h-10 w-10 text-brand-purple mb-4" />
              <h3 className="text-lg font-semibold text-brand-navy mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Customer support available all day
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600">
              Get the latest updates on new products and upcoming sales
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              required
            />
            <Button type="submit" className="bg-brand-purple hover:bg-brand-purple-dark">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
