"use client";

import { useState, useEffect } from "react";


// ==========================
// DATA — PROJECTS
// ==========================
const projects = [
  {
    title: "THE LAST STOP",
    slug: "the-last-stop",
    description:
      "On the day he plans to meet Death, a grieving widower’s life takes an unexpected turn when an autistic boy helps him rediscover joy—and a reason to live.",
    status: "Completed Short",
    lead: {
      image: "/images/home/the-last-stop-bus-stop.webp",
    }
  },
  {
    title: "FAMILY TRADITION",
    slug: "family-tradition",
    description:
      "A guilty man’s diner confession risks exposing a legacy of violence—and resurrecting the killer they thought was buried for good.",
    status: "In Development",
    lead: {
      image: "/images/home/ft-tony.jpg",
    }
  },
  {
    title: "WILDER",
    slug: "wilder",
    description:
      "A struggling single mom cons her way into the life of a reclusive NASCAR legend—an unlikely bond offering a final lap at redemption.",
    status: "Packaging",
    lead: {
      image: "/images/home/wilder.webp",
    }
  },
  {
    title: "WHAT’S BURIED BENEATH THE PINES",
    slug: "whats-buried-beneath-the-pines",
    description:
      "A runaway son returns to his family’s crumbling timber empire after his father’s death.",
    status: "Seeking Partners",
    lead: {
      image: "/images/home/wbbtp.webp",
    }
  },
  {
    title: "WHO STOLE THE HEAD OF BOBBI DUPREE?",
    slug: "bobbi-dupree",
    description:
      "A worn-out bounty hunter and a grifter hunt a severed head hiding a treasure map.",
    status: "In Development",
    lead: {
      image: "/images/home/dupree.webp",
    }
  }
];

const ctas = [
  { label: "Explore", href: "/projects" },
  { label: "Follow", href: "#footer" },
  { label: "Collaborate", href: "/contact" },
];


// ==========================
// EMAIL FORM
// ==========================
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

