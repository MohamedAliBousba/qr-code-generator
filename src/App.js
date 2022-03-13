import "./App.css";
import { useState } from "react";
import QrCode from "qrcode";

function App() {
  const [text, setText] = useState("");
  const [generatedCode, setGeneratedCode] = useState();

  const generate = () => {
    QrCode.toDataURL(text).then(setGeneratedCode);
  };

  return (
    <div className="container mt-5">
      <div>
        <label className="form-label">Text</label>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
          className="form-control"
          placeholder="type anything..."
        />
      </div>

      <button className="btn btn-primary my-4" onClick={generate}>
        Generate
      </button>

      <div>{generatedCode && <img src={generatedCode} alt="" />}</div>
    </div>
  );
}

export default App;
