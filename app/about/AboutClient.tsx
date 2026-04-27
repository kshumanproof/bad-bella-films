export default function About() {
  return (
    <main className="bg-[#0B0B0C] text-white">

<header className="absolute top-6 left-6 sm:top-8 sm:left-10 md:top-10 md:left-16 z-30">
  <a href="/" className="text-xs sm:text-sm tracking-[0.15em] uppercase text-white/80 hover:text-white transition">
    Bad Bella Films
  </a>
</header>

      {/* ================= MOBILE HERO ================= */}
<section className="block md:hidden">

  <img
    src="/images/home/the-last-stop-bus-stop.webp"
    className="w-full h-[55vh] object-cover"
  />

  <div className="px-6 pt-6 pb-10">

    <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
      The Company
    </p>

    <h1 className="text-3xl font-bold uppercase leading-tight mb-4">
      Bad Bella Films is a Southern-rooted film and television company
      focused on bold, character-driven storytelling.
    </h1>

  </div>

</section>

{/* ================= DESKTOP HERO ================= */}
<section className="hidden md:block relative w-full h-[80vh] md:h-screen overflow-hidden">

  {/* IMAGE */}
  <img
    src="/images/home/the-last-stop-bus-stop.webp"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/60" />

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col justify-end h-full px-16 pb-24">

    <div className="max-w-4xl">

      <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-4">
        The Company
      </p>

      <h1 className="text-7xl lg:text-8xl font-bold uppercase leading-[0.9]">
        Bad Bella Films is a Southern-rooted film and television company
        focused on bold, character-driven storytelling.
      </h1>

    </div>

  </div>

</section>

      {/* ================= BELIEF ================= */}
<section className="px-6 md:px-16 py-20">

  <div className="max-w-2xl">

    <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-6">
      What We Believe
    </p>

    <div className="space-y-6 text-2xl md:text-3xl text-white">
      <p>Characters before plot.</p>
      <p>Emotion before spectacle.</p>
      <p>Honesty before trend.</p>
    </div>

  </div>

</section>


{/* ================= WHAT WE’RE BUILDING ================= */}
<section className="px-6 md:px-16 py-20">

  <div className="max-w-2xl">

    <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-6">
      What We’re Building
    </p>

    <p className="text-lg text-zinc-200 leading-relaxed">
      We are building a long-term slate of original IP across film and television, with a focus on development, production, and strategic partnerships.
    </p>

  </div>

</section>


{/* ================= WHY IT MATTERS ================= */}
<section className="px-6 md:px-16 py-20">

  <div className="max-w-2xl">

    <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-6">
      Why It Matters
    </p>

    <p className="text-lg md:text-xl text-zinc-200 leading-relaxed">
      Our stories explore identity, loyalty, trauma, redemption, and what it means to rebuild from ruin.
    </p>

  </div>

</section>


{/* ================= FOUNDERS ================= */}
<section className="px-6 md:px-16 py-20">

  <div className="max-w-2xl">

    <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-6">
      Founders
    </p>

    <div className="space-y-8">

      <div>
        <p className="text-xl text-white">
          [Founder One Name]
        </p>
        <p className="text-sm text-zinc-400 mb-3">
          Co-Founder, Bad Bella Films
        </p>
        <p className="text-base text-zinc-200 leading-relaxed">
          Focused on building emotionally grounded, character-driven stories for film and television.
        </p>
      </div>

      <div>
        <p className="text-xl text-white">
          [Founder Two Name]
        </p>
        <p className="text-sm text-zinc-400 mb-3">
          Co-Founder, Bad Bella Films
        </p>
        <p className="text-base text-zinc-200 leading-relaxed">
          Focused on building a long-term slate of original IP across film and television.
        </p>
      </div>

    </div>

  </div>

</section>

   
{/* ================= MORE PROJECTS ================= */}
<section className="px-6 sm:px-10 md:px-16 pb-28">

  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
    Explore More
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

  {/* WHAT'S BURIED */}
  <a href="/projects/whats-buried-beneath-the-pines" className="block group active:scale-[0.98] transition">

    <img
      src="/images/wbbtp/wbbtp.webp"
      className="w-full aspect-[16/9] object-cover rounded-lg mb-3 group-hover:opacity-80 transition"
    />

    <p className="text-sm text-zinc-400 group-hover:text-white">
      What's Buried Beneath the Pines
    </p>

  </a>

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

  {/* DUPREE */}
  <a href="/projects/bobbi-dupree" className="block group active:scale-[0.98] transition">

    <img
      src="/images/bobbi-dupree/dupree.webp"
      className="w-full aspect-[16/9] object-cover rounded-lg mb-3 group-hover:opacity-80 transition"
    />

    <p className="text-sm text-zinc-400 group-hover:text-white">
      Who Stole the Head of Bobbi DuPree?
    </p>

  </a>

</div>

</section>


{/* ================= FOOTER ================= */}
<footer className="relative px-6 sm:px-10 md:px-16 py-20 border-t border-zinc-900 text-center">

  <p className="text-sm text-zinc-500 mb-6">
    For production, financing, and development opportunities, or to follow the slate as it evolves.
  </p>
<p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-6">
    Follow the Work
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