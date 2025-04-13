
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  
  if (cart.items.length === 0) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-brand-navy mb-8">Your Cart</h1>
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <ShoppingBag className="h-10 w-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button className="bg-brand-purple hover:bg-brand-purple-dark" asChild>
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-medium">Cart Items ({cart.totalItems})</h2>
                  <Button 
                    variant="ghost" 
                    className="text-gray-500 hover:text-red-500"
                    onClick={clearCart}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear Cart
                  </Button>
                </div>
                
                {/* Cart Items List */}
                <div className="space-y-6">
                  {cart.items.map(item => (
                    <div key={item.id} className="flex flex-col sm:flex-row">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-full sm:w-24 h-24 mb-4 sm:mb-0">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-grow sm:ml-6 flex flex-col sm:flex-row justify-between">
                        <div>
                          <Link 
                            to={`/product/${item.id}`} 
                            className="text-brand-navy font-medium hover:text-brand-purple transition-colors"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-500">{item.category}</p>
                          <p className="text-brand-purple font-medium mt-1">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        
                        {/* Quantity and Remove */}
                        <div className="flex items-center justify-between mt-4 sm:mt-0">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="h-8 w-8 rounded-none"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <div className="w-8 text-center text-sm">
                              {item.quantity}
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 rounded-none"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          {/* Remove Button */}
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="ml-4 text-gray-500 hover:text-red-500"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Continue Shopping */}
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="text-gray-700"
                asChild
              >
                <Link to="/products">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-medium text-brand-navy mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cart.totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(cart.totalPrice * 0.1).toFixed(2)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${(cart.totalPrice + cart.totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 bg-brand-purple hover:bg-brand-purple-dark"
                asChild
              >
                <Link to="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              {/* Payment Methods */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 text-center mb-2">We Accept</p>
                <div className="flex justify-center space-x-2">
                  <div className="bg-gray-100 rounded p-1">
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-6" />
                  </div>
                  <div className="bg-gray-100 rounded p-1">
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="MasterCard" className="h-6" />
                  </div>
                  <div className="bg-gray-100 rounded p-1">
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="PayPal" className="h-6" />
                  </div>
                  <div className="bg-gray-100 rounded p-1">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968220.png" alt="Apple Pay" className="h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
