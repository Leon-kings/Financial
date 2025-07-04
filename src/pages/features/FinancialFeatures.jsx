/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Check, ArrowForward, AccountBalance, Security, SupportAgent, TrendingUp } from '@mui/icons-material';

export const FinancialFeatureSection = () => {
  // Online image URLs
  const financialMeeting = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
  const growthChart = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80';
  const riskAnalysis = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
  const financialPlanning = 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80';
  const supportTeam = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
  const happyClients = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80';

  const [openModal, setOpenModal] = useState(null);
  const [expandedInfo, setExpandedInfo] = useState({
    investmentGrowth: false,
    riskManagement: false,
    financialPlanning: false,
    exploreMore: false
  });

  const financialFeatures = [
    {
      id: 'investmentGrowth',
      icon: <TrendingUp className="text-primary text-3xl mb-3" />,
      title: 'Investment Growth',
      shortDesc: 'Maximize your returns with our proven investment strategies',
      stats: 'Average 8.2% annual return over past 10 years',
      image: growthChart,
      fullDesc: [
        'Our investment growth services leverage a diversified portfolio approach to maximize returns while managing risk.',
        'Key features:',
        '- Customized investment portfolios based on your risk tolerance',
        '- Regular portfolio rebalancing to maintain optimal asset allocation',
        '- Access to exclusive investment opportunities',
        '- Tax-efficient investment strategies',
        'Performance highlights:',
        '- 8.2% average annual return (10-year)',
        '- Outperformed S&P 500 in 7 of last 10 years',
        '- 95% client satisfaction rate'
      ],
      supportOptions: [
        'Dedicated investment advisor',
        'Quarterly performance reviews',
        '24/7 portfolio access via mobile app'
      ]
    },
    {
      id: 'riskManagement',
      icon: <Security className="text-primary text-3xl mb-3" />,
      title: 'Risk Management',
      shortDesc: 'Protect your assets with comprehensive risk assessment',
      stats: 'Reduced client portfolio volatility by 32% on average',
      image: riskAnalysis,
      fullDesc: [
        'Our risk management services help protect your wealth through:',
        '- Advanced portfolio stress testing',
        '- Diversification across asset classes and geographies',
        '- Hedging strategies using derivatives when appropriate',
        '- Regular risk profile reassessments',
        'Our results:',
        '- 32% average reduction in portfolio volatility',
        '- 89% of clients maintained or improved returns while reducing risk',
        '- Crisis protection during market downturns'
      ],
      supportOptions: [
        'Risk assessment toolkit',
        'Monthly risk reports',
        'Emergency consultation line'
      ]
    },
    {
      id: 'financialPlanning',
      icon: <AccountBalance className="text-primary text-3xl mb-3" />,
      title: 'Financial Planning',
      shortDesc: 'Comprehensive plans for all life stages',
      stats: 'Helped clients achieve 94% of their financial goals',
      image: financialPlanning,
      fullDesc: [
        'Our certified financial planners create customized roadmaps for:',
        '- Retirement planning (average client retires 4 years earlier than planned)',
        '- Education funding strategies',
        '- Estate planning and wealth transfer',
        '- Tax optimization',
        '- Insurance needs analysis',
        'Planning process includes:',
        '- Detailed net worth analysis',
        '- Cash flow management',
        '- Scenario planning for life events',
        '- Regular progress reviews'
      ],
      supportOptions: [
        'Unlimited planning sessions',
        'Document vault for important files',
        'Family meeting facilitation'
      ]
    }
  ];

  const financialSupportData = {
    title: 'Dedicated Financial Support',
    image: supportTeam,
    services: [
      {
        name: 'Client Success Team',
        availability: '24/7',
        channels: ['Phone', 'Email', 'Live Chat', 'Video Conference'],
        responseTime: 'Under 15 minutes for urgent requests'
      },
      {
        name: 'Technical Support',
        availability: 'Mon-Fri 6am-9pm EST',
        channels: ['Phone', 'Email', 'Live Chat'],
        responseTime: 'Under 1 hour for critical issues'
      },
      {
        name: 'Financial Advisors',
        availability: 'By appointment',
        channels: ['In-person', 'Video Conference', 'Phone'],
        responseTime: 'Scheduled within 48 hours'
      }
    ],
    satisfaction: {
      rating: '4.9/5',
      resolutionRate: '98%',
      clientRetention: '92%'
    }
  };

  const exploreMoreContent = {
    title: 'Why Choose Our Financial Services?',
    description: 'We provide comprehensive financial solutions tailored to your unique needs and goals',
    image: happyClients,
    fullContent: `## Our Financial Services Advantage

**1. Proven Track Record**
- 25+ years in wealth management
- $4.2B in assets under management
- 89% client retention rate

**2. Comprehensive Services**
- Investment management
- Retirement planning
- Tax strategies
- Estate planning
- Risk management

**3. Cutting-Edge Technology**
- Real-time portfolio tracking
- AI-driven investment insights
- Secure document sharing

**4. Transparent Pricing**
- Clear fee structure
- No hidden charges
- Performance-based options

**5. Exceptional Support**
- Dedicated financial team
- Multiple communication channels
- Rapid response times

**Client Success Stories**
- "Helped grow our retirement fund by 40% in 5 years" - Sarah T.
- "Saved us $28,000 in taxes last year alone" - Michael R.
- "Provided peace of mind during market volatility" - The Johnson Family`
  };

  const handleReadMore = (featureId) => {
    setOpenModal(featureId);
    toast.info(`Opening ${featureId.replace(/([A-Z])/g, ' $1')} details`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const toggleExpand = (id) => {
    setExpandedInfo(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen mt-4 mb-2 bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full"
            >
              <p className="inline-block border rounded text-primary font-semibold py-1 px-3 bg-white mb-4">
                Trusted Financial Services
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Building and Protecting Your Wealth
              </h1>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                {exploreMoreContent.description}
              </p>
              
              <motion.div 
                className="mb-8 rounded-lg overflow-hidden shadow-md w-full max-w-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={financialMeeting} 
                  alt="Financial advisors meeting with clients" 
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              
              <div className="mb-8 p-4 bg-white rounded-lg border border-gray-200 shadow-sm w-full max-w-xl">
                <h3 className="font-semibold mb-2 flex items-center justify-center lg:justify-start">
                  <SupportAgent className="text-primary mr-2" /> Financial Support Highlights
                </h3>
                <ul className="list-disc pl-5 text-gray-600 text-left">
                  <li>Average response time: under 30 minutes</li>
                  <li>{financialSupportData.satisfaction.rating} client satisfaction rating</li>
                  <li>{financialSupportData.satisfaction.resolutionRate} issue resolution rate</li>
                </ul>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded transition-colors flex items-center justify-center mx-auto lg:mx-0"
                onClick={() => setOpenModal('exploreMore')}
              >
                Explore Our Services
                <ArrowForward className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
          
          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {financialFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="flex justify-center"
                >
                  <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow w-full max-w-xs flex flex-col">
                    <div className="flex items-start mb-4">
                      <div className="mr-4">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{feature.title}</h4>
                        <p className="text-gray-600 text-sm mt-2">{feature.shortDesc}</p>
                        <div className="text-sm text-primary font-medium mt-2">
                          {feature.stats}
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="rounded overflow-hidden mb-4">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <button
                        className="font-semibold text-primary hover:text-primary-dark flex items-center justify-end"
                        onClick={() => handleReadMore(feature.id)}
                      >
                        Read More <ArrowForward className="ms-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for financial feature details */}
      {openModal && financialFeatures.some(f => f.id === openModal) && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
        >
          <motion.div
            className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {financialFeatures.find(f => f.id === openModal).title}
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6 rounded-lg overflow-hidden shadow">
                  <img 
                    src={financialFeatures.find(f => f.id === openModal).image} 
                    alt={financialFeatures.find(f => f.id === openModal).title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
                
                <h4 className="font-semibold mb-3 text-lg">Service Details</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {financialFeatures.find(f => f.id === openModal).fullDesc.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="bg-gray-50 p-5 rounded-lg h-full">
                  <h4 className="font-semibold mb-3 text-lg flex items-center">
                    <SupportAgent className="text-primary mr-2" /> Support Features
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {financialFeatures.find(f => f.id === openModal).supportOptions.map((option, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 p-4 bg-white rounded border border-gray-200 shadow-sm">
                    <h5 className="font-medium mb-2">Performance Snapshot</h5>
                    <p className="text-sm text-gray-600">
                      {financialFeatures.find(f => f.id === openModal).stats}
                    </p>
                    <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${Math.random() * 60 + 40}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-medium mb-2">Ready to get started?</h5>
                    <button className="w-full py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Modal for Explore More */}
      {openModal === 'exploreMore' && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
        >
          <motion.div
            className="bg-white rounded-lg p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{exploreMoreContent.title}</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="mb-6 rounded-lg overflow-hidden shadow">
                  <img 
                    src={exploreMoreContent.image} 
                    alt="Happy clients" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                {expandedInfo.exploreMore ? (
                  <div className="prose" dangerouslySetInnerHTML={{ 
                    __html: exploreMoreContent.fullContent
                      .replace(/\n/g, '<br />')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\#\#(.*?)\n/g, '<h3>$1</h3>')
                  }} />
                ) : (
                  <>
                    <p className="text-gray-700 mb-4">{exploreMoreContent.description}</p>
                    <button
                      className="text-primary hover:text-primary-dark font-semibold mt-2 flex items-center"
                      onClick={() => toggleExpand('exploreMore')}
                    >
                      Show Complete Overview <ArrowForward className="ml-1" />
                    </button>
                  </>
                )}
              </div>
              
              <div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <SupportAgent className="text-primary mr-2" /> Our Financial Support
                  </h4>
                  
                  <div className="mb-6 rounded overflow-hidden shadow">
                    <img 
                      src={financialSupportData.image} 
                      alt="Support team" 
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {financialSupportData.services.map((service, index) => (
                      <div key={index} className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <h5 className="font-medium">{service.name}</h5>
                        <div className="text-sm text-gray-600 mt-1">
                          <p><strong>Availability:</strong> {service.availability}</p>
                          <p><strong>Channels:</strong> {service.channels.join(', ')}</p>
                          <p><strong>Response Time:</strong> {service.responseTime}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-primary bg-opacity-10 rounded-lg border border-primary border-opacity-20">
                    <h5 className="font-semibold text-primary mb-3">Client Satisfaction Metrics</h5>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-2 bg-white rounded shadow-sm">
                        <div className="text-2xl font-bold text-primary">{financialSupportData.satisfaction.rating}</div>
                        <div className="text-xs text-gray-600 mt-1">Satisfaction Rating</div>
                      </div>
                      <div className="p-2 bg-white rounded shadow-sm">
                        <div className="text-2xl font-bold text-primary">{financialSupportData.satisfaction.resolutionRate}</div>
                        <div className="text-xs text-gray-600 mt-1">Resolution Rate</div>
                      </div>
                      <div className="p-2 bg-white rounded shadow-sm">
                        <div className="text-2xl font-bold text-primary">{financialSupportData.satisfaction.clientRetention}</div>
                        <div className="text-xs text-gray-600 mt-1">Retention Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between">
              <button
                className="px-4 py-2 text-primary hover:text-primary-dark font-medium"
                onClick={() => setOpenModal('support')}
              >
                View Detailed Support Options
              </button>
              <button
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

