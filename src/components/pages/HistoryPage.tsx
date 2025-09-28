import React, { useState } from 'react';
import { Calendar, User, FileText, Download, Search, Filter } from 'lucide-react';

const HistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const medicalHistory = [
    {
      id: 1,
      date: '2024-12-15',
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      type: 'Consultation',
      diagnosis: 'Routine Cardiac Checkup',
      prescription: 'Continue current medications. Schedule follow-up in 6 months.',
      notes: 'Patient shows good cardiovascular health. Blood pressure stable.',
      attachments: ['ECG_Report.pdf', 'Blood_Test_Results.pdf'],
      status: 'completed'
    },
    {
      id: 2,
      date: '2024-11-28',
      doctor: 'Dr. Michael Chen',
      specialty: 'General Practice',
      type: 'Physical Exam',
      diagnosis: 'Annual Physical - All Normal',
      prescription: 'Multivitamin daily. Continue regular exercise routine.',
      notes: 'Overall health excellent. Discussed stress management techniques.',
      attachments: ['Physical_Exam_Report.pdf'],
      status: 'completed'
    },
    {
      id: 3,
      date: '2024-11-10',
      doctor: 'Dr. Emily Davis',
      specialty: 'Dermatologist',
      type: 'Specialist Consultation',
      diagnosis: 'Benign Mole Examination',
      prescription: 'Annual skin check recommended. Use SPF 30+ sunscreen daily.',
      notes: 'No suspicious lesions found. Preventive care emphasized.',
      attachments: ['Dermatology_Report.pdf', 'Skin_Photos.pdf'],
      status: 'completed'
    },
    {
      id: 4,
      date: '2024-10-22',
      doctor: 'Dr. Robert Wilson',
      specialty: 'Orthopedist',
      type: 'Follow-up',
      diagnosis: 'Knee Injury Recovery',
      prescription: 'Physical therapy twice weekly. Ibuprofen as needed for pain.',
      notes: 'Knee mobility improving. Continue rehabilitation exercises.',
      attachments: ['X-Ray_Results.pdf', 'PT_Plan.pdf'],
      status: 'completed'
    },
    {
      id: 5,
      date: '2024-09-18',
      doctor: 'Dr. Lisa Thompson',
      specialty: 'Endocrinologist',
      type: 'Lab Review',
      diagnosis: 'Thyroid Function Normal',
      prescription: 'Continue current thyroid medication dosage.',
      notes: 'TSH levels within normal range. Next check in 3 months.',
      attachments: ['Thyroid_Function_Test.pdf'],
      status: 'completed'
    },
    {
      id: 6,
      date: '2024-08-30',
      doctor: 'Dr. James Rodriguez',
      specialty: 'Psychiatrist',
      type: 'Therapy Session',
      diagnosis: 'Anxiety Management',
      prescription: 'Continue mindfulness practice. Adjust medication if needed.',
      notes: 'Patient showing improvement with current treatment plan.',
      attachments: ['Mental_Health_Assessment.pdf'],
      status: 'completed'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Records' },
    { value: 'consultation', label: 'Consultations' },
    { value: 'physical-exam', label: 'Physical Exams' },
    { value: 'specialist', label: 'Specialist Visits' },
    { value: 'follow-up', label: 'Follow-ups' },
    { value: 'lab-review', label: 'Lab Reviews' }
  ];

  const filteredHistory = medicalHistory.filter(record => {
    const matchesSearch = record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         record.type.toLowerCase().replace(' ', '-') === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleDownload = (filename: string) => {
    // Handle file download
    console.log('Downloading:', filename);
    alert(`Downloading ${filename}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Medical History
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your complete healthcare journey - all consultations, treatments, and medical records in one place
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                placeholder="Search by doctor, diagnosis, or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  className="border border-gray-300 rounded-lg px-3 py-3 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  {filterOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
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
            Showing {filteredHistory.length} record{filteredHistory.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-8">
            {filteredHistory.map((record, index) => (
              <div key={record.id} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-sm"></div>

                {/* Content */}
                <div className="ml-16 bg-white rounded-xl shadow-sm p-6 w-full hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{record.diagnosis}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                          {record.status}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(record.date)}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {record.doctor} - {record.specialty}
                        </div>
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {record.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Prescription */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Prescription & Treatment</h4>
                      <p className="text-gray-700 text-sm bg-blue-50 p-3 rounded-lg">
                        {record.prescription}
                      </p>
                    </div>

                    {/* Notes */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Doctor's Notes</h4>
                      <p className="text-gray-700 text-sm bg-green-50 p-3 rounded-lg">
                        {record.notes}
                      </p>
                    </div>
                  </div>

                  {/* Attachments */}
                  {record.attachments.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">Attachments</h4>
                      <div className="flex flex-wrap gap-2">
                        {record.attachments.map((filename, index) => (
                          <button
                            key={index}
                            onClick={() => handleDownload(filename)}
                            className="inline-flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors duration-200"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            {filename}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredHistory.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FileText className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No medical records found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Summary Stats */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Healthcare Summary</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {medicalHistory.length}
              </div>
              <div className="text-sm text-gray-600">Total Visits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {new Set(medicalHistory.map(r => r.doctor)).size}
              </div>
              <div className="text-sm text-gray-600">Doctors Consulted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600 mb-1">
                {new Set(medicalHistory.map(r => r.specialty)).size}
              </div>
              <div className="text-sm text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {medicalHistory.reduce((acc, r) => acc + r.attachments.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Documents</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;