import React, { useState } from 'react';
import { Calendar, Clock, Plus, CreditCard as Edit3, Trash2, User, MapPin } from 'lucide-react';

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const appointments = [
    {
      id: 1,
      title: 'Cardiology Checkup',
      doctor: 'Dr. Sarah Johnson',
      date: '2025-01-15',
      time: '2:00 PM',
      duration: '30 min',
      location: 'Downtown Medical Center',
      type: 'In-person',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'General Consultation',
      doctor: 'Dr. Michael Chen',
      date: '2025-01-16',
      time: '10:30 AM',
      duration: '45 min',
      location: 'Westside Clinic',
      type: 'In-person',
      status: 'confirmed'
    },
    {
      id: 3,
      title: 'Follow-up Appointment',
      doctor: 'Dr. Emily Davis',
      date: '2025-01-18',
      time: '3:00 PM',
      duration: '20 min',
      location: 'Virtual',
      type: 'Video Call',
      status: 'pending'
    },
    {
      id: 4,
      title: 'Routine Physical',
      doctor: 'Dr. Michael Chen',
      date: '2025-01-22',
      time: '9:00 AM',
      duration: '60 min',
      location: 'Westside Clinic',
      type: 'In-person',
      status: 'confirmed'
    }
  ];

  const currentMonth = selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const today = new Date().toDateString();

  // Generate calendar days
  const generateCalendarDays = () => {
    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  const getAppointmentsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return appointments.filter(apt => apt.date === dateString);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleAddAppointment = () => {
    setShowAddModal(true);
  };

  const handleEditAppointment = (appointment: any) => {
    setSelectedAppointment(appointment);
    setShowAddModal(true);
  };

  const handleDeleteAppointment = (appointmentId: number) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      // Handle delete logic here
      console.log('Deleting appointment:', appointmentId);
    }
  };

  const navigateMonth = (direction: number) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setSelectedDate(newDate);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Schedule & Calendar</h1>
            <p className="text-gray-600 mt-1">Manage your appointments and healthcare schedule</p>
          </div>
          <button
            onClick={handleAddAppointment}
            className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Appointment
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">{currentMonth}</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((date, index) => {
                  const isToday = date.toDateString() === today;
                  const isCurrentMonth = date.getMonth() === selectedDate.getMonth();
                  const dayAppointments = getAppointmentsForDate(date);
                  const isSelected = date.toDateString() === selectedDate.toDateString();

                  return (
                    <div
                      key={index}
                      onClick={() => handleDateClick(date)}
                      className={`p-2 h-20 border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                        isSelected ? 'bg-primary-50 border-primary-200' : ''
                      }`}
                    >
                      <div className={`text-sm ${
                        isToday ? 'bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center' :
                        isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        {date.getDate()}
                      </div>
                      {dayAppointments.length > 0 && (
                        <div className="mt-1">
                          {dayAppointments.slice(0, 2).map((apt) => (
                            <div
                              key={apt.id}
                              className={`text-xs p-1 rounded mb-1 ${
                                apt.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {apt.time}
                            </div>
                          ))}
                          {dayAppointments.length > 2 && (
                            <div className="text-xs text-gray-500">
                              +{dayAppointments.length - 2} more
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Appointments List */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Appointments for {selectedDate.toLocaleDateString()}
              </h3>

              {getAppointmentsForDate(selectedDate).length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No appointments scheduled</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {getAppointmentsForDate(selectedDate).map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">{appointment.title}</h4>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <User className="w-4 h-4 mr-1" />
                            {appointment.doctor}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <Clock className="w-4 h-4 mr-1" />
                            {appointment.time} ({appointment.duration})
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            {appointment.location}
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            appointment.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                        <div className="flex space-x-1 ml-2">
                          <button
                            onClick={() => handleEditAppointment(appointment)}
                            className="p-1 text-gray-400 hover:text-primary-600 transition-colors duration-200"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteAppointment(appointment.id)}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Upcoming Appointments Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming This Week</h3>
              <div className="space-y-3">
                {appointments.filter(apt => {
                  const aptDate = new Date(apt.date);
                  const weekFromNow = new Date();
                  weekFromNow.setDate(weekFromNow.getDate() + 7);
                  return aptDate >= new Date() && aptDate <= weekFromNow;
                }).map((appointment) => (
                  <div key={appointment.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{appointment.title}</p>
                      <p className="text-xs text-gray-600">
                        {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Appointment Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {selectedAppointment ? 'Edit Appointment' : 'New Appointment'}
            </h3>
            {/* Modal form would go here */}
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setSelectedAppointment(null);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setSelectedAppointment(null);
                }}
                className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchedulePage;