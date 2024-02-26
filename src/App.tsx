import React, { useState } from "react";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import InputBox from "./components/InputBox";
import Report from "./components/Report";
import NameInput from "./components/NameInput";

function App() {
  const [selectedGreetings, setSelectedGreetings] = useState<string[]>([]);
  const [selectedEndGreetings, setSelectedEndGreetings] = useState<string[]>(
    []
  );
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const greetings = ["お疲れ様です", "お疲れ様でした"];
  const names = [
    "@managers ",
    "@channel ",
    "@here ",
    "@Satoshi Kosugi ",
    "@熊澤拓哉 Kumazawa Takuya ",
    "@清藤 智弘 Tomohiro Kiyofuji ",
  ];
  const endGreetings = [
    "よろしくお願い致します",
    "お願い致します",
    "宜しく頼みます",
  ];

  const handleGreetingSelection = (selected: string[]) => {
    setSelectedGreetings(selected);
  };

  const handleEndGreetingSelection = (selected: string[]) => {
    setSelectedEndGreetings(selected);
  };

  const handleNameSelect = (name: string) => {
    setSelectedNames((prevNames) => [...prevNames, name]);
  };

  return (
    <div className="container">
      <div className="card-title">
        <h1>Report Creator</h1>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="container-horizontal">
            <Dropdown
              options={greetings}
              heading="Greeting"
              onSelect={handleGreetingSelection}
            />
            <div className="empty-div"></div>
            {/* Replace the Dropdown component with NameInput */}
            <NameInput names={names} onNameSelect={handleNameSelect} />
          </div>
          <InputBox heading="本日の作業" />
          <InputBox heading="明日の予定" />
          <InputBox heading="相談事項" />
          <div className="container-horizontal">
            <Dropdown
              options={endGreetings}
              heading="End Greeting"
              onSelect={handleEndGreetingSelection}
            />
            <div className="empty-div"></div>
            <Button btnType="Success" heading="Submit" />
          </div>
        </div>
        <div className="card-body">
          <Report
            names={selectedNames}
            greetings={selectedGreetings}
            endGreetings={selectedEndGreetings}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
