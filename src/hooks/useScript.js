import { useEffect } from 'react';

const useScript = (script_text) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.async = true;
    script.innerHTML = script_text;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [script_text]);
};

export default useScript;