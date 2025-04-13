
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  featured?: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "Experience crystal clear sound with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable ear cushions for extended use.",
    price: 199.99,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch. Features include heart rate monitoring, sleep tracking, GPS, and water resistance up to 50 meters.",
    price: 149.99,
    category: "Wearables",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
    inStock: true,
    rating: 4.5,
    reviews: 89
  },
  {
    id: "3",
    name: "Ultra HD Smart TV - 55\"",
    description: "Transform your home entertainment with this 55-inch Ultra HD Smart TV. Enjoy streaming services, gaming, and stunning picture quality with HDR technology.",
    price: 699.99,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80",
    featured: true,
    inStock: true,
    rating: 4.7,
    reviews: 56
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    description: "Work comfortably with our ergonomic office chair. Adjustable height, lumbar support, and breathable mesh back provide all-day comfort for your home office.",
    price: 249.99,
    category: "Furniture",
    imageUrl: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80",
    inStock: true,
    rating: 4.6,
    reviews: 42
  },
  {
    id: "5",
    name: "Professional DSLR Camera",
    description: "Capture stunning photos and videos with this professional DSLR camera. Includes 24.2MP sensor, 4K video recording, and a versatile 18-55mm lens.",
    price: 899.99,
    category: "Photography",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    inStock: false,
    rating: 4.9,
    reviews: 78
  },
  {
    id: "6",
    name: "Bluetooth Portable Speaker",
    description: "Take your music anywhere with this powerful portable speaker. Water-resistant, 12-hour battery life, and incredible sound quality in a compact design.",
    price: 79.99,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    inStock: true,
    rating: 4.4,
    reviews: 112
  },
  {
    id: "7",
    name: "Designer Leather Backpack",
    description: "Stylish and functional leather backpack perfect for daily commutes or weekend trips. Multiple compartments, laptop sleeve, and durable construction.",
    price: 159.99,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    inStock: true,
    rating: 4.3,
    reviews: 65
  },
  {
    id: "8",
    name: "Smartphone - Latest Model",
    description: "The latest smartphone with cutting-edge features. 6.7-inch display, triple camera system, all-day battery life, and the fastest processor on the market.",
    price: 999.99,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80",
    featured: true,
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: "9",
    name: "Stainless Steel Cookware Set",
    description: "Professional-grade 10-piece cookware set. Stainless steel construction ensures even heating and durability. Dishwasher safe and suitable for all cooktops.",
    price: 349.99,
    category: "Home & Kitchen",
    imageUrl: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    inStock: true,
    rating: 4.6,
    reviews: 37
  },
  {
    id: "10",
    name: "Mechanical Keyboard",
    description: "Enhance your typing experience with this mechanical keyboard. Tactile switches, RGB lighting, and durable aluminum frame make it perfect for work or gaming.",
    price: 129.99,
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    inStock: true,
    rating: 4.5,
    reviews: 92
  },
  {
    id: "11",
    name: "Yoga Mat Premium",
    description: "High-density yoga mat with excellent cushioning and grip. Non-slip surface, eco-friendly materials, and includes carrying strap for easy transport.",
    price: 49.99,
    category: "Fitness",
    imageUrl: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    inStock: true,
    rating: 4.2,
    reviews: 51
  },
  {
    id: "12",
    name: "Coffee Maker with Grinder",
    description: "All-in-one coffee maker with built-in grinder. Programmable settings, thermal carafe to keep coffee hot, and freshly ground beans for the perfect cup every time.",
    price: 199.99,
    category: "Home & Kitchen",
    imageUrl: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 108
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getCategories = (): string[] => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};
