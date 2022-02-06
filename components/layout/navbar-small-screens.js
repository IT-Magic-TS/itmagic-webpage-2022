import Link from "next/link";

const NavbarSmallScreensComponent = () => {
  return (
    <div
      id="navDemo"
      className="w3-bar-block w3-theme-d2 w3-hide-large w3-large"
    >
      <Link href="/">
        <a className="w3-bar-item w3-button w3-padding-large">Perfect Stairs</a>
      </Link>
      <Link href="/">
        <a className="w3-bar-item w3-button w3-padding-large">Perfect Stairs</a>
      </Link>
      <Link href="/">
        <a className="w3-bar-item w3-button w3-padding-large">Perfect Stairs</a>
      </Link>
      <Link href="/">
        <a className="w3-bar-item w3-button w3-padding-large">Perfect Stairs</a>
      </Link>
    </div>
  );
};

export default NavbarSmallScreensComponent;
