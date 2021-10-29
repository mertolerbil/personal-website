import Link from 'next/link';

const Header = () => (
  <header className="px-5 w-full h-12 bg-gray-800 text-white">
    <nav className="flex items-center h-full">
      <ul className="flex items-center space-x-5">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
