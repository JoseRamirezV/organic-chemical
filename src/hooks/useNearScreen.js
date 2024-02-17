import { useEffect, useRef, useState } from "react";

export const useNearScreen = () => {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();
  useEffect(() => {
    let observer;
    const onChange = (entries, observer) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    };

    observer = new IntersectionObserver(onChange, {
      rootMargin: "-10px",
    });

    observer.observe(fromRef.current)

    return () => observer && observer.disconnect();
  });

  return {
    isNearScreen,
    fromRef,
  };
};
