import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Clock, 
  Heart, 
  Activity, 
  TrendingUp, 
  Bell,
  ArrowRight 
} from 'lucide-react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const quickAccessCards = [
    {
      title: 'Book Appointment',
      description: 'Schedule with your preferred doctor',
      icon: <Calendar className="w-8 h-8 text-primary-500" />,
      link: '/doctors',
      color: 'bg-primary-50 hover:bg-primary-100'
    },
    {
      title: 'My Schedule',
      description: 'View upcoming appointments',
      icon: <Clock className="w-8 h-8 text-teal-500" />,
      link: '/schedule',
      color: 'bg-teal-50 hover:bg-teal-100'
    },
    {
      title: 'Health History',
      description: 'Access your medical records',
      icon: <Activity className="w-8 h-8 text-green-500" />,
      link: '/history',
      color: 'bg-green-50 hover:bg-green-100'
    },
    {
      title: 'Wellness Tips',
      description: 'Get personalized health advice',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      link: '/health-tips',
      color: 'bg-red-50 hover:bg-red-100'
    }
  ];

  const recentAppointments = [
    {
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: 'Today, 2:00 PM',
      status: 'upcoming'
    },
    {
      doctor: 'Dr. Michael Chen',
      specialty: 'General Practice',
      date: 'Tomorrow, 10:30 AM',
      status: 'upcoming'
    },
    {
      doctor: 'Dr. Emily Davis',
      specialty: 'Dermatologist',
      date: 'Dec 28, 3:00 PM',
      status: 'completed'
    }
  ];

  const healthMetrics = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Blood Pressure (Systolic)',
        data: [120, 125, 118, 122, 120, 119],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Heart Rate',
        data: [72, 75, 70, 73, 71, 74],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      }
    ],
  };

  const wellnessScore = {
    labels: ['Exercise', 'Sleep', 'Nutrition', 'Stress Management'],
    datasets: [
      {
        data: [85, 72, 90, 65],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Health Metrics Over Time',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Wellness Score',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
              <p className="text-gray-600 mt-1">Here's what's happening with your health today.</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <Bell className="w-6 h-6 text-gray-600" />
              </button>
              <div className="text-sm text-gray-500">
                Last visit: Dec 15, 2024
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-primary-50 rounded-lg">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Upcoming</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-50 rounded-lg">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">92%</p>
                <p className="text-sm text-gray-600">Health Score</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-teal-50 rounded-lg">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">5</p>
                <p className="text-sm text-gray-600">Doctors</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">+12%</p>
                <p className="text-sm text-gray-600">This Month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickAccessCards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className={`${card.color} p-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                  <div className="flex items-center text-sm font-medium text-gray-700">
                    Access now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
                <div className="opacity-80">
                  {card.icon}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Health Metrics Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="h-80">
              <Line data={healthMetrics} options={chartOptions} />
            </div>
          </div>

          {/* Wellness Score */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="h-80">
              <Doughnut data={wellnessScore} options={doughnutOptions} />
            </div>
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Appointments</h2>
            <Link to="/schedule" className="text-primary-600 hover:text-primary-700 font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{appointment.doctor}</h3>
                    <p className="text-sm text-gray-600">{appointment.specialty}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    appointment.status === 'upcoming' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;