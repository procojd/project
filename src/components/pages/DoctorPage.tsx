import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Clock, Heart } from 'lucide-react';

const DoctorPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 127,
      location: 'Downtown Medical Center',
      nextAvailable: 'Today, 2:00 PM',
      experience: '15+ years',
      description: 'Specialized in cardiovascular medicine and preventive care.',
      price: '$150'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'General Practice',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 98,
      location: 'Westside Clinic',
      nextAvailable: 'Tomorrow, 10:30 AM',
      experience: '12+ years',
      description: 'Comprehensive primary care for patients of all ages.',
      price: '$120'
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialty: 'Dermatologist',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 156,
      location: 'Skin Health Institute',
      nextAvailable: 'Dec 28, 3:00 PM',
      experience: '10+ years',
      description: 'Expert in skin conditions, cosmetic dermatology, and skin cancer prevention.',
      price: '$180'
    },
    {
      id: 4,
      name: 'Dr. Robert Wilson',
      specialty: 'Orthopedist',
      image: 'https://images.pexels.com/photos/6749812/pexels-photo-6749812.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 89,
      location: 'Sports Medicine Center',
      nextAvailable: 'Dec 29, 11:00 AM',
      experience: '18+ years',
      description: 'Specializes in sports injuries and joint replacement surgery.',
      price: '$200'
    },
    {
      id: 5,
      name: 'Dr. Lisa Thompson',
      specialty: 'Pediatrician',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 203,
      location: 'Children\'s Health Clinic',
      nextAvailable: 'Dec 30, 9:00 AM',
      experience: '14+ years',
      description: 'Dedicated to providing comprehensive healthcare for children and adolescents.',
      price: '$140'
    },
    {
      id: 6,
      name: 'Dr. James Rodriguez',
      specialty: 'Psychiatrist',
      image: 'https://images.pexels.com/photos/6749815/pexels-photo-6749815.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 74,
      location: 'Mental Health Associates',
      nextAvailable: 'Jan 2, 1:00 PM',
      experience: '16+ years',
      description: 'Mental health specialist focusing on anxiety, depression, and behavioral therapy.',
      price: '$160'
    }
  ];

  const specialties = [
    'All Specialties',
    'Cardiologist',
    'General Practice', 
    'Dermatologist',
    'Orthopedist',
    'Pediatrician',
    'Psychiatrist'
  ];

  const locations = [
    'All Locations',
    'Downtown Medical Center',
    'Westside Clinic',
    'Skin Health Institute',
    'Sports Medicine Center',
    'Children\'s Health Clinic',
    'Mental Health Associates'
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === '' || selectedSpecialty === 'All Specialties' || 
                            doctor.specialty === selectedSpecialty;
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All Locations' ||
                           doctor.location === selectedLocation;
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  const handleBookAppointment = (doctorName: string) => {
    // Handle booking appointment
    alert(`Booking appointment with ${doctorName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Your Healthcare Provider
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with qualified doctors and specialists for all your healthcare needs
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Specialty Filter */}
            <div>
              <select
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <select
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} available
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Doctor Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm">
                  <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer" />
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-primary-600 font-medium">{doctor.specialty}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{doctor.price}</div>
                    <div className="text-sm text-gray-500">per visit</div>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">{doctor.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{doctor.reviews} reviews</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{doctor.experience}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{doctor.description}</p>

                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {doctor.location}
                </div>

                <div className="flex items-center text-sm text-green-600 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  Next available: {doctor.nextAvailable}
                </div>

                <button
                  onClick={() => handleBookAppointment(doctor.name)}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorPage;