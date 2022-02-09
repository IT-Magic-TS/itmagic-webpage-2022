import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import InputNumComponent from "../components/calculations/input-num";

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
    _H = +H;
  }, [angle, H, Hd, X, going, rise, barN, barD]);

  return (
    <>
      <Head>
        <title>Simple Stair Balustrade</title>
        <meta
          name="description"
          content="Calculations for simple stair balustrade. Balusters glued to finish floors"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w3-padding calculations simple-stair-balustrade">
        <h1 className="w3-center">Calculations Simple Stair Balustrade</h1>
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
              src="/images/calculations/B5.PNG"
              height={743}
              width={1296}
              alt="Gallery simple balustrade"
              layout="intrinsic"
              priority="true"
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
            <div className="w3-row-padding div-result">
              <div className="w3-half">
                <p className="label-result">Gap:</p>
              </div>
              <div className="w3-half">
                <p className="result">{gap}</p>
              </div>
            </div>
          </div>

          <div className="w3-card-4 w3-padding">
            <InputNumComponent val={rise} onSetInput={setRise} title="rise" />
            <InputNumComponent
              val={stepN}
              onSetInput={setStepN}
              title="Step Number"
            />
            <div className="w3-row-padding div-result">
              <div className="w3-half">
                <p className="label-result">L:</p>
              </div>
              <div className="w3-half">
                <p className="result">{L}</p>
              </div>
              <div className="w3-half">
                <p className="label-result">Angle:</p>
              </div>
              <div className="w3-half">
                <p className="result">{angle}</p>
              </div>
            </div>
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
