import { useEffect, useState } from 'react';
import style from '../styles/BackToTop.module.css';
import { useEventCallback } from '@mui/material';
export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = useEventCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className={style.backToTop}>
          <p>^</p>
        </button>
      )}
    </>
  );
}
