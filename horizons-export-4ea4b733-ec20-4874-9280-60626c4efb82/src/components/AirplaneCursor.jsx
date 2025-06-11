import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Plane, Star } from 'lucide-react';

export const AirplaneCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isMoving, setIsMoving] = useState(false);
  const [fireTrails, setFireTrails] = useState([]);
  const [stars, setStars] = useState([]);
  const moveTimeoutRef = useRef(null);
  const lastTrailTimeRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      const now = Date.now();
      if (now - lastTrailTimeRef.current > 30) { 
        const newTrail = {
          id: now + Math.random(),
          x: e.clientX - 4, 
          y: e.clientY + 16, 
        };
        setFireTrails(prev => [...prev.slice(-15), newTrail]);
        lastTrailTimeRef.current = now;
      }

      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    const handleClick = (e) => {
      const newStar = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setStars(prev => [...prev, newStar]);

      setTimeout(() => {
        setStars(prev => prev.filter(star => star.id !== newStar.id));
      }, 600); 
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireTrails(prev => prev.slice(1));
    }, 100); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        className="airplane-cursor"
        style={{
          left: mousePosition.x, 
          top: mousePosition.y,
          transform: `translate(-50%, -50%) rotate(${isMoving ? -15 : 0}deg)`,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 40 }}
      >
        <Plane size={32} className="transform -rotate-45" />
      </motion.div>

      {isMoving && fireTrails.map((trail) => (
        <motion.div
          key={trail.id}
          className="fire-trail fire-particle"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            left: trail.x,
            top: trail.y,
            background: `radial-gradient(circle, hsl(var(--fire-start)) 0%, hsl(var(--fire-end)) 70%, transparent 100%)`,
          }}
        />
      ))}

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star-burst"
          initial={{ scale: 0, rotate: 0, opacity: 1 }}
          animate={{ scale: 1.5, rotate: 180, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            left: star.x,
            top: star.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Star size={24} />
        </motion.div>
      ))}
    </>
  );
};