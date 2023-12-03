import "../App.css";
import hexRgb from "hex-rgb";

const Converter = ({ valid, error, form, handleChange }) => {
  return (
<div className="container">
      <input
        className="input"
        name="backgroundColor"
        value={form}
        onChange={handleChange}
      />
      <div className="output">{valid ? `${hexRgb(valid,  {format: 'css'})}` : error}</div>
    </div>
  );
};

export default Converter;
