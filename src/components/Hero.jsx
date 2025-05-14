import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "3rem",
          borderRadius: "16px",
          maxWidth: "800px",
          width: "90%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            margin: "0 auto",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            lineHeight: 1.2,
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            marginBottom: "1.5rem",
            textAlign: "center", // Add this line
          }}
        >
          <span style={{ color: "#eedd7f" }}>Empowering Your</span>
          <br />
          <span style={{ color: "#ffffff" }}>Personal Growth Journey</span>
        </h1>

        <p
          style={{
            margin: "0 auto 2.5rem",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#f0f0f0",
            fontWeight: 400,
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          Guiding individuals to unlock their potential, achieve clarity, and
          create meaningful change. Start your transformation with personalized
          life coaching tailored to your goals and aspirations.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <NavLink to="/products">
            <button
              type="button"
              style={{
                padding: "1rem 2.5rem",
                fontSize: "1.1rem",
                border: "2px solid #eedd7f",
                borderRadius: "50px",
                background: "rgba(238,221,127,0.2)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                backdropFilter: "blur(5px)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(238,221,127,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(238,221,127,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              How It Works
            </button>
          </NavLink>

          <NavLink to="/contact">
            <button
              type="button"
              style={{
                padding: "1rem 2.5rem",
                fontSize: "1.1rem",
                border: "2px solid #ffffff",
                borderRadius: "50px",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                backdropFilter: "blur(5px)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book a Session
            </button>
          </NavLink>
        </div>

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(238,221,127,0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#eedd7f"
                strokeWidth="2"
                aria-label="Phone icon"
              >
                <title>Phone icon</title>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>Call</div>
              <div style={{ fontWeight: 600 }}>+65 8778 4263</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(238,221,127,0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#eedd7f"
                strokeWidth="2"
                aria-label="Email icon"
              >
                <title>Email icon</title>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>Email</div>
              <div style={{ fontWeight: 600 }}>alvis.loh.yx.6604@gmail.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(238,221,127,0.15) 0%, rgba(238,221,127,0) 70%)",
          animation: "pulse 8s infinite ease-in-out",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)",
          animation: "pulse 10s infinite ease-in-out 2s",
        }}
      />

      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
          }
        `}
      </style>
    </section>
  );
}
