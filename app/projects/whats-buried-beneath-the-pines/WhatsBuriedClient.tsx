"use client";
import { useState, useEffect, useRef } from "react";

export default function TheLastStop() {

  const SHOW_VIDEO = false;
  const SHOW_STATUS = false;
const SHOW_MEDIA = true;
const SHOW_CREDITS = false;
const SHOW_STILL_1 = false;
const SHOW_STILL_2 = false;
const SHOW_STILL_3 = false;
const SHOW_STILL_4 = false;

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="bg-[#0B0B0C] text-white">

{/* ================= GLOBAL HEADER ================= */}
<header className="absolute top-6 left-6 sm:top-8 sm:left-10 md:top-10 md:left-16 z-30">
  <a href="/" className="text-xs sm:text-sm tracking-[0.15em] uppercase text-white/80 hover:text-white transition">
    Bad Bella Films
  </a>
</header>


{/* ================= MOBILE HERO ================= */}
<section className="block md:hidden">

  <img
    src="/images/wbbtp/wbbtp.webp"
    className="w-full h-[55vh] object-cover"
    style={{ objectPosition: "25% 40%" }}
  />

  <div className="px-6 pt-6 pb-10">

    <div className="relative inline-block mb-4">

      {SHOW_STATUS && (
        <div className="absolute right-0 -top-3 text-[10px] uppercase tracking-[0.25em] text-zinc-400">
          Coming Summer 2026
        </div>
      )}

      <h1 className="text-3xl font-bold uppercase leading-tight">
        What's Buried Beneath the Pines
      </h1>

    </div>

    <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
      Southern Gothic / Crime / Drama
    </p>

    <p className="text-sm text-zinc-300 leading-relaxed mb-6">
      He came home to bury his father— and inherited everything that should’ve stayed buried.
    </p>

    <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-400 mb-2 border-l border-zinc-600 pl-3">
      Overview
    </p>

    <p className="text-sm text-zinc-400 leading-relaxed">
      After his father's passing, Gray Harris returns home to settle unfinished business, only to learn he's inherited his father’s timber empire. As buried tensions and long-held secrets begin to surface, he finds himself yanked into a world of power and violence that threatens to consume him.
    </p>

  </div>

</section>


{/* ================= DESKTOP HERO ================= */}
<section className="hidden md:block relative w-full h-[80vh] md:h-screen overflow-hidden">

  <img
    src="/images/wbbtp/wbbtp.webp"
    className="absolute inset-0 h-full w-full object-cover sm:scale-[1.05] md:scale-100"
    style={{
      objectPosition: "30% 40%",
      width: "120%"
    }}
  />

  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 flex flex-col justify-end h-full px-16 pb-24">

    <div className="max-w-none">

      <div className="relative inline-block mb-4">

        {SHOW_STATUS && (
          <div className={`absolute right-0 -top-4 text-right text-xs uppercase tracking-[0.25em] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}>
            Coming May 2026
          </div>
        )}

        <h1 className={`text-7xl lg:text-8xl font-bold uppercase leading-[0.9] whitespace-nowrap md:whitespace-normal transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          What's Buried Beneath the Pines
        </h1>

      </div>

      <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-6">
        Southern Gothic / Crime / Drama
      </p>

      <p className="text-lg text-zinc-300 max-w-3xl">
        He came home to bury his father— and inherited everything that should’ve stayed buried.
      </p>
<p className="text-sm uppercase tracking-[0.35em] text-zinc-400 mt-8 mb-3 border-l border-zinc-600 pl-3">
  Overview
</p>

<p className="text-lg text-zinc-300 max-w-3xl leading-relaxed">
  After his father's passing, Gray Harris returns home to settle unfinished business, only to learn he's inherited his father’s timber empire. As buried tensions and long-held secrets begin to surface, he finds himself yanked into a world of power and violence that threatens to consume him.
</p>

    </div>

  </div>

</section>


{/* ================= MEDIA ================= */}
{SHOW_MEDIA && (
  <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28">

    <div className="max-w-5xl mx-auto flex flex-col gap-6">

      {/* ================= HERO MEDIA ================= */}
      {SHOW_VIDEO ? (

        <>
          {/* MOBILE VIDEO */}
          <div className="block md:hidden">
            <video
              className="w-full aspect-video object-cover rounded-lg"
              controls
              playsInline
              preload="metadata"
              poster="/images/TLS_Bus_Stop.webp"
            >
              <source src="/videos/family-tradition.mp4" type="video/mp4" />
            </video>
          </div>

          {/* DESKTOP VIDEO */}
          <div className="hidden md:block relative w-full aspect-video">

            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover rounded-lg ${
                isPlaying ? "z-20" : "z-0"
              }`}
              playsInline
              muted={!isPlaying}
              controls={isPlaying}
              preload="metadata"
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/videos/family-tradition.mp4" type="video/mp4" />
            </video>

            {!isPlaying && (
              <div
                onClick={() => {
                  const video = videoRef.current;
                  if (video) {
                    video.muted = true;
                    video.play();
                  }
                  setIsPlaying(true);
                }}
                className="absolute inset-0 z-30 cursor-pointer"
              >
                <img
                  src="/images/wbbtp/wbbtp.webp"
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/60 flex items-center justify-center">
                    <div className="ml-1 w-0 h-0 border-l-[12px] sm:border-l-[16px] border-l-white border-y-[8px] sm:border-y-[10px] border-y-transparent" />
                  </div>
                </div>
              </div>
            )}

          </div>
        </>

      ) : (
        <img
          src="/images/wbbtp/wbbtp.webp"
          className="w-full aspect-video object-cover rounded-lg"
        />
      )}

      {/* ================= STILLS ================= */}
      <div className="grid sm:grid-cols-2 gap-6">

        {SHOW_STILL_1 && (
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img src="/images/TLS_Bus_Stop.webp" className="w-full h-full object-cover" />
          </div>
        )}

        {SHOW_STILL_2 && (
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img src="/images/TLS_Bus_Stop.webp" className="w-full h-full object-cover" />
          </div>
        )}

        {SHOW_STILL_3 && (
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img src="/images/TLS_Bus_Stop.webp" className="w-full h-full object-cover" />
          </div>
        )}

        {SHOW_STILL_4 && (
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img src="/images/TLS_Bus_Stop.webp" className="w-full h-full object-cover" />
          </div>
        )}

      </div>

    </div>
  </section>
)}

{/* ================= CREDITS ================= */}
{SHOW_CREDITS && (
  <section className="px-6 sm:px-10 md:px-16 pb-20">

    <div className="max-w-5xl">

      <h2 className="text-xl sm:text-2xl font-semibold mb-6 uppercase tracking-wide">
        Credits
      </h2>

      <div className="space-y-3 text-sm sm:text-base text-zinc-400">
        <p><span className="text-white">Director:</span> Bailey Donovan</p>
        <p><span className="text-white">Writer:</span> Kris Shuman</p>

        <p className="leading-relaxed">
          <span className="text-white">Cast:</span>{" "}
          Russell Shealy, Javan Nelson, Bella Glanville, Karen Flanagan, Jim Grimshaw, Matt Lutz, Britany Smith, Justin Stagner, Jeremy P. Hyatt
        </p>
      </div>

    </div>

  </section>
)}


{/* ================= MORE PROJECTS ================= */}
<section className="px-6 sm:px-10 md:px-16 pb-28">

  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
    Explore More
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

  {/* THE LAST STOP */}
  <a href="/projects/the-last-stop" className="block group active:scale-[0.98] transition">

    <img
      src="/images/the-last-stop/the-last-stop-bus-stop.webp"
      className="w-full aspect-[16/9] object-cover rounded-lg mb-3 group-hover:opacity-80 transition"
    />

    <p className="text-sm text-zinc-400 group-hover:text-white">
      The Last Stop
    </p>

  </a>

  

  {/* FAMILY TRADITION */}
  <a href="/projects/family-tradition" className="block group active:scale-[0.98] transition">

    <img
      src="/images/family-tradition/ft-tony.jpg"
      className="w-full aspect-[16/9] object-cover rounded-lg mb-3 group-hover:opacity-80 transition"
    />

    <p className="text-sm text-zinc-400 group-hover:text-white">
      Family Tradition
    </p>

  </a>
{/* WILDER */}
  <a href="/projects/wilder" className="block group active:scale-[0.98] transition">

    <img
      src="/images/wilder/wilder.webp"
      className="w-full aspect-[16/9] object-cover rounded-lg mb-3 group-hover:opacity-80 transition"
    />

    <p className="text-sm text-zinc-400 group-hover:text-white">
      Wilder
    </p>

  </a>

</div>

</section>


{/* ================= FOOTER ================= */}
<footer className="relative px-6 sm:px-10 md:px-16 py-20 border-t border-zinc-900 text-center">
  <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-6">
    Follow the Work
  </p>
  <a href="mailto:contact@badbellafilms.com" className="text-sm text-zinc-400 hover:text-white transition">
    contact@badbellafilms.com
  </a>
<p className="text-xs text-zinc-600 mt-12">
    © 2023–{new Date().getFullYear()} Bad Bella Films
  </p>
</footer>

    </main>
  );
}