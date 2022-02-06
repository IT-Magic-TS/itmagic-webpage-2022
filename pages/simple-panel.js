import Image from "next/image";
import { useEffect, useState } from "react";
import InputNumComponent from "../components/calculations/input-num";
// import cls from "classnames";

const SimplePanel = () => {
  const [panlLength, setPanelLength] = useState("");
  const [barD, setBarD] = useState("");
  const [barNum, setBarNum] = useState("");

  const [gap, setGap] = useState(0);
  const [startPoints, setStartPoints] = useState([]);

  const [panelHeight, setPanelHeight] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  const [barLength, setBarLength] = useState(0);

  useEffect(() => {
    const pL = +panlLength;
    const bD = +barD;
    const bNum = parseInt(barNum);

    if (pL > 0 && bD > 0 && bNum > 0 && bNum < 200) {
      let gap = (pL - bD * bNum) / (bNum + 1);
      if (gap > 0) {
        const starts = [];
        let start_dim = gap + bD / 2;
        const center = gap + bD;

        starts.push(start_dim.toFixed(0));

        for (let i = 0; i < bNum - 1; i++) {
          start_dim = start_dim + center;
          starts.push(start_dim.toFixed(0));
        }
        setStartPoints(starts);
      }
      setGap(gap.toFixed(1));
    } else {
      setGap(0);
      setStartPoints([]);
    }
  }, [panlLength, barD, barNum]);

  useEffect(() => {
    const pH = +panelHeight;
    const _X = +x;
    const _Y = +y;

    if (pH > 0) {
      const barL = pH - _X + _Y;
      setBarLength(barL.toFixed(0));
    } else {
      setBarLength(0);
    }
  }, [x, y, panelHeight]);

  return (
    <div className="w3-padding calculations">
      <h1 className="w3-center">Simple Panel</h1>
      <Image
        src="/images/calculations/L4.PNG"
        height={929}
        width={1527}
        alt="Gallery simple balustrade"
        layout="responsive"
        priority="true"
      />
      <div className="container">
        <div className="w3-card-4 w3-padding">
          <InputNumComponent
            val={panlLength}
            onSetInput={setPanelLength}
            title="Panel Length"
          />
          <InputNumComponent
            val={barD}
            onSetInput={setBarD}
            title="Bd (Bar Diameter)"
          />
          <InputNumComponent
            val={barNum}
            onSetInput={setBarNum}
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
        {/* start calculate BAR HEIGHT */}
        <div className="w3-card-4 w3-padding">
          <InputNumComponent
            val={panelHeight}
            onSetInput={setPanelHeight}
            title="Panel Height"
          />
          <InputNumComponent val={x} onSetInput={setX} title="X" />
          <InputNumComponent val={y} onSetInput={setY} title="Y" />
          <div className="w3-row-padding div-result">
            <div className="w3-half">
              <p className="label-result">Bar Length:</p>
            </div>
            <div className="w3-half">
              <p className="result">{barLength}</p>
            </div>
          </div>
        </div>
        {gap > 0 && (
          <div className="w3-card-4 w3-padding">
            <h2 className="w3-center">Start Points</h2>
            <div className="start-points">
              {startPoints.map((item, index) => (
                <div key={index} className={index % 2 === 0 ? "odd" : ""}>
                  S{index + 1}: {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimplePanel;
