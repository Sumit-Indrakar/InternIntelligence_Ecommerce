
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, CheckCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [orderProcessing, setOrderProcessing] = useState<boolean>(false);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order processing
    setOrderProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setOrderProcessing(false);
      
      // Show success toast
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase. Your order is confirmed.",
        duration: 5000,
      });
      
      // Clear cart and redirect to confirmation page
      clearCart();
      navigate('/');
    }, 1500);
  };
  
  // Redirect to products if cart is empty
  if (cart.items.length === 0) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-brand-navy mb-4">Checkout Complete</h1>
          <p className="text-gray-600 mb-6">
            Your order has been placed successfully or your cart is empty.
          </p>
          <Button className="bg-brand-purple hover:bg-brand-purple-dark" asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-brand-navy mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {/* Shipping Information */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="text-xl font-semibold text-brand-navy mb-6">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input 
                        id="first-name" 
                        placeholder="Enter your first name" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input 
                        id="last-name" 
                        placeholder="Enter your last name" 
                        required 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address" 
                        required 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input 
                        id="address" 
                        placeholder="Enter your street address" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        placeholder="Enter your city" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State / Province</Label>
                      <Input 
                        id="state" 
                        placeholder="Enter your state" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input 
                        id="postal-code" 
                        placeholder="Enter your postal code" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input 
                        id="country" 
                        placeholder="Enter your country" 
                        required 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        placeholder="Enter your phone number" 
                        required 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Billing Information */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-brand-navy">Billing Information</h2>
                    <div className="flex items-center">
                      <Checkbox id="same-address" defaultChecked />
                      <label htmlFor="same-address" className="ml-2 text-sm text-gray-600">
                        Same as shipping address
                      </label>
                    </div>
                  </div>
                  
                  {/* Billing form fields would go here if "same as shipping" is not checked */}
                  
                  {/* Order Notes */}
                  <div className="mt-6">
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Notes about your order, e.g., special delivery instructions" 
                    />
                  </div>
                </div>
                
                {/* Payment Method */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="text-xl font-semibold text-brand-navy mb-6">Payment Method</h2>
                  
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={setPaymentMethod}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="card" id="payment-card" />
                      <Label htmlFor="payment-card" className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
                        Credit / Debit Card
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="paypal" id="payment-paypal" />
                      <Label htmlFor="payment-paypal">PayPal</Label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="bank" id="payment-bank" />
                      <Label htmlFor="payment-bank">Bank Transfer</Label>
                    </div>
                  </RadioGroup>
                  
                  {/* Credit Card Form (shown when card payment method is selected) */}
                  {paymentMethod === 'card' && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="card-name">Name on Card</Label>
                        <Input 
                          id="card-name" 
                          placeholder="Enter name on card" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input 
                          id="card-number" 
                          placeholder="XXXX XXXX XXXX XXXX" 
                          required 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry-date">Expiry Date</Label>
                          <Input 
                            id="expiry-date" 
                            placeholder="MM/YY" 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input 
                            id="cvv" 
                            placeholder="XXX" 
                            required 
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Place Order Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-brand-purple hover:bg-brand-purple-dark py-6"
                  disabled={orderProcessing}
                >
                  {orderProcessing ? 'Processing Order...' : 'Place Order'}
                </Button>
              </form>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-medium text-brand-navy mb-6">Order Summary</h2>
                
                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {cart.items.map(item => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-md overflow-hidden mr-3">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                {/* Price Calculations */}
                <div className="space-y-3">
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
      </div>
    </MainLayout>
  );
};

export default Checkout;
