import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import InputNumComponent from "../components/calculations/input-num";

const SimpleStairBalustrade = () => {
  const [going, setGoing] = useState("");
  const [rise, setRise] = useState("");
  const [barD, setBarD] = useState("");
  const [barN, setBarN] = useState("");
  const [d, setD] = useState("");

  const [gap, setGap] = useState(0);
  const [starts, setStarts] = useState([]);

  useEffect(() => {
    const _going = +going;
    const _d = +d;
    const _barN = +barN;
    const _barD = +barD;

    const _gap = (_going - _barN * _barD) / (_barN + 1);

    let _starts = _gap - _d + _barD / 2;
    const _center = _gap + _barD;

    const startArr = [];

    if (_going > 0 && _barN > 0 && (_barD > 0) & (_barN < 20)) {
      startArr.push(_starts);
      for (let i = 0; i < _barN - 1; i++) {
        _starts = _starts + _center;
        startArr.push(_starts.toFixed(0));
      }
      setGap(_gap.toFixed(1));
      setStarts(startArr);
    }
  }, [going, d, barD, barN]);

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
