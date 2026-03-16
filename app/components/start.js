export default function HeroSection({ onStart }) {
  return (
    <>
      <style>{`
        .start-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100%;
          background: #FAF9F9;
          color: #0f172a;
          position: relative;
          overflow: hidden;
          text-align: center;
          padding: 2rem;
        }

        .start-bg-particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(96, 165, 250, 0.1);
          filter: blur(40px);
          z-index: 1;
          animation: startFloat 20s infinite ease-in-out;
        }

        .start-particle1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 20%;
          animation-delay: 0s;
        }

        .start-particle2 {
          width: 400px;
          height: 400px;
          bottom: -10%;
          right: 15%;
          background: rgba(56, 189, 248, 0.08);
          animation-delay: -5s;
        }

        .start-particle3 {
          width: 200px;
          height: 200px;
          top: 40%;
          right: 40%;
          background: rgba(148, 163, 184, 0.05);
          animation-delay: -10s;
        }

        @keyframes startFloat {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -50px); }
          66% { transform: translate(-20px, 40px); }
        }

        .start-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 800px;
        }

        .start-icon-wrapper {
          width: 72px;
          height: 72px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          box-shadow: 0 8px 32px rgba(9, 77, 146, 0.2);
          animation: startPulseIcon 4s infinite ease-in-out;
          cursor: pointer;
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }

        .start-icon-wrapper:hover {
          transform: scale(1.1);
          background: #dbeafe;
          border-color: #93c5fd;
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

        .start-icon-svg {
          color: #094D92;
          width: 32px;
          height: 32px;
        }

        .start-title {
          font-size: 4.5rem;
          font-weight: 500;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .start-title-blue {
          color: #094D92;
          display: block;
        }

        .start-subtitle {
          color: #475569;
          font-size: 1.25rem;
          margin-bottom: 3rem;
          font-weight: 400;
        }

        .start-btn {
          background: #094D92;
          color: #ffffff;
          padding: 16px 48px;
          border-radius: 999px;
          font-size: 1.125rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(9, 77, 146, 0.4);
          position: relative;
          overflow: hidden;
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
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 12px 30px rgba(9, 77, 146, 0.6);
          background: #0c61b5;
        }

        .start-btn:active {
          transform: translateY(1px) scale(0.98);
        }

        @media (max-width: 768px) {
          .start-title {
            font-size: 3rem;
          }
        }
      `}</style>

      <div className="start-container">
        {/* Background Particles for interactive feel */}
        <div className="start-bg-particle start-particle1"></div>
        <div className="start-bg-particle start-particle2"></div>
        <div className="start-bg-particle start-particle3"></div>

        <div className="start-content">
          <div className="start-icon-wrapper">
            <svg className="start-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          
          <h1 className="start-title">
            Every Prompt
            <span className="start-title-blue">Drinks Water</span>
          </h1>
          
          <p className="start-subtitle">
            The invisible water behind artificial intelligence.
          </p>
          
          <button className="start-btn" onClick={onStart}>
            Start Simulation
          </button>
        </div>
      </div>
    </>
  );
}
