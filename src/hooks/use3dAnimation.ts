import { useState } from 'react';

import { Animation } from '@components/landing/AboutSection/type';

const use3dAnimation = () => {
  const [rotation, setRotation] = useState<Animation>({ x: 0, y: 0 });
  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget;

    const width = el.clientWidth;
    const height = el.clientHeight;

    const rect = el.getBoundingClientRect();
    const xVal = e.clientX - rect.left;
    const yVal = e.clientY - rect.top;

    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);

    const string = `perspective(1000px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    el.style.transform = string;

    setRotation({ x: xRotation, y: yRotation });
  };

  const handleOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget;
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
  };
  const handleDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget;
    el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
  };
  const handleUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget;
    el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
  };
  return {
    rotation,
    handleMove,
    handleOut,
    handleDown,
    handleUp,
  };
};

export default use3dAnimation;
