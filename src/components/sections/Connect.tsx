import React from "react";

const Connect: React.FC = () => {
  return (
    <div className="w-full bg-tertiary rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-6 my-10 shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group">
      <div
        className="absolute inset-0 z-0 opacity-20 blur-lg group-hover:opacity-40 group-hover:blur-xl transition-all duration-500"
        style={{
          background: 'linear-gradient(90deg, var(--accent) 0%, #bf61ff 100%)',
        }}
      />
      <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4 w-full justify-center">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg" // Replace with your photo URL
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-[22px] font-bold text-white mb-1">Connect with Me</h2>
          <p className="text-secondary text-center sm:text-left mb-2">Let's collaborate or just say hi! Reach out via:</p>
          <div className="flex gap-4 mt-2 z-10">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-1 text-blue-400 bg-white/10 px-3 py-2 rounded-full shadow hover:bg-blue-400 hover:text-white hover:scale-110 transition-all duration-200 font-semibold backdrop-blur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" fill="currentColor" className="inline-block"><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L10 10l6-5.99V4H4zm14 2.236l-6.803 5.67a1 1 0 01-1.394 0L2 6.236V16a1 1 0 001 1h14a1 1 0 001-1V6.236z"/></svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              className="flex items-center gap-1 text-blue-400 bg-white/10 px-3 py-2 rounded-full shadow hover:bg-blue-400 hover:text-white hover:scale-110 transition-all duration-200 font-semibold backdrop-blur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" fill="currentColor" className="inline-block"><path d="M16 8a6 6 0 01-6 6H6v4H2V2h4v4h4a6 6 0 016 6zm-6 4a4 4 0 100-8 4 4 0 000 8z"/></svg>
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/chota.banana/"
              className="flex items-center gap-1 bg-white/10 px-3 py-2 rounded-full shadow hover:text-white hover:scale-110 transition-all duration-200 font-semibold backdrop-blur"
              style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" fill="currentColor" className="inline-block"><path d="M7 2C4.243 2 2 4.243 2 7v6c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h6c1.654 0 3 1.346 3 3v6c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a1 1 0 110 2 1 1 0 010-2zm-4 2a3 3 0 100 6 3 3 0 000-6zm0 2a1 1 0 110 2 1 1 0 010-2z"/></svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
