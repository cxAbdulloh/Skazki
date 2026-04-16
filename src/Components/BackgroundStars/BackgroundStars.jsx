// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const BackgroundStars = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const count = window.innerWidth < 768 ? 40 : 100;
//     const stars = [];

//     for (let i = 0; i < count; i++) {
//       const star = document.createElement("div");
//       star.className = "star";
      
//       const size = Math.random() * 3 + 1;
//       star.style.width = `${size}px`;
//       star.style.height = `${size}px`;
//       star.style.left = `${Math.random() * 100}vw`;
//       star.style.top = `${Math.random() * 100}vh`;

//       star.style.transform = `rotate(${Math.random() * 360}deg)`;
      
//       container.appendChild(star);
//       stars.push(star);

     
//       gsap.to(star, {
//         opacity: Math.random() * 0.7 + 0.3,
//         duration: Math.random() * 2 + 1,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

      
//       const moveStar = (el) => {
//         gsap.to(el, {
//           x: (Math.random() - 0.5) * 150,
//           y: (Math.random() - 0.5) * 150,
//           duration: Math.random() * 10 + 5,
//           ease: "sine.inOut",
//           onComplete: () => moveStar(el),
//         });
//       };
//       moveStar(star);
//     }

//     return () => {
//       stars.forEach(s => s.remove());
//     };
//   }, []);

//   return <div ref={containerRef} style={{ 
//     position: 'fixed', 
//     top: 0, 
//     left: 0, 
//     width: '100vw', 
//     height: '100vh', 
//     zIndex: 0, 
//     pointerEvents: 'none' 
//   }} />;
// };

// export default BackgroundStars;