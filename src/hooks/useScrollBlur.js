import { useEffect, useState } from "react";

export const useScrollBlur = () => {
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });
  const [blurNav, setBlurNav] = useState(false);
  console.log(scrollData);
  useEffect(() => {
    const handleScroll = () => {
      setScrollData((lastState) => {
        return {
          y: window.scrollY,
          lastY: lastState.y,
        };
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollData.lastY === scrollData.y) {
      return;
    }

    if (scrollData.y >= 100) {
      setBlurNav(true);
    } else {
      setBlurNav(false);
    }
  }, [scrollData]);

  return {
    blurNav
  }
};
