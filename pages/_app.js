import { useState } from "react";
import FooterComponent from "../components/layout/footer";
import NavbarComponent from "../components/layout/navbar";
import NavbarSmallScreensComponent from "../components/layout/navbar-small-screens";
import PageContainerComponent from "../components/layout/page-container";
import "../styles/globals.css";
import "../styles/game.css";
import "../styles/calculations.css";
import ScrollToTop from "react-scroll-to-top";

function MyApp({ Component, pageProps }) {
  const [mobileScreenNavigation, setMobileScreeNavigation] = useState(false);
  return (
    <>
      <ScrollToTop smooth />
      <NavbarComponent onSetMobileScreenNavigation={setMobileScreeNavigation} />
      {mobileScreenNavigation && <NavbarSmallScreensComponent />}
      <PageContainerComponent>
        <Component {...pageProps} />
      </PageContainerComponent>
      <FooterComponent />
    </>
  );
}

export default MyApp;
