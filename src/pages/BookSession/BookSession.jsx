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
  }, []); // Load script only once when component mounts

  return (
    <>
      <Navbar />
      <style>{`
        @media (max-width: 700px) {
          .calendly-inline-widget {
            min-width: 0 !important;
            width: 100vw !important;
            max-width: 100vw !important;
            height: 70vh !important;
            padding: 0 !important;
            margin: 0 auto !important;
            border-radius: 10px !important;
            box-shadow: 0 2px 12px rgba(0,0,0,0.10);
          }
        }
      `}</style>
      <div
        key={location.pathname} // Forces React to remount the component
        className="calendly-inline-widget responsive-margin responsive-padding"
        data-url="https://calendly.com/alvisloh_sg"
        style={{ minWidth: "320px", height: "80vh" }}
      />
      <Footer />
    </>
  );
}
