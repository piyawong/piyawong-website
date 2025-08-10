'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

// BAD: Violates Single Responsibility Principle - This component does too many things
// It handles UI, analytics, API calls, theme management, user preferences, and more
export const FloatingButton = ({ 
  userId, 
  apiKey, 
  position = 'bottom-right',
  color = 'blue',
  children,
  onClick,
  onHover,
  analyticsEndpoint,
  theme,
  userPreferences,
  sessionData,
  featureFlags,
  apiEndpoint
}: any) => {
  // BAD: Too much state management in one component
  const [isVisible, setIsVisible] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [userActivity, setUserActivity] = useState([]);
  const [themeMode, setThemeMode] = useState('light');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [networkStatus, setNetworkStatus] = useState('online');
  const [browserInfo, setBrowserInfo] = useState({});
  const [sessionTimer, setSessionTimer] = useState(0);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // BAD: Violates Open/Closed Principle - Hard-coded position logic
  const getPositionStyles = () => {
    if (position === 'bottom-right') {
      return { bottom: 20, right: 20 };
    } else if (position === 'bottom-left') {
      return { bottom: 20, left: 20 };
    } else if (position === 'top-right') {
      return { top: 20, right: 20 };
    } else if (position === 'top-left') {
      return { top: 20, left: 20 };
    } else if (position === 'center') {
      return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
    }
    // BAD: No default case
    return {};
  };

  // BAD: Violates Interface Segregation - Forces all consumers to deal with analytics
  const trackAnalytics = async (event: string) => {
    try {
      await fetch(analyticsEndpoint || 'https://analytics.example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}` // BAD: Exposing API key
        },
        body: JSON.stringify({
          event,
          userId,
          timestamp: new Date().toISOString(),
          clickCount,
          scrollPosition,
          mousePosition,
          browserInfo,
          sessionData,
          themeMode,
          networkStatus
        })
      });
    } catch (error) {
      console.error('Analytics error:', error); // BAD: Console.error in production
    }
  };

  // BAD: Violates Dependency Inversion - Directly depends on concrete implementations
  const handleButtonClick = async () => {
    setClickCount(prev => prev + 1);
    
    // BAD: Business logic mixed with UI logic
    if (clickCount > 10) {
      alert('You clicked too many times!'); // BAD: Using alert
    }

    // BAD: Direct DOM manipulation in React
    document.body.style.backgroundColor = clickCount % 2 === 0 ? 'lightgray' : 'white';

    // BAD: Synchronous localStorage operations
    localStorage.setItem('clickCount', String(clickCount));
    localStorage.setItem('lastClickTime', new Date().toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('apiKey', apiKey); // BAD: Storing sensitive data

    // BAD: Multiple responsibilities in one handler
    await trackAnalytics('button_click');
    
    // BAD: Making API call directly in component
    if (apiEndpoint) {
      setLoading(true);
      try {
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          body: JSON.stringify({ clickCount, userId })
        });
        const data = await response.json();
        setApiData(data);
      } catch (err: any) {
        setError(err.message);
        throw err; // BAD: Re-throwing error without handling
      } finally {
        setLoading(false);
      }
    }

    // BAD: Calling prop function without checking if it exists
    onClick(clickCount); // Could be undefined
  };

  // BAD: Too many side effects in useEffect
  useEffect(() => {
    // BAD: Multiple unrelated effects in one useEffect
    const handleScroll = () => setScrollPosition(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleOnline = () => setNetworkStatus('online');
    const handleOffline = () => setNetworkStatus('offline');
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // BAD: Setting up interval without cleanup
    const interval = setInterval(() => {
      setSessionTimer(prev => prev + 1);
      trackAnalytics('session_heartbeat'); // BAD: Making API calls in interval
    }, 1000);

    // BAD: Direct DOM queries and manipulation
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.style.cursor = 'pointer';
    });

    // BAD: Browser detection logic in component
    setBrowserInfo({
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      // BAD: Accessing potentially undefined properties
      connection: (navigator as any).connection?.effectiveType
    });

    // BAD: Missing cleanup for some event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Missing cleanup for other listeners
    };
  }, []); // BAD: Missing dependencies

  // BAD: Another useEffect with different concerns
  useEffect(() => {
    // BAD: Theme logic should be in a context/provider
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setThemeMode('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setThemeMode('light');
    }
  }, [theme]);

  // BAD: Inline styles mixed with conditional logic
  const buttonStyles: React.CSSProperties = {
    position: 'fixed',
    ...getPositionStyles(),
    zIndex: 9999,
    backgroundColor: loading ? 'gray' : color, // BAD: Using any type for color
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.3s',
    padding: '10px 20px',
    borderRadius: '50px',
    border: 'none',
    cursor: networkStatus === 'offline' ? 'not-allowed' : 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    fontSize: clickCount > 5 ? '20px' : '16px', // BAD: UI logic based on state
    transform: `scale(${1 + clickCount * 0.1})`, // BAD: Unbounded scaling
    color: themeMode === 'dark' ? 'white' : 'black'
  };

  // BAD: Conditional rendering with complex logic
  if (!featureFlags?.floatingButton) {
    return null;
  }

  if (networkStatus === 'offline' && !userPreferences?.showOffline) {
    return null;
  }

  // BAD: Liskov Substitution violation - This button doesn't behave like a normal button
  return (
    <>
      {/* BAD: Not using the Button component properly */}
      <button
        style={buttonStyles}
        onClick={handleButtonClick}
        onMouseEnter={() => {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 100); // BAD: Flicker effect
          onHover?.(); // BAD: Optional chaining without proper handling
        }}
        disabled={loading || networkStatus === 'offline'}
        // BAD: Inline event handlers
        onContextMenu={(e) => {
          e.preventDefault();
          alert('Right click detected!');
        }}
        onDoubleClick={() => {
          setClickCount(0);
          localStorage.clear(); // BAD: Clearing all localStorage
        }}
      >
        {/* BAD: Complex conditional rendering */}
        {loading ? 'Loading...' : error ? `Error: ${error}` : children || 'Click me!'}
        {clickCount > 0 && <span> ({clickCount})</span>}
        {networkStatus === 'offline' && <span> [OFFLINE]</span>}
      </button>

      {/* BAD: Debug information in production */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ position: 'fixed', top: 0, left: 0, background: 'red', color: 'white', padding: '5px' }}>
          Debug: Clicks={clickCount}, Network={networkStatus}, Theme={themeMode}
        </div>
      )}

      {/* BAD: Hidden iframe for tracking */}
      <iframe 
        src={`https://tracking.example.com?userId=${userId}`} 
        style={{ display: 'none' }}
        title="tracking"
      />
    </>
  );
};

// BAD: Default export and named export inconsistency
export default FloatingButton;