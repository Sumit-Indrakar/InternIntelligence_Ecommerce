
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon!",
      duration: 5000,
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <MainLayout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-brand-navy mb-2 text-center">Contact Us</h1>
          <p className="text-gray-600 text-center mb-12">
            We'd love to hear from you. Get in touch with our team.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-brand-navy mb-6">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand-purple flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Visit Us</h3>
                      <p className="text-gray-600 mt-1">
                        123 Commerce Street<br />
                        Shopping District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-brand-purple flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Email Us</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="mailto:support@swiftstore.com" className="hover:text-brand-purple">
                          support@swiftstore.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-brand-purple flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Call Us</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="tel:+1234567890" className="hover:text-brand-purple">
                          (123) 456-7890
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-brand-purple flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Opening Hours</h3>
                      <p className="text-gray-600 mt-1">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday: 10am - 4pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links (optional) */}
                <div className="mt-8">
                  <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                      <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                      <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                    </a>
                    <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                      <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                    <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                      <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map (optional) */}
              <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                <h2 className="text-xl font-semibold text-brand-navy mb-4">
                  Our Location
                </h2>
                <div className="bg-gray-200 rounded-lg h-64 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1619735200927!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-brand-navy mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Enter your name" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Enter subject" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Enter your message here" 
                      rows={6} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-purple hover:bg-brand-purple-dark"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* FAQ Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                <h2 className="text-xl font-semibold text-brand-navy mb-6">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">How do I track my order?</h3>
                    <p className="text-gray-600">
                      Once your order is shipped, you will receive an email with tracking information. You can also track your order by logging into your account and viewing your order history.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">What is your return policy?</h3>
                    <p className="text-gray-600">
                      We offer a 30-day return policy for most items. Products must be returned in their original condition and packaging to be eligible for a refund.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">Do you ship internationally?</h3>
                    <p className="text-gray-600">
                      Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">How can I cancel my order?</h3>
                    <p className="text-gray-600">
                      If you need to cancel an order, please contact our customer service team as soon as possible. We can only cancel orders that have not been shipped.
                    </p>
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

export default Contact;
