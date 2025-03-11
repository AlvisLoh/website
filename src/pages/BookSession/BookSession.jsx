import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function BookSession() {
  return (
    <>
      <Navbar />
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/alvisloh_sg"
        style={{ minWidth: "320px", height: "80vh" }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
      <Footer />
    </>
  );
}
