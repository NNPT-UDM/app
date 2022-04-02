import { useEffect } from "react";

const useScript = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = '/src/assets/js/main.js?t=1648923509437';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });
};

export default useScript;
