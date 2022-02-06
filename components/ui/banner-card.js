import Image from "next/image";

const BannerCard = () => {
  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container">
        {/* <h4 className="w3-center">My Profile</h4> */}
        <p className="w3-center">
          <Image
            src="/icon-384x384.png"
            className="img-animation"
            height={106}
            width={106}
            layout="responsive"
            alt="ship wheel"
            priority="true"
          />
        </p>
        <hr />
        <p>
          <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>{" "}
          3D design and Mobile Web development
        </p>
        <p>
          <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>{" "}
          Esher, UK
        </p>
        <p>
          <i className="fa fa-envelope fa-fw w3-margin-right w3-text-theme"></i>{" "}
          info@itmagic.dev
        </p>
      </div>
    </div>
  );
};

export default BannerCard;
