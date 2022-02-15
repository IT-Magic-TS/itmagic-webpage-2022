import { useEffect, useState } from "react";
import FooterComponent from "../components/layout/footer";
import NavbarComponent from "../components/layout/navbar";
import NavbarSmallScreensComponent from "../components/layout/navbar-small-screens";
import PageContainerComponent from "../components/layout/page-container";
import "../styles/globals.css";
import "../styles/game.css";
import "../styles/calculations.css";
import ScrollToTop from "react-scroll-to-top";
import { MessengerChat } from "react-messenger-chat-plugin";
import AlertPrivacy from "../components/alert-privacy";

// npm install react-messenger-chat-plugin

function MyApp({ Component, pageProps }) {
  const [mobileScreenNavigation, setMobileScreeNavigation] = useState(false);

  // set privacy
  const [agree, setAgree] = useState(true);
  useEffect(() => {
    const privacy = JSON.parse(localStorage.getItem("privacyOK"));
    if (privacy !== true) {
      setAgree(false);
    }
  }, []);
  const privacyHandler = () => {
    setAgree(true);
    localStorage.setItem("privacyOK", JSON.stringify(true));
  };
  return (
    <>
      <ScrollToTop smooth />
      <NavbarComponent onSetMobileScreenNavigation={setMobileScreeNavigation} />
      {mobileScreenNavigation && <NavbarSmallScreensComponent />}
      <PageContainerComponent>
        <Component {...pageProps} />
      </PageContainerComponent>
      {!agree && <AlertPrivacy privacyHandler={privacyHandler} />}
      <FooterComponent />
      <MessengerChat pageId="108660137620792" />;
    </>
  );
}

export default MyApp;
