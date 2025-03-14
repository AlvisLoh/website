import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function BookSession() {
  const location = useLocation(); // Get current URL path

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, [location.pathname]); // Reload script when path changes

  return (
    <>
      <Navbar />
      <div
        key={location.pathname} // Forces React to remount the component
        className="calendly-inline-widget"
        data-url="https://calendly.com/alvisloh_sg"
        style={{ minWidth: "320px", height: "80vh" }}
      ></div>
      <Footer />
    </>
  );
}
