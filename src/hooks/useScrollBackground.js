import { useEffect, useState } from "react";

export const useScrollBackground = () => {
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });
  const [changeStyle, setChangeStyle] = useState(false);

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

    if (scrollData.y >= 10) {
      setChangeStyle(true);
    } else {
      setChangeStyle(false);
    }
  }, [scrollData]);

  return {
    changeStyle,
  };
};
