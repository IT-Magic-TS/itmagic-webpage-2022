import Image from "next/image";

const AndroidAppCardComponent = ({ title, imgUrl, href }) => {
  return (
    <div className="w3-card w3-round w3-white w3-center">
      <div className="w3-container">
        <h1 className="h1-banner">{title}</h1>
        <Image
          src={imgUrl}
          height={180}
          width={180}
          layout="responsive"
          alt="Stair Calculator"
        />
        <p>
          <a href={href} className="w3-button w3-block w3-theme-l4">
            More Info
          </a>
        </p>
      </div>
    </div>
  );
};

export default AndroidAppCardComponent;
