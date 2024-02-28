// App.tsx
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
  const [todayTasks, setTodayTasks] = useState(""); // State for today's tasks
  const [tomorrowPlans, setTomorrowPlans] = useState(""); // State for tomorrow's plans
  const [consultation, setConsultation] = useState(""); // State for consultation

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
            <NameInput names={names} onNameSelect={handleNameSelect} />
          </div>
          {/* Pass value and onChange props to InputBox components */}
          <InputBox
            heading="本日の作業"
            value={todayTasks}
            onChange={(e) => setTodayTasks(e.target.value)}
          />
          <InputBox
            heading="明日の予定"
            value={tomorrowPlans}
            onChange={(e) => setTomorrowPlans(e.target.value)}
          />
          <InputBox
            heading="相談事項"
            value={consultation}
            onChange={(e) => setConsultation(e.target.value)}
          />
          <div className="container-horizontal">
            <Dropdown
              options={endGreetings}
              heading="End Greeting"
              onSelect={handleEndGreetingSelection}
            />
            <div className="empty-div"></div>
            {/* Functionality of the button below is not yet determined */}
            <Button btnType="Success" heading="Proceed" />
          </div>
        </div>
        <div className="card-body">
          {/* Pass input values as props to the Report component */}
          <Report
            names={selectedNames}
            greetings={selectedGreetings}
            endGreetings={selectedEndGreetings}
            todayTasks={todayTasks}
            tomorrowPlans={tomorrowPlans}
            consultation={consultation}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
