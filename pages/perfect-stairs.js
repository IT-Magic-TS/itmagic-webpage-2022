import Image from "next/image";
import Head from "next/head";

const PerfectStairs = () => {
  return (
    <>
      <Head>
        <title>Perfect Stair | Design Balustrade First in 3D then Stair</title>
        <meta
          name="description"
          content="We show 2 different designs of the same stairs. Grren one project will finish with profit. Red one is better to walk away before start."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w3-padding">
        <h1 className="w3-center main-posts-h1">
          Perfect Stair = Design Balustrade First in 3D then Stair
        </h1>
        <div className="w3-margin">
          <ul>
            <li className="emoji-list">&#9989; = Profit </li>
            <li className="emoji-list">
              &#9989; &#9989; &#9989; &#9989;... = New Year Bonus{" "}
            </li>
          </ul>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/Y2.jpg"
              alt="Corner stairs simple design"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/Y4.jpg"
              alt="Perfect stairs with balustrade"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="w3-margin">
          <ul>
            <li className="emoji-list">&#10060; = No profit </li>
            <li className="emoji-list">
              &#10060; &#10060; &#10060; &#10060;... = Out of business{" "}
            </li>
          </ul>
        </div>
        <div className="main-posts-img-container">
          <div className="w3-display-container">
            <Image
              src="/images/main/Y1.jpg"
              alt="Corner stairs - no planning about balustrade"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
          <div className="w3-display-container">
            <Image
              src="/images/main/Y3.jpg"
              alt="Handrail with a lot of transitions"
              width={500}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
      <div className="app-container">
        <a href="https://play.google.com/store/apps/details?id=dev.itmagic.stairandbalustrade">
          <div>
            <Image
              src="/images/android/S1.PNG"
              alt="Stai & Balustrade Calculator"
              width={840}
              height={240}
              layout="intrinsic"
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default PerfectStairs;
