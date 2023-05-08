import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';
import './loading.css';

const Loading = () => {
  useEffect(() => {
    setTimeout(() => {
      const loading = document.querySelector('.loading');
      loading.classList.add('show');
    }, 100);
  }, []);

  aos.init({
    duration: 5000,
    delay: 100,
    once: true
  });

  return (
    <div className='loading' data-aos='ease-out'>
      <h1 className="loadText">Loading...</h1>
    </div>
  );
};

export default Loading;
