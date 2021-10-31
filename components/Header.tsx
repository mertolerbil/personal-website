import Logo from 'components/Logo';

const Header = () => (
  <header className="sticky top-0 left-0 w-full px-6 py-4 flex items-center justify-between bg-transparent backdrop-blur">
    <Logo />
    <div className="flex-1"></div>
    <div className=""></div>
  </header>
);

export default Header;
