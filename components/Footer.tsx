export function Footer() {
  return (
    <footer className="border-t border-ivory/10 py-10">
      <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-4 px-5 text-[12.5px] text-stone sm:px-8">
        <span>© {new Date().getFullYear()} Garima Sharma. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="/#work" className="hover:text-champagne">Work</a>
          <a href="/about" className="hover:text-champagne">About</a>
          <a href="/#press" className="hover:text-champagne">Press</a>
          <a href="/contact" className="hover:text-champagne">Contact</a>
        </div>
      </div>
    </footer>
  );
}
