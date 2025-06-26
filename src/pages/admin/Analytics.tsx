import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Analytics: React.FC = () => {
  const [dateRange, setDateRange] = useState('30days');

  const salesData = [
    { month: 'Jan', sales: 850000, orders: 45, customers: 38 },
    { month: 'Feb', sales: 920000, orders: 52, customers: 45 },
    { month: 'Mar', sales: 780000, orders: 38, customers: 32 },
    { month: 'Apr', sales: 1050000, orders: 61, customers: 55 },
    { month: 'May', sales: 1240000, orders: 75, customers: 68 },
    { month: 'Jun', sales: 1350000, orders: 89, customers: 78 },
  ];

  const categoryData = [
    { name: 'Necklaces', value: 35, color: '#d4af37' },
    { name: 'Earrings', value: 25, color: '#b8860b' },
    { name: 'Rings', value: 20, color: '#996515' },
    { name: 'Bangles', value: 15, color: '#664d0a' },
    { name: 'Bracelets', value: 5, color: '#8b1538' },
  ];

  const topProducts = [
    { name: 'Royal Gold Necklace Set', sales: 15, revenue: 1875000 },
    { name: 'Diamond Studded Earrings', sales: 12, revenue: 900000 },
    { name: 'Emerald Gold Ring', sales: 8, revenue: 760000 },
    { name: 'Traditional Silver Bangles', sales: 10, revenue: 350000 },
    { name: 'Pearl Drop Earrings', sales: 6, revenue: 330000 },
  ];

  const customerMetrics = [
    { metric: 'New Customers', value: 45, change: '+12.5%', changeType: 'positive' },
    { metric: 'Returning Customers', value: 78, change: '+8.3%', changeType: 'positive' },
    { metric: 'Customer Retention', value: '68%', change: '+5.2%', changeType: 'positive' },
    { metric: 'Avg. Order Value', value: '₹85,000', change: '-2.1%', changeType: 'negative' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="text-gray-600 mt-1">Track performance and gain insights</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="1year">Last year</option>
          </select>
          <button className="flex items-center px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors">
            <Download className="h-5 w-5 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customerMetrics.map((metric, index) => (
          <motion.div
            key={metric.metric}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.metric}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                <div className={`flex items-center mt-1 ${
                  metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.changeType === 'positive' ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  <span className="text-sm">{metric.change}</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-gold-600" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="font-display text-xl font-semibold mb-4">Sales Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Sales']} />
              <Line type="monotone" dataKey="sales" stroke="#d4af37" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Category Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="font-display text-xl font-semibold mb-4">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Orders vs Customers */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="font-display text-xl font-semibold mb-4">Orders vs Customers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#d4af37" name="Orders" />
              <Bar dataKey="customers" fill="#b8860b" name="Customers" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="font-display text-xl font-semibold mb-4">Top Selling Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.sales} units sold</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gold-600">₹{product.revenue.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Performance Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="font-display text-xl font-semibold mb-4">Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-gold-600">₹65.2L</p>
            <p className="text-gray-600">Total Revenue</p>
            <p className="text-sm text-green-600 mt-1">+15.3% from last period</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gold-600">360</p>
            <p className="text-gray-600">Total Orders</p>
            <p className="text-sm text-green-600 mt-1">+12.8% from last period</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gold-600">316</p>
            <p className="text-gray-600">Total Customers</p>
            <p className="text-sm text-green-600 mt-1">+18.2% from last period</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;