import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import "./App.css";

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setOutput(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length > 0 ? (
        <Translation setInput={setInput} doStuff={doStuff} output={output} />
      ) : (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      )}
    </div>
  );
}

export default App;
