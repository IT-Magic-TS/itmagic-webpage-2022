import Head from "next/head";
import { useEffect, useState } from "react";
import cls from "classnames";
import Image from "next/image";
import InputNumComponent from "../components/calculations/input-num";
import ResultComponent from "../components/calculations/result";

const RailingCalculatorPage = () => {
  const [typeA, setTypeA] = useState(true);
  const [typeB, setTypeB] = useState(false);
  const [typeC, setTypeC] = useState(false);

  const [sectionLength, setSectionLength] = useState("");
  const [postD, setPostD] = useState("");
  const [panelN, setPanelN] = useState("");

  const [panelLength, setPanelLength] = useState(0);
  const [postN, setPostN] = useState(0);

  // calculate panel
  const [barD, setBarD] = useState("");
  const [barN, setBarN] = useState("");

  const [gap, setGap] = useState(0);
  const [starts, setStarts] = useState([]);

  useEffect(() => {
    const _sectionLength = +sectionLength;
    const _postD = +postD;
    const _panelN = +panelN;

    let _postN = -1;

    switch (true) {
      case typeA:
        _postN = -1;
        break;
      case typeB:
        _postN = 0;
        break;
      case typeC:
        _postN = +1;
        break;
      default:
        _postN = -1;
    }

    _postN = _postN + _panelN;
    const _panelLength = (_sectionLength - _postD * _postN) / _panelN;
    if (_sectionLength > 0 && _postD > 0 && _panelN > 0) {
      setPanelLength(_panelLength.toFixed(0));
      setPostN(_postN.toFixed(0));
      const data = {
        typeA,
        typeB,
        typeC,
        sectionLength,
        postD,
        postN,
        panelN,
        panelLength
      };
      localStorage.setItem("railing-r1", JSON.stringify(data));
    } else {
      setPanelLength(0);
      setPostN(0);
    }

    const _barD = +barD;
    const _barN = parseInt(barN);

    if (
      _sectionLength > 0 &&
      _postD > 0 &&
      _panelN > 0 &&
      _barD > 0 &&
      _barN > 0
    ) {
      // console.log("Panel Length: ", _panelLength);//////////////////////////

      const _gap = (_panelLength - _barD * _barN) / (_barN + 1);
      setGap(_gap.toFixed(1));

      let _start = _gap + _barD / 2;
      let _center = _gap + _barD;
      let _numStarts = _barN - 1;

      let _starts = [_start.toFixed(0)];

      for (let i = 0; i < _numStarts; i++) {
        _start = _start + _center;
        _starts.push(_start.toFixed(0));
      }

      setStarts(_starts);

      const data2 = {
        barD,
        barN,
        gap,
        starts
      };
      localStorage.setItem("railing-r2", JSON.stringify(data2));
    } else {
      setGap(0);
      setStarts([]);
    }
  }, [typeA, typeB, typeC, sectionLength, postD, panelN, barD, barN]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("railing-r1"));
    if (data && typeof data !== "undefined") {
      setPanelLength(data.panelLength);
      setTypeA(data.typeA);
      setTypeB(data.typeB);
      setTypeC(data.typeC);
      setSectionLength(data.sectionLength);
      setPostD(data.postD);
      setPostN(data.postN);
      setPanelN(data.panelN);
    }
    const data2 = JSON.parse(localStorage.getItem("railing-r2"));
    if (data2 && typeof data2 !== "undefined") {
      setBarD(data2.barD);
      setBarN(data2.barN);
      setGap(data2.gap);
      setStarts(data2.starts);
    }
  }, []);

  const typeHandler = id => {
    switch (true) {
      case id === "A":
        setTypeA(true);
        setTypeB(false);
        setTypeC(false);
        return;
      case id === "B":
        setTypeA(false);
        setTypeB(true);
        setTypeC(false);
        return;
      case id === "C":
        setTypeA(false);
        setTypeB(false);
        setTypeC(true);
        return;
      default:
        setTypeA(true);
        setTypeB(false);
        setTypeC(false);
    }
  };

  return (
    <>
      <Head>
        <title>Railing Calculator</title>
        <meta
          name="description"
          content="Calculate panel length, gap between bars and bars start points"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w3-padding calculations">
        <h1 className="w3-center">Railing Calculator</h1>
        <div className="w3-center btn-container">
          <button
            onClick={() => typeHandler("A")}
            className={cls(
              "w3-button w3-ripple w3-border w3-border-blue",
              typeA ? "w3-green" : "w3-pale-yellow"
            )}
          >
            Type A
          </button>
          <button
            onClick={() => typeHandler("B")}
            className={cls(
              "w3-button w3-ripple w3-border w3-border-blue",
              typeB ? "w3-green" : "w3-pale-yellow"
            )}
          >
            Type B
          </button>
          <button
            onClick={() => typeHandler("C")}
            className={cls(
              "w3-button w3-ripple w3-border w3-border-blue",
              typeC ? "w3-green" : "w3-pale-yellow"
            )}
          >
            Type C
          </button>
        </div>
        <div className="gate-img-container w3-center">
          {typeA && (
            <Image
              src="/images/calculations/R2.PNG"
              width={1328}
              height={607}
              alt="Railing - no post on the end"
              layout="intrinsic"
              priority="true"
            />
          )}
          {typeB && (
            <Image
              src="/images/calculations/R3.PNG"
              width={1440}
              height={630}
              alt="Railing - post on one end"
              layout="intrinsic"
              priority="true"
            />
          )}
          {typeC && (
            <Image
              src="/images/calculations/R4.PNG"
              width={1538}
              height={639}
              alt="Railing balustrade"
              layout="intrinsic"
              priority="true"
            />
          )}
        </div>
        <div className="container">
          <div className="w3-card-4 w3-padding">
            <InputNumComponent
              val={sectionLength}
              onSetInput={setSectionLength}
              title="Section Length"
            />
            <InputNumComponent
              val={postD}
              onSetInput={setPostD}
              title="Pd (post diameter)"
            />
            <InputNumComponent
              val={panelN}
              onSetInput={setPanelN}
              title="Panel Number"
            />
            <ResultComponent label="Post Number: " result={postN} />
            <ResultComponent label="Panel Length: " result={panelLength} />
          </div>
        </div>
        <div className="container">
          <div className="w3-card-4 w3-padding">
            <h2 className="w3-center">Panel Calculator</h2>
            <div className="gate-img-container w3-center">
              <Image
                src="/images/calculations/R5.PNG"
                width={1228}
                height={762}
                alt="Railing - no post on the end"
                layout="intrinsic"
                priority="true"
              />
            </div>
            <ResultComponent label="Panel Length: " result={panelLength} />
            <InputNumComponent val={barD} onSetInput={setBarD} title="Bd" />
            <InputNumComponent
              val={barN}
              onSetInput={setBarN}
              title="Bar Number"
            />
            <ResultComponent label="GAP: " result={gap} />
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

export default RailingCalculatorPage;
