function Header() {
  return (
    <div className="mb-5 flex h-12 w-screen items-center justify-center bg-zinc-500 pb-3 pt-3 font-thin text-stone-600 drop-shadow-md">
      <div className="btn rounded-md bg-slate-100 pl-4 pr-4 text-lg shadow-md shadow-zinc-400">
        {'<TextBird />'}
      </div>
    </div>
  );
}

export default Header;
