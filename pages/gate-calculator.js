import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import InputNumComponent from "../components/calculations/input-num";
import ResultComponent from "../components/calculations/result";

const imgs = [
  {
    title: "DWG 1",
    src: "/images/calculations/G5.PNG",
    width: 1329,
    height: 826,
    alt: "Main Gate"
  },
  {
    title: "DWG 2",
    src: "/images/calculations/G4.PNG",
    width: 784,
    height: 864,
    alt: "Half of main gate"
  },
  {
    title: "DWG 3",
    src: "/images/calculations/G3.PNG",
    width: 595,
    height: 794,
    alt: "Gate Detail"
  },
  {
    title: "DWG 4",
    src: "/images/calculations/G2.PNG",
    width: 1381,
    height: 420,
    alt: "Gate mid bar - dog infill bars"
  },
  {
    title: "DWG 5",
    src: "/images/calculations/G1.PNG",
    width: 1420,
    height: 387,
    alt: "Gate mid bar"
  }
];

const GateCalculatorPage = () => {
  const [activeImg, setActiveImg] = useState(imgs[0]);

  const [dogBars, setDogBars] = useState(true);

  const [gateWidth, setGateWidth] = useState("");
  const [barD, setBarD] = useState("");
  const [barN, setBarN] = useState("");
  const [postD, setPostD] = useState("");
  const [styleD, setStyleD] = useState("");
  const [gapMid, setGapMid] = useState("");

  const [barLength, setBarLength] = useState(0);
  const [gap, setGap] = useState(0);
  const [A, setA] = useState(0);
  const [center, setCenter] = useState(0);
  const [starts, setStarts] = useState([]);

  useEffect(() => {
    const _gateWidth = +gateWidth;
    const _barD = +barD;
    const _barN = +barN;
    const _postD = +postD;
    const _styleD = +styleD;
    const _gapMid = +gapMid;

    let _A = (_gateWidth - _gapMid) / 2;
    let _barLength = _A - _postD - _styleD;

    if (_gateWidth > 0 && _postD > 0 && _styleD > 0 && _gapMid > 0) {
      setA(_A.toFixed(0));
      setBarLength(_barLength.toFixed(0));
      const data = {
        gateWidth,
        postD,
        styleD,
        gapMid,
        A,
        barLength
      };
      localStorage.setItem("gate-g1", JSON.stringify(data));
    } else {
      setA(0);
      setBarLength(0);
    }

    if (
      _gateWidth > 0 &&
      _postD > 0 &&
      _styleD > 0 &&
      _gapMid > 0 &&
      _barD > 0 &&
      _barN > 0
    ) {
      const _gap = (_barLength - _barD * _barN) / (_barN + 1);
      const _center = _gap + _barD;

      if (dogBars) {
        const startsNum = _barN * 2;
        const _starts = [];
        let start = _gap / 2;
        _starts.push(start.toFixed(0));
        for (let i = 0; i < startsNum; i++) {
          start = start + _center / 2;
          _starts.push(start.toFixed(0));
        }
        setStarts(_starts);
        const data = {
          barD,
          barN,
          starts
        };
        localStorage.setItem("gate-g2", JSON.stringify(data));
      } else {
        const startsNum = _barN - 1;
        const _starts = [];
        let start = _gap + _barD / 2;
        _starts.push(start.toFixed(0));
        for (let i = 0; i < startsNum; i++) {
          start = start + _center;
          _starts.push(start.toFixed(0));
        }
        setStarts(_starts);
        const data = {
          barD,
          barN,
          starts
        };
        localStorage.setItem("gate-g2", JSON.stringify(data));
      }

      setGap(_gap.toFixed(1));
      setCenter(_center.toFixed(1));
    } else {
      setGap(0);
      setCenter(0);
      setStarts([]);
    }
  }, [gateWidth, barD, barN, postD, styleD, gapMid, dogBars]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("gate-g1"));
    if (data && typeof data !== "undefined") {
      setGateWidth(data.gateWidth);
      setPostD(data.postD);
      setStyleD(data.styleD);
      setGapMid(data.gapMid);
      setA(data.A);
      setBarLength(data.barLength);
    }
    const data2 = JSON.parse(localStorage.getItem("gate-g2"));
    if (data2 && typeof data2 !== "undefined") {
      setBarD(data2.barD);
      setBarN(data2.barN);
      setStarts(data2.starts);
    }
  }, []);

  const imgHandler = index => {
    const id = +index;
    setActiveImg(imgs[id]);
  };

  return (
    <>
      <Head>
        <title>Gate Calculator</title>
        <meta
          name="description"
          content="Calculate gap between gate bars, start points and gate width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w3-padding calculations">
        <h1 className="w3-center">Gate Calculator</h1>
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
        <div className="gate-img-container w3-center">
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
            <InputNumComponent
              val={gateWidth}
              onSetInput={setGateWidth}
              title="Gate Width"
            />
            <InputNumComponent val={postD} onSetInput={setPostD} title="Pd" />
            <InputNumComponent val={styleD} onSetInput={setStyleD} title="Sd" />
            <InputNumComponent val={gapMid} onSetInput={setGapMid} title="Gs" />
            <ResultComponent label="A:" result={A} />
            <ResultComponent label="Bar Length:" result={barLength} />
          </div>
          <div className="w3-card-4 w3-padding">
            <input
              className="w3-radio"
              type="radio"
              name="gateType"
              onChange={() => setDogBars(true)}
              value={dogBars}
              checked={dogBars}
            />
            <label> Gate with dog bars</label>
            <br />
            <input
              className="w3-radio"
              type="radio"
              name="gateType"
              onChange={() => setDogBars(false)}
              value={dogBars}
              checked={!dogBars}
            />
            <label> Gate without dog bars</label>
            <ResultComponent label="Bar Length:" result={barLength} />
            <InputNumComponent val={barD} onSetInput={setBarD} title="Bd" />
            <InputNumComponent
              val={barN}
              onSetInput={setBarN}
              title="Bar Number"
            />
            <ResultComponent label="C:" result={center} />
            <ResultComponent label="GAP:" result={gap} />
          </div>
          {starts.length > 0 && (
            <div className="w3-card-4 w3-padding">
              <h2 className="w3-center">Start Points</h2>
              <div className="start-points">
                {starts.map((item, index) => (
                  <div key={index} className={index % 2 === 0 ? "odd" : ""}>
                    S{index + 1}: {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GateCalculatorPage;
