import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import InputBox from "./components/InputBox";
import TagNames from "./components/TagNames";

function App() {
  let greetings = ["Greeting1", "Greeting2", "Greeting3", "Greeting4"];
  let names = ["@Name1", "@Name1", "@Name1", "@Name1"];
  let endGreetings = [
    "endGreeting1",
    "endGreeting2",
    "endGreeting3",
    "endGreeting4",
  ];

  return (
    <div className="container">
      <h1>Report Creator</h1>
      <div className="card-body">
        <div className="container-horizontal">
          <Dropdown greetings={greetings} heading="Greeting"></Dropdown>
          <div className="empty-div"></div>
          <Dropdown greetings={names} heading="Names"></Dropdown>
        </div>
        <InputBox heading="本日の作業"></InputBox>
        <InputBox heading="明日の予定"></InputBox>
        <InputBox heading="相談事項"></InputBox>
        <div className="container-horizontal">
          <Dropdown greetings={endGreetings} heading="Greeting"></Dropdown>
          <div className="empty-div"></div>
          <Button btnType="Success" heading="Submit"></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
