export default function HeroSection({ onStart }) {
  return (
    <>
      {/* Minimal style tag only for things that cannot be inlined: keyframes, pseudo-elements, hover/active states, and media queries */}
      <style>{`
        @keyframes startFloat {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -50px); }
          66% { transform: translate(-20px, 40px); }
        }

        @keyframes startPulseIcon {
          0%, 100% {
            transform: translateY(0);
            box-shadow: 0 8px 32px rgba(9, 77, 146, 0.2);
          }
          50% {
            transform: translateY(-8px);
            box-shadow: 0 16px 40px rgba(9, 77, 146, 0.3);
          }
        }

        .start-icon-wrapper:hover {
          transform: scale(1.1) !important;
          background: #dbeafe !important;
          border-color: #93c5fd !important;
        }

        .start-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: skewX(-20deg);
          transition: all 0.6s ease;
        }

        .start-btn:hover::after {
          left: 150%;
        }

        .start-btn:hover {
          transform: translateY(-3px) scale(1.03) !important;
          box-shadow: 0 12px 30px rgba(9, 77, 146, 0.6) !important;
          background: #0c61b5 !important;
        }

        .start-btn:active {
          transform: translateY(1px) scale(0.98) !important;
        }

        @media (max-width: 768px) {
          .start-title {
            font-size: 3rem !important;
          }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
          background: "#FAF9F9",
          color: "#0f172a",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        {/* Background Particles for interactive feel */}
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: "rgba(96, 165, 250, 0.1)",
            filter: "blur(40px)",
            zIndex: 1,
            animation: "startFloat 20s infinite ease-in-out",
            width: "300px",
            height: "300px",
            top: "10%",
            left: "20%",
            animationDelay: "0s",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: "rgba(56, 189, 248, 0.08)",
            filter: "blur(40px)",
            zIndex: 1,
            animation: "startFloat 20s infinite ease-in-out",
            width: "400px",
            height: "400px",
            bottom: "-10%",
            right: "15%",
            animationDelay: "-5s",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: "rgba(148, 163, 184, 0.05)",
            filter: "blur(40px)",
            zIndex: 1,
            animation: "startFloat 20s infinite ease-in-out",
            width: "200px",
            height: "200px",
            top: "40%",
            right: "40%",
            animationDelay: "-10s",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "800px",
          }}
        >
          <div
            className="start-icon-wrapper"
            style={{
              width: "72px",
              height: "72px",
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.5rem",
              boxShadow: "0 8px 32px rgba(9, 77, 146, 0.2)",
              animation: "startPulseIcon 4s infinite ease-in-out",
              cursor: "pointer",
              transition:
                "transform 0.3s ease, background 0.3s ease, border-color 0.3s ease",
            }}
          >
            <svg
              style={{
                color: "#094D92",
                width: "32px",
                height: "32px",
              }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>

          <h1
            className="start-title"
            style={{
              fontSize: "4.5rem",
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Every Prompt
            <span
              style={{
                color: "#B98B6D",
                display: "block",
              }}
            >
              Drinks Water
            </span>
          </h1>

          <p
            style={{
              color: "#475569",
              fontSize: "1.25rem",
              marginBottom: "3rem",
              fontWeight: 400,
            }}
          >
            The invisible water behind artificial intelligence.
          </p>

          <button
            className="start-btn"
            style={{
              background: "#5BC0EB",
              color: "#ffffff",
              padding: "16px 48px",
              borderRadius: "999px",
              fontSize: "1.125rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 8px 25px rgba(9, 77, 146, 0.4)",
              position: "relative",
              overflow: "hidden",
            }}
            onClick={onStart}
          >
            Start Simulation
          </button>
        </div>
      </div>
    </>
  );
}
