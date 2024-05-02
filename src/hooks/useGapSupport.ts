import { useEffect, useState } from 'react';

const useGapSupport = (): boolean => {
  const [supportsGap, setSupportsGap] = useState<boolean>(true);

  useEffect(() => {
    const iOSVersion = parseFloat(
      `${(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1]}`
        .replace('undefined', '3_2')
        .replace('_', '.')
        .replace('_', ''),
    );
    // Check if the iOS version is 14.4 or below
    if (iOSVersion <= 14.4) {
      setSupportsGap(false);
      return;
    }

    // Check if the gap property is properly supported in iOS 16.6 or above
    if (iOSVersion >= 16.6) {
      const testElement = document.createElement('div');
      testElement.style.cssText = 'display: flex; gap: 1px;';

      document.body.appendChild(testElement);

      const gapSupported = window.getComputedStyle(testElement).rowGap === '1px' && window.getComputedStyle(testElement).columnGap === '1px';

      document.body.removeChild(testElement);

      setSupportsGap(gapSupported);
    }

    // For versions between 14.4 and 16.6, you might need to handle the gap issue based on specific behaviors or use cases
  }, []);

  return supportsGap;
};

export default useGapSupport;
