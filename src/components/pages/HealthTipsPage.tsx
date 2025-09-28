import React, { useState } from 'react';
import { Heart, Search, Filter, Clock, User, Bookmark, Share2 } from 'lucide-react';

const HealthTipsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarkedTips, setBookmarkedTips] = useState<number[]>([]);

  const healthTips = [
    {
      id: 1,
      title: '10 Simple Ways to Improve Your Heart Health',
      category: 'Cardiovascular',
      author: 'Dr. Sarah Johnson',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Discover evidence-based strategies to strengthen your heart and improve cardiovascular health through simple lifestyle changes.',
      content: 'Regular exercise, a balanced diet rich in omega-3 fatty acids, stress management, and adequate sleep are fundamental pillars of heart health...',
      tags: ['Heart Health', 'Exercise', 'Diet'],
      publishDate: '2025-01-10'
    },
    {
      id: 2,
      title: 'The Complete Guide to Better Sleep Hygiene',
      category: 'Sleep & Recovery',
      author: 'Dr. Michael Chen',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Transform your sleep quality with these expert-backed tips for creating the perfect sleep environment and bedtime routine.',
      content: 'Quality sleep is essential for physical recovery, mental clarity, and overall health. Creating a consistent sleep schedule and optimizing your sleep environment...',
      tags: ['Sleep', 'Recovery', 'Mental Health'],
      publishDate: '2025-01-08'
    },
    {
      id: 3,
      title: 'Nutrition Basics: Building a Balanced Plate',
      category: 'Nutrition',
      author: 'Dr. Emily Davis',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn how to create nutritionally balanced meals that fuel your body and support long-term health goals.',
      content: 'A balanced plate should include a variety of colorful vegetables, lean proteins, whole grains, and healthy fats. Understanding portion sizes and nutrient density...',
      tags: ['Nutrition', 'Diet', 'Wellness'],
      publishDate: '2025-01-06'
    },
    {
      id: 4,
      title: 'Managing Stress in the Modern World',
      category: 'Mental Health',
      author: 'Dr. James Rodriguez',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Effective strategies for recognizing, managing, and reducing stress to improve both mental and physical well-being.',
      content: 'Chronic stress can have significant impacts on your health. Learning to identify stress triggers and developing healthy coping mechanisms...',
      tags: ['Stress Management', 'Mental Health', 'Mindfulness'],
      publishDate: '2025-01-04'
    },
    {
      id: 5,
      title: 'The Importance of Regular Health Screenings',
      category: 'Preventive Care',
      author: 'Dr. Lisa Thompson',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Stay ahead of potential health issues with this comprehensive guide to age-appropriate health screenings and checkups.',
      content: 'Preventive care is one of the most effective ways to maintain long-term health. Regular screenings can detect issues early when they are most treatable...',
      tags: ['Preventive Care', 'Health Screening', 'Early Detection'],
      publishDate: '2025-01-02'
    },
    {
      id: 6,
      title: 'Hydration: More Than Just Drinking Water',
      category: 'Nutrition',
      author: 'Dr. Robert Wilson',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Understanding optimal hydration goes beyond water intake - learn about electrolyte balance and hydration timing.',
      content: 'Proper hydration is crucial for every bodily function. While water is essential, understanding electrolyte balance and timing of fluid intake...',
      tags: ['Hydration', 'Nutrition', 'Wellness'],
      publishDate: '2024-12-30'
    },
    {
      id: 7,
      title: 'Exercise for Beginners: Starting Your Fitness Journey',
      category: 'Fitness',
      author: 'Dr. Sarah Johnson',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A beginner-friendly guide to starting an exercise routine that you can stick with long-term.',
      content: 'Starting a fitness journey can feel overwhelming, but with the right approach, you can build sustainable habits. Begin with activities you enjoy...',
      tags: ['Exercise', 'Fitness', 'Beginner'],
      publishDate: '2024-12-28'
    },
    {
      id: 8,
      title: 'Digital Wellness: Managing Screen Time for Better Health',
      category: 'Mental Health',
      author: 'Dr. Michael Chen',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn how to create a healthy relationship with technology and reduce the negative impacts of excessive screen time.',
      content: 'In our digital age, managing screen time is crucial for mental and physical health. Excessive screen time can lead to eye strain, sleep disruption...',
      tags: ['Digital Wellness', 'Screen Time', 'Eye Health'],
      publishDate: '2024-12-26'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Topics' },
    { value: 'cardiovascular', label: 'Cardiovascular' },
    { value: 'sleep-recovery', label: 'Sleep & Recovery' },
    { value: 'nutrition', label: 'Nutrition' },
    { value: 'mental-health', label: 'Mental Health' },
    { value: 'preventive-care', label: 'Preventive Care' },
    { value: 'fitness', label: 'Fitness' }
  ];

  const filteredTips = healthTips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || 
                           tip.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleBookmark = (tipId: number) => {
    setBookmarkedTips(prev => 
      prev.includes(tipId) 
        ? prev.filter(id => id !== tipId)
        : [...prev, tipId]
    );
  };

  const handleShare = (tip: any) => {
    if (navigator.share) {
      navigator.share({
        title: tip.title,
        text: tip.description,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${tip.title} - ${window.location.href}`);
      alert('Link copied to clipboard!');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Health & Wellness Tips
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice and evidence-based tips to help you live your healthiest life
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                placeholder="Search health tips, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  className="border border-gray-300 rounded-lg px-3 py-3 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTips.length} tip{filteredTips.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.value === selectedCategory)?.label}`}
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <div key={tip.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm">
                  <button
                    onClick={() => toggleBookmark(tip.id)}
                    className={`transition-colors duration-200 ${
                      bookmarkedTips.includes(tip.id) 
                        ? 'text-yellow-500' 
                        : 'text-gray-400 hover:text-yellow-500'
                    }`}
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800 shadow-sm">
                    {tip.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {tip.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {tip.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {tip.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {tip.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tip.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary-50 text-primary-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">
                    {formatDate(tip.publishDate)}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleShare(tip)}
                      className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Heart className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No health tips found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse different categories.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-teal-600 rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Health Tips
            </h3>
            <p className="text-primary-100 mb-6">
              Get the latest evidence-based health and wellness tips delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTipsPage;