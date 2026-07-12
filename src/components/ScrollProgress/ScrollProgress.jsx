import { useEffect, useState } from "react";
import "./ScrollProgress.css";

const ScrollProgress = () => {

  const [width, setWidth] = useState(0);

  useEffect(() => {

    const update = () => {

      const scroll =
        document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setWidth((scroll / height) * 100);
    };

    window.addEventListener("scroll", update);

    return () =>
      window.removeEventListener(
        "scroll",
        update
      );

  }, []);

  return (
    <div
      className="progress-bar"
      style={{ width: `${width}%` }}
    />
  );
};

export default ScrollProgress;