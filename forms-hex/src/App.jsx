import Converter from './components/Converter';
import { useState } from 'react';
import './App.css'

function App() {
  const validNumber = 7;
  const error = 'Error'

  const [form, setForm] = useState("");
  const [valid, setValid] = useState();

  const RegExp = /^#[0-9A-F]{6}$/i;
  const validateValue = (value) => RegExp.test(value) ? setValid(value) : setValid(RegExp.test(value));

  const handleChange = ({ target: { value } }) => {
    value.length === validNumber && validateValue(value);
    value.length <= validNumber && setForm(value);
  };

  return (
    <div className="converter" style={valid ? { background: `${valid}` } : { background: "#ff0000" }}>
      <Converter
        form={form}
        valid={valid}
        handleChange={handleChange}
        error={error} />
    </div>
  )
}

export default App
