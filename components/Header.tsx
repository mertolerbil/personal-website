import Logo from 'components/Logo';
import SiteNavigation from 'components/SiteNavigation';

const Header = () => (
  <header className="sticky top-0 left-0 w-full px-6 py-4 flex items-center justify-between bg-transparent backdrop-blur">
    <Logo />
    <SiteNavigation />
  </header>
);

export default Header;
