"use client";

import { useRef, useState, useEffect } from "react";

///////EMAIL FORM///////
function EmailForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const form = e.target as HTMLFormElement;
const email = (form.elements.namedItem("email") as HTMLInputElement).value;

          setLoading(true);

          try {
            const res = await fetch("/api/subscribe", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok && data.subscription) {
              form.reset();
              setSubmitted(true);
            } else {
              console.error("ConvertKit error:", data);
            }
          } catch (err) {
            console.error("Network error:", err);
          }

          setLoading(false);
        }}
        className="flex flex-col sm:flex-row gap-4 w-full"
      >
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="bg-transparent border-b border-zinc-500 focus:border-white outline-none py-3 w-full"
        />

        <button
          type="submit"
          disabled={loading}
          className="text-sm uppercase tracking-[0.2em]"
        >
          {loading ? "..." : "Join"}
        </button>
      </form>

      {/* 🔥 MODAL */}
      {submitted && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSubmitted(false)}
        >
          <div
            className="bg-black border border-zinc-700 px-10 py-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg uppercase tracking-[0.2em] mb-4">
              You're in.
            </p>
            <p className="text-sm text-zinc-400 mb-6">
              Welcome to Bad Bella.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="text-xs uppercase tracking-[0.2em] border border-zinc-500 px-4 py-2 hover:bg-white hover:text-black transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  // 👇 ADD THIS HERE
  const [showStandby, setShowStandby] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25;

      audioRef.current.play().catch(() => {
        // autoplay may be blocked — that's fine
      });
    }
  }, []);

  // 👇 ADD THIS SECOND useEffect RIGHT AFTER
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStandby(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25;

      // attempt autoplay (will start muted)
      audioRef.current.play().catch(() => {
        // autoplay may be blocked — that's fine
      });
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.play();
    } else {
      audioRef.current.muted = true;
    }

    setIsMuted(!isMuted);
  };

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col overflow-hidden">


      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-6 py-4">
        <div className="tracking-widest text-sm">
          BAD BELLA FILMS
          <div className="text-xs opacity-70">
            CHARACTER-DRIVEN. BUILT TO LAST.
          </div>
        </div>

        <button
  onClick={toggleAudio}
  className={`
    uppercase tracking-[0.25em]
    transition-all duration-300

    text-xs sm:text-sm md:text-base
    px-4 py-2 sm:px-5 sm:py-2.5

    w-[150px] sm:w-[170px] md:w-[190px]   ← 👈 THIS FIXES IT

    text-center
    relative

    ${isMuted 
      ? "text-white/90 border border-white/40 bg-black/30 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.4)]" 
      : "text-white/70 border border-white/20 hover:text-white hover:border-white/40"
    }
  `}
>
  {/* subtle flicker bar */}
  {isMuted && (
    <span className="absolute left-0 top-0 h-full w-[2px] bg-white animate-pulse opacity-70" />
  )}

  {/* label */}
  <span className="relative z-10">
    {isMuted ? "AUDIO OFF" : "AUDIO ON"}
  </span>
</button>
      </header>

      {/* HERO */}
      <section className="relative flex-1 flex items-end justify-start px-6 pb-16">

        {/* VIDEO BACKGROUND */}
        <video
          className="absolute inset-0 w-full h-full object-cover animate-[pulse_6s_ease-in-out_infinite]"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* AUDIO (hidden) */}
        <audio ref={audioRef} src="/audio/elevator.mp3" loop muted />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none">
  <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_3px)]" />
</div>

        {/* CONTENT (BOTTOM LEFT, CINEMATIC) */}
        <div className="relative z-10 max-w-3xl">

          <div className="text-lg tracking-[0.3em] mb-4 opacity-70">
            INTERMISSION
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold mb-4">
            WE’LL BE BACK
          </h1>

          <div className="text-sm tracking-widest mb-4 opacity-70">
            TEMPORARY HOLD / ACTIVE DEVELOPMENT
          </div>

          <p className="text-lg md:text-xl opacity-80 max-w-2xl">
            Our slate is in motion.
            <br />
            The next phase of Bad Bella Films is coming.
          </p>
<div className="mt-10 max-w-md">
  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">
    Follow the Work
  </p>

  <EmailForm />
</div>

          <div className="text-xs opacity-50 mt-6">
            *This is an intermission while new work is being prepared.
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 text-center text-xs opacity-60 pb-6">
        © 2023 - {new Date().getFullYear()} Bad Bella Films
      </footer>

    </main>
  );
}