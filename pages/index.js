import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import etsyListData from "../data/etsy-data.json";
import EtsyCardComponent from "../components/ui/etsy-card";
import { useEffect, useState } from "react";

export function getStaticProps() {
  return {
    props: {
      etsyList: etsyListData
    }
  };
}

export default function Home(props) {
  const [etsyList, setEtsyList] = useState([]);

  const [btnPartOne, setBtnPartOne] = useState(false);
  const [btnPartTwo, setBtnPartTwo] = useState(true);

  const showData2 = () => {
    setBtnPartOne(true);
    setBtnPartTwo(false);
  };

  const showData1 = () => {
    setBtnPartOne(false);
    setBtnPartTwo(true);
  };

  useEffect(() => {
    const arr1 = props.etsyList.slice(0, 20);
    const arr2 = props.etsyList.slice(21, 41);

    if (btnPartTwo) {
      setEtsyList(arr1);
    } else {
      setEtsyList(arr2);
    }

    window.scrollTo(0, 0);
  }, [btnPartOne, btnPartTwo]);
  return (
    <>
      <Head>
        <title>3D Design | 2D cad Drawings | Mobile Web Developing</title>
        <meta
          name="description"
          content="Cutting-edge custom 3D models with gorgeous design from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="DWvarJ4iJlGHputsGdMDmHQ-oVwAM2pjPF2PZ9gNubs"
        />
      </Head>
      <div className="w3-row w3-margin">
        {etsyList.map(item => (
          <div key={item.id} className="w3-col m4 l3">
            <EtsyCardComponent item={item} />
          </div>
        ))}
      </div>
      <div className="w3-center">
        <div className="w3-bar w3-border">
          <button
            disabled={btnPartTwo}
            href="#"
            className="w3-bar-item w3-button"
            onClick={showData1}
          >
            &laquo;
          </button>
          <button
            disabled={btnPartTwo}
            onClick={showData1}
            href="#"
            className="w3-bar-item w3-button"
          >
            1
          </button>
          <button
            disabled={btnPartOne}
            onClick={showData2}
            href="#"
            className="w3-bar-item w3-button"
          >
            2
          </button>
          <button
            disabled={btnPartOne}
            onClick={showData2}
            href="#"
            className="w3-bar-item w3-button"
          >
            &raquo;
          </button>
        </div>
      </div>
    </>
  );
}
