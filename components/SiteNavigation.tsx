import CustomLink from 'components/CustomLink';

const SiteNavigation = () => {
  return (
    <nav>
      <ul className="flex flex-row items-center">
        <li className="mx-3">
          <CustomLink href="/">
            <span className="text-sm font-medium md:text-base">About Me</span>
          </CustomLink>
        </li>
        <li className="mx-3">
          <CustomLink href="/">
            <span className="text-sm font-medium md:text-base">Contact</span>
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default SiteNavigation;
