import Image from "next/image";
import { useEffect, useRef } from "react";
import AndroidAppCardComponent from "../ui/android-app-card";
import BannerCard from "../ui/banner-card";
import GalleryCardComponent from "../ui/gallery-card";

const PageContainerComponent = ({ children }) => {
  const containerWidth = useRef();
  useEffect(() => {
    // console.log("Container Width: ", containerWidth.current.clientWidth);
  }, []);
  return (
    // Page Container
    <div className="w3-container w3-content mainSiteContainer">
      {/* The Grid */}
      <div className="w3-row">
        {/* Left Column */}
        <div className="w3-col m3">
          {/* Profile */}
          <BannerCard />
          <br />

          {/* Photos */}
          <GalleryCardComponent />
          <br />

          {/* Interests */}
          <div className="w3-card w3-round w3-white w3-hide-small">
            <div className="w3-container">
              <p>Technology</p>
              <p>
                <span className="w3-tag w3-small w3-theme-d5">SolidWorks</span>
                <span className="w3-tag w3-small w3-theme-d4">JavaScript</span>
                <span className="w3-tag w3-small w3-theme-d3">React.js</span>
                <span className="w3-tag w3-small w3-theme-d2">Next.js</span>
                <span className="w3-tag w3-small w3-theme-d1">Ionic</span>
                <span className="w3-tag w3-small w3-theme">CSS</span>
                <span className="w3-tag w3-small w3-theme-l1">HTML</span>
                <span className="w3-tag w3-small w3-theme-l2">Node.js</span>
                <span className="w3-tag w3-small w3-theme-l3">Firebase</span>
                <span className="w3-tag w3-small w3-theme-l4">Agular</span>
                <span className="w3-tag w3-small w3-theme-l5">php</span>
              </p>
            </div>
          </div>

          {/* End Left Column */}
        </div>

        {/* Middle Column - CONTAINER FOR PAGES */}
        <div className="w3-col m7" ref={containerWidth}>
          {children}

          {/* End Middle Column */}
        </div>

        {/* Right Column */}
        <div className="w3-col m2">
          <AndroidAppCardComponent
            title="Stair Calculator"
            imgUrl="/images/main/stair-balustrade-calculator.png"
            href="https://play.google.com/store/apps/details?id=dev.itmagic.stairandbalustrade"
          />
          <br />
          <AndroidAppCardComponent
            title="Railing Calculator"
            imgUrl="/images/main/railing-calculator.png"
            href="https://play.google.com/store/apps/details?id=dev.itmagic.simplepanelcalculator"
          />
          <br />
          <AndroidAppCardComponent
            title="Gate Calculator"
            imgUrl="/images/main/gate-calculator.png"
            href="https://play.google.com/store/apps/details?id=dev.itmagic.gatecalculator"
          />
          <br />

          {/* End Right Column */}
        </div>

        {/* End Grid */}
      </div>

      {/* End Page Container */}
      <br />
    </div>
  );
};

export default PageContainerComponent;
