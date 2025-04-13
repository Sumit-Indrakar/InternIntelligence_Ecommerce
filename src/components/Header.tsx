
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const { cart } = useCart();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to products page with search query
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-brand-navy">
            Swift<span className="text-brand-purple">Store</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              {navLinks.map(link => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-purple ${
                    isActive(link.path) ? 'text-brand-purple' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            {!isMobile && (
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-64 pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              </form>
            )}
            
            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.totalItems > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 bg-brand-purple hover:bg-brand-purple-dark" 
                    variant="default"
                  >
                    {cart.totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Search */}
        {isMobile && (
          <div className="mt-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <nav className="mt-4 py-4 border-t border-gray-200">
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`block py-2 ${
                      isActive(link.path) 
                        ? 'text-brand-purple font-medium' 
                        : 'text-gray-700 hover:text-brand-purple'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
