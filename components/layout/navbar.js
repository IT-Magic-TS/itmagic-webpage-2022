import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const NavbarComponent = ({ onSetMobileScreenNavigation }) => {
  const [divHeight, setDivHeight] = useState(null);
  const barHeight = useRef(null);

  const router = useRouter();

  useEffect(() => {
    setDivHeight(barHeight.current.clientHeight);
  }, []);

  return (
    // navbar
    <>
      <div className="w3-top">
        <div
          className="w3-bar w3-theme-d2 w3-left-align w3-large"
          ref={barHeight}
        >
          <button
            onClick={() => onSetMobileScreenNavigation(true)}
            className="w3-bar-item w3-button w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
          >
            <i className="fa fa-bars"></i>
          </button>
          <Link href="/">
            <a className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
              <i className="fa fa-home w3-margin-right"></i>IT Magic
            </a>
          </Link>
          <Link href="/perfect-stairs">
            <a
              className={
                router.pathname === "/perfect-stairs"
                  ? "w3-bar-item w3-button w3-hide-small w3-hide-medium w3-padding-large w3-hover-white active"
                  : '"w3-bar-item w3-button w3-hide-small w3-hide-medium w3-padding-large w3-hover-white"'
              }
              title="Perfect Stairs"
            >
              Perfect Stairs
            </a>
          </Link>
          <Link href="/game">
            <a
              className={
                router.pathname === "/game"
                  ? "w3-bar-item w3-button w3-hide-small w3-hide-medium w3-padding-large w3-hover-white active"
                  : '"w3-bar-item w3-button w3-hide-small w3-hide-medium w3-padding-large w3-hover-white"'
              }
              title="Game"
            >
              Game
            </a>
          </Link>

          <div className="w3-dropdown-hover w3-hide-small w3-hide-medium">
            <button
              className="w3-button w3-padding-large"
              title="Notifications"
            >
              Calculations
              <span className="w3-badge w3-right w3-small w3-green">3</span>
            </button>
            <div
              className="w3-dropdown-content w3-card-4 w3-bar-block"
              style={{ width: "300px" }}
            >
              <Link href="/simple-panel">
                <a
                  className="w3-bar-item w3-button w3-hide-small w3-hide-medium w3-padding-large w3-hover-white"
                  title="Simple panel"
                >
                  Simple Panel
                </a>
              </Link>
            </div>
          </div>
          <button className="w3-bar-item w3-button w3-hide-small w3-hide-medium w3-right w3-padding-large w3-hover-white">
            Login
          </button>
        </div>
      </div>
      <div style={{ height: divHeight }}></div>
    </>
  );
};

export default NavbarComponent;
