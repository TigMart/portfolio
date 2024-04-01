import { useEffect, useState } from 'react';

// Custom hook to check if browser supports gap property
const useGapSupport = (): boolean => {
  const [supportsGap, setSupportsGap] = useState<boolean>(false);

  useEffect(() => {
    const testElement = document.createElement('div');
    testElement.style.cssText = 'display: grid; grid-gap: 1px;';

    // Append the test element to the body
    document.body.appendChild(testElement);

    // Check if the gap property is supported
    const gapSupported = window.getComputedStyle(testElement).gap === '1px';

    // Remove the test element from the body
    document.body.removeChild(testElement);

    // Update state with the result
    setSupportsGap(gapSupported);
  }, []);

  return supportsGap;
};

export default useGapSupport;
