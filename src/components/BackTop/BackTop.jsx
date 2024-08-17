import React, { useEffect, useState } from 'react'

const BackTop = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scroll, setScroll] = useState(false);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };
    
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  },[]);
  return (
    <>
        <div className={`${scroll ? "block " : "hidden"}`}>
          <button onClick={scrollToTop} className="text-base font-poppins font-normal text-[#1C1E53] right-4 bottom-[138px] fixed z-[7] font-bold [writing-mode:vertical-lr]">To Top</button>

          <div className="progress-container z-[15] w-[3px] h-16 right-[26px] bottom-16 fixed bg-[#f3f3f3]">
            <div className="progress-bar bg-[#1C1E53]  w-full h-0" style={{ height: `${scrollTop}%` }}></div>
          </div>
        </div>
    </>
  )
}

export default BackTop

