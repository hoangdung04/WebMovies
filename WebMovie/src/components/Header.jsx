function Header() {
  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">
          MovieHub
        </h1>
        <nav className="flex items-center space-x-4 ml-8">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Movies
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            TV Shows
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-3 bg-white text-black rounded-sm outline-none"
        />
        <button className="px-4 py-2 bg-red-700 text-white rounded font-bold hover:bg-red-800 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
}
export default Header;
