"use client";

export default function ContactClient() {
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

  <div className="w-full min-h-screen bg-black flex items-center px-6 pb-12">

    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-3">
        Contact
      </p>

      <h1 className="text-4xl font-bold uppercase leading-[1.05]">
        Start a Conversation
      </h1>
    </div>

  </div>

</section>

      {/* ================= DESKTOP HERO ================= */}
      <section className="hidden md:block relative w-full h-[60vh] md:h-[70vh] overflow-hidden">

  <div className="absolute inset-0 bg-black" />

  <div className="relative z-10 flex flex-col justify-center h-full px-16">

    <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-4">
      Contact
    </p>

    <h1 className="text-5xl md:text-8xl font-bold uppercase leading-[0.95] max-w-5xl">
      Start a Conversation
    </h1>

  </div>

</section>

      {/* ================= CONTACT BODY ================= */}
      <section className="px-6 md:px-16 py-20 md:py-28">

  <div className="max-w-3xl">

    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-16">
      We are developing a slate of original film and television projects and are open to conversations around production, financing, and strategic partnerships.
    </p>

    <div className="space-y-14">

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
          Production
        </p>
        <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
          Collaborating producers, directors, and creative partners.
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
          Financing
        </p>
        <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
          Investors and financing partners interested in narrative film and television.
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
          Development
        </p>
        <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
          Studios, companies, and collaborators interested in building long-term IP.
        </p>
      </div>

    </div>

  </div>

</section>

      {/* ================= DIRECT CONTACT ================= */}
      <section className="px-6 md:px-16 py-20">

        <div className="max-w-2xl">

          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-6">
            Direct
          </p>

          <a
            href="mailto:contact@badbellafilms.com"
            className="text-lg text-white hover:text-zinc-300 transition"
          >
            contact@badbellafilms.com
          </a>

        </div>

      </section>

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

</div>

</section>



      {/* ================= FOOTER ================= */}
      <footer className="relative px-6 sm:px-10 md:px-16 py-20 border-t border-zinc-900 text-center">

        <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-6">
          Follow the Work
        </p>

        <p className="text-sm text-zinc-500 mb-6 max-w-md mx-auto">
          For production, financing, and development opportunities, or to follow the slate as it evolves.
        </p>

        <a
          href="mailto:contact@badbellafilms.com"
          className="text-sm text-zinc-400 hover:text-white transition"
        >
          contact@badbellafilms.com
        </a>

        <p className="text-xs text-zinc-600 mt-12">
          © 2023–{new Date().getFullYear()} Bad Bella Films
        </p>

      </footer>

    </main>
  );
}