import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import InputNumComponent from "../components/calculations/input-num";
import ResultComponent from "../components/calculations/result";

const imgs = [
  {
    title: "DWG 1",
    src: "/images/calculations/W6.PNG",
    width: 667,
    height: 813,
    alt: "Wall handrail bracket"
  },
  {
    title: "DWG 2",
    src: "/images/calculations/W1.PNG",
    width: 235,
    height: 393,
    alt: "Wall handrail bracket"
  },
  {
    title: "DWG 3",
    src: "/images/calculations/W7.PNG",
    width: 620,
    height: 601,
    alt: "Wall handrail bracket"
  },
  {
    title: "DWG 4",
    src: "/images/calculations/W8.PNG",
    width: 709,
    height: 776,
    alt: "Wall handrail bracket"
  },
  {
    title: "DWG 5",
    src: "/images/calculations/W9.PNG",
    width: 928,
    height: 892,
    alt: "Wall handrail bracket"
  },
  {
    title: "DWG 6",
    src: "/images/calculations/W10.PNG",
    width: 1353,
    height: 685,
    alt: "Wall handrail bracket"
  }
];

const WallHandrailPage = () => {
  const [activeImg, setActiveImg] = useState(imgs[0]);

  const [C, setC] = useState("");
  const [C2, setC2] = useState("");
  const [D, setD] = useState("");
  const [O, setO] = useState("");

  const [X, setX] = useState(0);
  const [G, setG] = useState(0);
  const [gap, setGap] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wall-handrail-w"));
    if (data && typeof data !== "undefined") {
      setC(data.C);
      setC2(data.C2);
      setD(data.D);
      setO(data.O);
      setX(data.X);
      setG(data.G);
      setGap(data.gap);
    }
  }, []);

  useEffect(() => {
    const _C = +C;
    const _C2 = +C2;
    const _D = +D;
    const _O = +O;

    let _X = _C2 - _C;
    let _G = _C - _D / 2;
    let _gap = _O - _X;

    if (
      (_C > 0 && _C2 > 0) ||
      (_C > 0 && _D > 0) ||
      (_C > 0 && _C2 > 0 && _O > 0)
    ) {
      setX(_X.toFixed(0));
      setG(_G.toFixed(0));
      setGap(_gap.toFixed(0));

      const data = {
        C,
        C2,
        D,
        O,
        X,
        G,
        gap
      };

      localStorage.setItem("wall-handrail-w", JSON.stringify(data));
    } else {
      setX(0);
    }
  }, [C, C2, D, O]);

  const imgHandler = index => {
    const id = +index;
    setActiveImg(imgs[id]);
  };
  return (
    <>
      <Head>
        <title>Wall Handrail Calculator</title>
        <meta
          name="description"
          content="Calculator for wall handrail - stair start without outher wall"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w3-padding calculations">
        <h1 className="w3-center">Wall Handrail Calculator</h1>
        <div className="w3-center btn-container">
          {imgs.map((item, index) => (
            <button
              key={index}
              onClick={() => imgHandler(index)}
              className="w3-button w3-ripple w3-pale-yellow w3-border w3-border-blue"
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="wall-handrail-img-container">
          {activeImg && (
            <Image
              src={activeImg.src}
              height={activeImg.height}
              width={activeImg.width}
              alt={activeImg.alt}
              layout="intrinsic"
              priority="true"
            />
          )}
        </div>
        <div className="container">
          <div className="w3-card-4 w3-padding">
            <InputNumComponent val={C} onSetInput={setC} title="C" />
            <InputNumComponent val={C2} onSetInput={setC2} title="C2" />
            <InputNumComponent val={D} onSetInput={setD} title="D" />
            <InputNumComponent val={O} onSetInput={setO} title="O" />
            <ResultComponent label="X:" result={X} />
            <ResultComponent label="G:" result={G} />
            <ResultComponent label="Gap:" result={gap} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WallHandrailPage;
