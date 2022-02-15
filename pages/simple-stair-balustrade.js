import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import cls from "classnames";
import InputNumComponent from "../components/calculations/input-num";
import ResultComponent from "../components/calculations/result";

const SimpleStairBalustrade = () => {
  const [mainImg, setMainImg] = useState(true);

  const [going, setGoing] = useState("");
  const [barD, setBarD] = useState("");
  const [barN, setBarN] = useState("");
  const [d, setD] = useState("");

  const [rise, setRise] = useState("");
  const [stepN, setStepN] = useState(1);

  const [H, setH] = useState("");
  const [Hd, setHd] = useState("");
  const [X, setX] = useState("");

  const [barsLength, setBarsLength] = useState([]);

  const [gap, setGap] = useState(0);
  const [starts, setStarts] = useState([]);

  const [L, setL] = useState(0);
  const [angle, setAngle] = useState(0);

  // get data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("stair-calc-y"));
    const data2 = JSON.parse(localStorage.getItem("stair-calc-yy"));
    const data3 = JSON.parse(localStorage.getItem("stair-calc-yyy"));

    if (data && typeof data !== "undefined") {
      setGoing(data.going);
      setBarD(data.barD);
      setBarN(data.barN);
      setD(data.d);
      setGap(data.gap);
      setStarts(data.starts);
    }

    if (data2 && typeof data2 !== "undefined") {
      setRise(data2.rise);
      setStepN(data2.stepN);
      setAngle(data2.angle);
      setL(data2.L);
    }

    if (data3 && typeof data3 !== "undefined") {
      setH(data3.H);
      setHd(data3.Hd);
      setX(data3.X);
      setBarsLength(data3.barsLength);
    }
  }, []);

  useEffect(() => {
    const _going = +going;
    const _d = +d;
    const _barN = +barN;
    const _barD = +barD;

    const _gap = (_going - _barN * _barD) / _barN;

    let _starts = _gap - _d + _barD / 2;
    const _center = _gap + _barD;

    const startArr = [];

    if (_going > 0 && _barN > 0 && (_barD > 0) & (_barN < 20)) {
      startArr.push(_starts.toFixed(0));
      for (let i = 0; i < _barN - 1; i++) {
        _starts = _starts + _center;
        startArr.push(_starts.toFixed(0));
      }
      setGap(_gap.toFixed(1));
      setStarts(startArr);
      const data = {
        going,
        barD,
        barN,
        d,
        gap,
        starts
      };
      localStorage.setItem("stair-calc-y", JSON.stringify(data));
    } else {
      setGap(0);
    }
  }, [going, d, barD, barN]);

  useEffect(() => {
    const _going = +going;
    const _rise = +rise;
    const _stepN = +stepN;

    let pitch = Math.atan(_rise / _going);
    pitch = (pitch / Math.PI) * 180;
    const angle = 90 - pitch;

    const diagonala = Math.sqrt(_rise * _rise + _going * _going);
    const _L = diagonala * _stepN;

    if (_going > 0 && _rise > 0 && stepN > 0) {
      setAngle(angle.toFixed(2));
      setL(_L.toFixed(0));

      const data = {
        stepN,
        rise,
        angle,
        L
      };
      localStorage.setItem("stair-calc-yy", JSON.stringify(data));
    } else {
      setAngle(0);
      setL(0);
    }
  }, [going, rise, stepN]);

  useEffect(() => {
    const _H = +H;
    const _Hd = +Hd;
    const _X = +X;
    const _beta = 90 - angle;
    const _betaRadian = (_beta * Math.PI) / 180;
    const _alphaRadian = (+angle * Math.PI) / 180;

    const y = _Hd / Math.sin(_alphaRadian);
    const _Hbottom = _H - y + _X;

    const as = starts.map(item => +item + barD / 2);
    const bs = as.map(item => +item * Math.tan(_betaRadian));
    const _barsLength = bs.map(item => {
      const bl = item + _Hbottom;
      return bl.toFixed(0);
    });
    if (_H > 0 && _X && _Hd > 0 && barN > 0 && barN < 40 && stepN > 0) {
      setBarsLength(_barsLength);
      const data = {
        H,
        Hd,
        X,
        barsLength
      };
      localStorage.setItem("stair-calc-yyy", JSON.stringify(data));
    } else {
      setBarsLength([]);
    }
  }, [angle, H, Hd, X, going, rise, barN, barD, gap, starts]);

  return (
    <>
      <Head>
        <title>Simple Stair Balustrade Calculator</title>
        <meta
          name="description"
          content="Calculate gap between balusters, handri length, angle and balusters length"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w3-padding calculations simple-stair-balustrade">
        <h1 className="w3-center">Simple Stair Balustrade Calculator</h1>
        <div className="w3-center btn-container">
          <button
            onClick={() => setMainImg(true)}
            className="w3-button w3-ripple w3-pale-yellow w3-border w3-border-blue"
          >
            Drawing 1
          </button>
          <button
            onClick={() => setMainImg(false)}
            className="w3-button w3-ripple w3-pale-yellow w3-border w3-border-blue"
          >
            Drawing 2
          </button>
        </div>
        {mainImg && (
          <div className="simple-stair-img-container">
            <Image
              src="/images/calculations/B1.PNG"
              height={929}
              width={751}
              alt="Gallery simple balustrade"
              layout="intrinsic"
              priority="true"
            />
          </div>
        )}
        {!mainImg && (
          <div className="simple-stair-img-container">
            <Image
              src="/images/calculations/A5.PNG"
              height={748}
              width={1526}
              alt="Gallery simple balustrade"
              layout="intrinsic"
            />
          </div>
        )}
        <div className="container">
          <div className="w3-card-4 w3-padding">
            <InputNumComponent
              val={going}
              onSetInput={setGoing}
              title="going"
            />
            <InputNumComponent val={d} onSetInput={setD} title="d" />
            <InputNumComponent val={barD} onSetInput={setBarD} title="Bd" />
            <InputNumComponent
              val={barN}
              onSetInput={setBarN}
              title="Bar Number"
            />
            <ResultComponent label="Gap:" result={gap} />
          </div>

          <div className="w3-card-4 w3-padding">
            <InputNumComponent val={rise} onSetInput={setRise} title="rise" />
            <InputNumComponent
              val={stepN}
              onSetInput={setStepN}
              title="Step Number"
            />
            <ResultComponent label="L:" result={L} />
            <ResultComponent label="Angle:" result={angle} />
          </div>

          <div className="w3-card-4 w3-padding">
            <InputNumComponent val={H} onSetInput={setH} title="H" />
            <InputNumComponent val={Hd} onSetInput={setHd} title="Hd" />
            <InputNumComponent val={X} onSetInput={setX} title="X" />
            {barsLength.length > 0 &&
              barsLength.map((item, index) => (
                <div
                  key={index}
                  className={cls("bars", index % 2 === 0 ? "odd" : "")}
                >
                  Bar {index + 1} length = {item} ({stepN}{" "}
                  {stepN > 1 ? "bars" : "bar"})
                </div>
              ))}
          </div>

          {gap > 0 && (
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

export default SimpleStairBalustrade;