// ==========================
// HOMEPAGE
// ==========================
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const lead = projects[0];
const [ctaIndex, setCtaIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#0B0B0C] text-white">


      {/* ================= MOBILE HERO ================= */}
<section className="block md:hidden relative overflow-hidden">

  {/* GLOBAL HEADER */}
  <header className="absolute top-6 left-6 z-30">
    <p className="text-xs tracking-[0.15em] uppercase text-white/80">
      Bad Bella Films
    </p>
    <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/60 leading-tight font-semibold">
      Character-driven.
      <br />
      Built to last.
    </p>
  </header>

  {/* THE COMPANY LINK */}
  <div className="absolute top-6 right-6 z-30 text-right">
    <a href="/about" className="group">
      <p className="text-xs tracking-[0.15em] uppercase text-white/80 group-active:text-white transition">
        The Company
      </p>
    </a>
  </div>

  {/* HERO IMAGE CONTAINER */}
  <div className="relative w-full h-[70vh]">

    {/* IMAGE */}
    <img
      src={lead.lead.image}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/50" />

    {/* CENTER CTA */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 px-4 overflow-hidden">

      <div
        className="
          flex flex-nowrap justify-center items-center
          gap-4 sm:gap-6
          font-semibold uppercase
          tracking-[0.08em] sm:tracking-[0.1em]
          whitespace-nowrap
          pointer-events-auto
        "
        style={{ fontSize: "clamp(16px, 4.5vw, 42px)" }}
      >
        <a href="#slate" className="text-white/40 active:text-white active:scale-110 active:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-150">
          Explore
        </a>

        <a href="#footer" className="text-white/40 active:text-white active:scale-110 active:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-150">
          Follow
        </a>

        <a href="/contact" className="text-white/40 active:text-white active:scale-110 active:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition duration-150">
          Collaborate
        </a>
      </div>

    </div>

  </div>

  {/* CONTENT (THIS WAS THE ISSUE — NOW CORRECTLY OUTSIDE IMAGE) */}
  <div className="relative z-10 px-6 pt-6 pb-10">

    <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
      Featured Project
    </p>

    {/* TITLE */}
    <a href="/projects/the-last-stop" className="group inline-block active:opacity-80">
      <h1 className="text-3xl font-bold uppercase leading-tight mb-3 group-hover:opacity-80 transition">
        {lead.title}
      </h1>
    </a>

    <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
      Animated Short
    </p>

    <p className="text-sm text-zinc-300 leading-relaxed">
      {lead.description}
    </p>

    <p className="mt-10 text-xs text-zinc-600 max-w-xl tracking-wide">
      *Built as part of a growing slate of original films in development.
    </p>

  </div>

</section>


      {/* ================= DESKTOP HERO ================= */}
<section className="hidden md:block relative w-full h-[80vh] md:h-screen overflow-hidden">

  {/* ================= HEADER SYSTEM ================= */}
  <div className="absolute top-10 left-0 w-full px-16 z-30 flex items-start justify-between">

    {/* LEFT: BRAND */}
    <div className="flex flex-col">
      <p className="text-sm tracking-[0.15em] uppercase text-white/80">
        Bad Bella Films
      </p>

      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60 leading-tight font-semibold">
        Character-driven.
        <br className="block lg:hidden" />
        Built to last.
      </p>
    </div>

    {/* CENTER: GHOST MENU */}
    <div className="hidden lg:flex items-center gap-[3vw] text-[clamp(14px,1.2vw,28px)] uppercase tracking-[0.2em] text-white/15">

  <a href="#slate" className="hover:text-white/70 transition duration-300">
    Explore
  </a>

  <a href="#footer" className="hover:text-white/70 transition duration-300">
    Follow
  </a>

  <a href="/contact" className="hover:text-white/70 transition duration-300">
    Collaborate
  </a>

</div>

    {/* RIGHT: COMPANY */}
    <div className="text-right">
      <a
        href="/about"
        className="text-sm tracking-[0.15em] uppercase text-white/80 hover:text-white transition"
      >
        The Company
      </a>
    </div>

  </div>

  {/* ================= IMAGE ================= */}
  <img
    src="/images/home/the-last-stop-bus-stop.webp"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* ================= OVERLAY ================= */}
  <div className="absolute inset-0 bg-black/60" />

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 flex flex-col justify-end h-full px-16 pb-24">

    <p className="text-sm text-zinc-400 uppercase tracking-widest mb-4">
      Featured Project
    </p>

    {/* TITLE + STATUS */}
    <div className="mb-4">
      <div className="relative inline-block align-top">

        <a href="/projects/the-last-stop" className="group inline-block">
          <h1 className="text-7xl lg:text-8xl font-bold uppercase leading-[0.9] whitespace-nowrap md:whitespace-normal group-hover:opacity-80 transition">
            {lead.title}
          </h1>
        </a>

        <div className="absolute right-0 top-0 -translate-y-full text-right text-[10px] sm:text-xs uppercase tracking-[0.25em] whitespace-nowrap">
          <span className="block text-zinc-300">Coming May 2026</span>
        </div>

      </div>
    </div>

    {/* GENRE */}
    <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-6">
      Animated / Short / Proof-of-Concept
    </p>

    {/* LOGLINE */}
    <p className="text-lg text-zinc-300 max-w-3xl">
      {lead.description}
    </p>

    {/* SLATE LINE */}
    <p className="mt-10 text-sm text-zinc-500 max-w-xl tracking-wide">
      *Built as part of a growing slate of original films in development.
    </p>

  </div>

  {/* ================= SCROLL CUE ================= */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm uppercase tracking-[0.3em] text-white/80 animate-pulse z-20">
    Scroll
  </div>

</section>


      {/* ================= SLATE ================= */}
<section id="slate" className="px-6 sm:px-10 md:px-16 py-20 bg-[#0E0E10]">

  <p className="text-base md:text-lg uppercase tracking-[0.25em] text-zinc-300 mb-1">
    Slate
  </p>
<p className="text-sm text-zinc-400 mb-10">
  A slate of character-driven films in active development, with select projects seeking partners.
</p>

  <div className="grid md:grid-cols-2 gap-10 items-start">

    {/* LEFT */}
    <div>
      {projects.slice(1).map((project, index) => {
        const realIndex = index + 1;

        return (
          <a
            href={`/projects/${project.slug}`}
            key={realIndex}
            onMouseEnter={() => setActiveIndex(realIndex)}
            onClick={() => setActiveIndex(realIndex)}
            className="block py-6 border-b border-zinc-800 group transition-all duration-300"
          >

            {/* MOBILE IMAGE */}
            <div className="block md:hidden mb-4">
              <img
                src={project.lead.image}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded-md"
              />
            </div>

            {/* TITLE */}
            <h2
              className={`text-xl md:text-3xl uppercase transition ${
                activeIndex === realIndex
                  ? "text-white"
                  : "text-zinc-500 group-hover:text-zinc-300"
              }`}
            >
              {project.title}
            </h2>
<p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
  {project.status}
</p>

            {/* DESCRIPTION */}
            <p
              className={`mt-3 text-sm leading-relaxed transition ${
                activeIndex === realIndex
                  ? "text-zinc-300"
                  : "text-zinc-600 group-hover:text-zinc-400"
              }`}
            >
              {project.description}
            </p>

          </a>
        );
      })}
    </div>

    {/* RIGHT (DESKTOP IMAGE PREVIEW) */}
    <div className="hidden md:block relative w-full h-full overflow-hidden rounded-lg">
      {projects.map((project, index) => (
        <img
          key={index}
          src={project.lead.image}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            activeIndex === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        />
      ))}
    </div>

  </div>

</section>

<section className="px-6 md:px-16 py-24 border-t border-zinc-900">

  <div className="max-w-2xl mx-auto text-center">

    <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
      We are building a long-term slate of original IP across film and television.
    </p>

    <p className="text-sm text-zinc-500">
      Focused on development, production, and strategic partnerships.
    </p>

    <p className="mt-10 text-sm text-zinc-600">
      Work recognized by major festivals and industry programs, with projects currently in active development.
    </p>

  </div>

</section>


      {/* ================= FOOTER ================= */}
      <footer id="footer" className="px-6 md:px-16 py-20 border-t border-zinc-900">

        <div className="max-w-md mx-auto text-center">

          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-6">
            Follow the Work
          </p>

          <EmailForm />

          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mt-12 mb-2">
            Contact
          </p>

          <p className="text-sm text-zinc-500">
            contact@badbellafilms.com
          </p>
<p className="text-xs text-zinc-600 mt-12">
    © 2023–{new Date().getFullYear()} Bad Bella Films
  </p>

        </div>

      </footer>
{showTop && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 sm:bottom-8 sm:right-10 md:bottom-10 md:right-16 z-40
               text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white
               transition opacity-80 hover:opacity-100"
  >
    ↑ Top
  </button>
)}

    </main>
  );
}