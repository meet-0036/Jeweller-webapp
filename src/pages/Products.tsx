import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Search, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();

  const products = [
    {
      id: '1',
      name: 'Royal Gold Necklace Set',
      price: 125000,
      category: 'necklaces',
      image: 'https://images.pexels.com/photos/1616805/pexels-photo-1616805.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      weight: '25.5g',
      purity: '22K Gold',
    },
    {
      id: '2',
      name: 'Diamond Studded Earrings',
      price: 75000,
      category: 'earrings',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      weight: '8.2g',
      purity: '18K Gold',
    },
    {
      id: '3',
      name: 'Traditional Silver Bangles',
      price: 35000,
      category: 'bangles',
      image: 'https://images.pexels.com/photos/1616804/pexels-photo-1616804.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      weight: '45.0g',
      purity: '92.5% Silver',
    },
    {
      id: '4',
      name: 'Emerald Gold Ring',
      price: 95000,
      category: 'rings',
      image: 'https://images.pexels.com/photos/1721936/pexels-photo-1721936.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      weight: '6.8g',
      purity: '22K Gold',
    },
    {
      id: '5',
      name: 'Pearl Drop Earrings',
      price: 55000,
      category: 'earrings',
      image: 'https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      weight: '4.2g',
      purity: '18K Gold',
    },
    {
      id: '6',
      name: 'Antique Gold Bracelet',
      price: 85000,
      category: 'bracelets',
      image: 'https://images.pexels.com/photos/1721938/pexels-photo-1721938.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      weight: '18.5g',
      purity: '22K Gold',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'rings', label: 'Rings' },
    { value: 'bangles', label: 'Bangles' },
    { value: 'bracelets', label: 'Bracelets' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50000', label: 'Under ₹50,000' },
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000-200000', label: '₹1,00,000 - ₹2,00,000' },
    { value: '200000+', label: 'Above ₹2,00,000' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(p => parseInt(p) || Infinity);
      matchesPrice = product.price >= min && (max === Infinity || product.price <= max);
    }
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      weight: product.weight,
      purity: product.purity,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">
            Our Collection
          </h1>
          <p className="text-xl text-gray-600">
            Discover our exquisite range of handcrafted jewelry pieces
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h3 className="font-semibold text-lg">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-2 text-gray-600"
                >
                  <Filter className="h-5 w-5" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    {priceRanges.map(range => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="h-4 w-4 text-gold-500 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="absolute top-4 right-4 p-2 bg-gold-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold-700"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">{product.weight}</span>
                      <span className="text-sm text-gray-600">{product.purity}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold text-gold-600">
                        ₹{product.price.toLocaleString()}
                      </p>
                      <Link
                        to={`/products/${product.id}`}
                        className="text-gold-600 hover:text-gold-700 font-medium text-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;