import React, { useState } from 'react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const navigationItems = [
    {
      name: 'Flood',
      subItems: [
        { name: 'CRIMSON-Flood Inundation Dashboard', url: '#' }
      ]
    },
    {
      name: 'Drought',
      subItems: [
        { name: 'Construction page', url: '#' }
      ]
    },
    {
      name: 'Climate',
      subItems: [
        { name: 'Construction page', url: '#' }
      ]
    },
    {
      name: 'Infra-system',
      isMultiColumn: true,
      subItems: [
        {
          name: 'Dams and Reservoirs',
          subItems: [
            { name: 'National Inventory of Dams (NID)', url: 'https://nid.sec.usace.army.mil/#/' },
            { name: 'Global Reservoirs and Dams (GRanD)', url: 'https://www.globaldamwatch.org/database' }
          ]
        },
        {
          name: 'Rivers and Lakes',
          subItems: [
            { name: 'Rivers', url: 'https://www.hydrosheds.org/products/hydrorivers' },
            { name: 'Lakes', url: 'https://www.hydrosheds.org/products/hydrolakes' }
          ]
        },
        {
          name: 'Levees',
          subItems: [
            { name: 'National Levee Data (NLD)', url: 'https://levees.sec.usace.army.mil/data-services/services/' }
          ]
        }
      ]
    }
  ];

  const handleMouseEnter = (index) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
    setHoverTimeout(timeout);
  };

  const handleClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const renderDropdownContent = (activeItem) => {
    if (!activeItem) return null;

    if (activeItem.isMultiColumn) {
      return (
        <div className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-8">
              {activeItem.subItems.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-3 pl-2 text-md">{item.name}</h3>
                  <div className="space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 text-md text-gray-600 hover:text-red-700 rounded hover:bg-gray-50"
                      >
                        <span>{subItem.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            {activeItem.subItems.map((item, index) => (
              <div key={index} className="px-3 py-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-800 hover:text-red-700 font-medium"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <header className="bg-gradient-to-r from-red-950 to-red-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white">Crimson Dashboard</h1>
          </div>
          
          <nav className="hidden lg:flex justify-center flex-1 relative">
            <ul className="flex space-x-6">
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    className="text-white font-medium lg:text-lg px-4 py-2 rounded inline-flex items-center"
                    type="button"
                    onClick={() => handleClick(index)}
                  >
                    {item.name}
                    <svg className="w-4 h-4 ml-2 mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Unified dropdown menu */}
            {activeDropdown !== null && (
              <div 
                className="absolute center z-10 mt-16 bg-white rounded-lg shadow-lg w-150"
                onMouseEnter={() => handleMouseEnter(activeDropdown)}
                onMouseLeave={handleMouseLeave}
              >
                {renderDropdownContent(navigationItems[activeDropdown])}
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
