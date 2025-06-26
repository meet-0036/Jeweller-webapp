import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Shield, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: id || '1',
    name: 'Royal Gold Necklace Set',
    price: 125000,
    originalPrice: 150000,
    images: [
      'https://images.pexels.com/photos/1616805/pexels-photo-1616805.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1616804/pexels-photo-1616804.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1721936/pexels-photo-1721936.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.9,
    reviewCount: 127,
    description: 'Exquisite handcrafted gold necklace set featuring intricate traditional designs. This stunning piece showcases the finest craftsmanship with detailed work that reflects the rich heritage of Rajasthani jewelry making.',
    features: [
      'Handcrafted by master artisans',
      'BIS Hallmarked for purity',
      'Traditional Rajasthani design',
      'Comes with authenticity certificate',
      'Free lifetime maintenance',
    ],
    specifications: {
      weight: '25.5g',
      purity: '22K Gold',
      stone: 'Cubic Zirconia',
      technique: 'Traditional Kundan',
      origin: 'Jaipur, Rajasthan',
    },
    inStock: true,
    stockCount: 3,
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        weight: product.specifications.weight,
        purity: product.specifications.purity,
      });
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            {/* Product Images */}
            <div className="p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 ${
                        selectedImage === index
                          ? 'border-gold-500'
                          : 'border-transparent hover:border-gray-300'
                      } transition-colors`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Product Info */}
            <div className="p-8 lg:border-l border-gray-200">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h1>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-gold-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({product.reviewCount} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-baseline space-x-4">
                    <span className="text-3xl font-bold text-gold-600">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-green-600 font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Shield className="h-4 w-4 text-gold-600 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity and Actions */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <label className="text-sm font-medium text-gray-700">Quantity:</label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      {[...Array(Math.min(product.stockCount, 5))].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    {product.stockCount <= 5 && (
                      <span className="text-sm text-red-600">
                        Only {product.stockCount} left in stock
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-4 mb-6">
                    <button
                      onClick={handleBuyNow}
                      className="flex-1 bg-gold-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gold-700 transition-colors"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 border-2 border-gold-600 text-gold-600 py-3 px-6 rounded-lg font-semibold hover:bg-gold-600 hover:text-white transition-colors flex items-center justify-center"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </button>
                    <button className="p-3 border-2 border-gray-300 rounded-lg hover:border-gold-600 hover:text-gold-600 transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-gold-600 mr-2" />
                      <span>Free delivery</span>
                    </div>
                    <div className="flex items-center">
                      <RefreshCw className="h-5 w-5 text-gold-600 mr-2" />
                      <span>7-day returns</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-gold-600 mr-2" />
                      <span>Secure payment</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;