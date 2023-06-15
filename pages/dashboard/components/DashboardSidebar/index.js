import React, {useState, useEffect} from 'react'
import SidebarDesktop from './SidebarDesktop'
import SidebarMobile from './SidebarMobile'

const DashboardSidebar = ({ activeNavItem, onNavItemClick }) => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Check the width of the browser window
      const windowWidth = window.innerWidth;

      // Set the showComponent state based on the window width
      setShowComponent(windowWidth < 768); // Adjust the breakpoint value as needed
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="md:block md:flex md:flex-shrink-0">
      {showComponent ? (
        <SidebarMobile activeNavItem={activeNavItem} onNavItemClick={onNavItemClick}/>
      ) : (
        <SidebarDesktop activeNavItem={activeNavItem} onNavItemClick={onNavItemClick}/>
      )}
    </div>
  )
}

export default DashboardSidebar