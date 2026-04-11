// Loading.js
import React from 'react';
import './Loading.css'; // Bu yerga boyagi CSS'larni yozasiz

const Loading = () => {
  return (
    <div className="fairytale-loader">
      <div className="magic-book">
        <div className="page"></div>
        <p>Ertak boshlanmoqda...</p>
      </div>
    </div>
  );
};

export default Loading;