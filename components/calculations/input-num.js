const InputNumComponent = ({ title, onSetInput, val }) => {
  return (
    <div className="w3-row-padding">
      <div className="w3-half">
        <p className="label">{title}</p>
      </div>
      <div className="w3-half">
        <input
          value={val}
          onChange={e => onSetInput(e.target.value)}
          className="w3-input w3-border"
          type="number"
        />
      </div>
    </div>
  );
};

export default InputNumComponent;
