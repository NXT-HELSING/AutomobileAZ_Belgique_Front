import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => { window.scrollTo(0, 0) }}
        style={{ display: 'block' }}
        className="scroltop icon-up"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}

export default ScrollTop;