import Button from "./components/Button";
import Dropdown from "./components/Dropdown";

function App() {
  let greetings = ["Greeting1", "Greeting2", "Greeting3", "Greeting4"];
  let names = ["@Name1", "@Name1", "@Name1", "@Name1"];

  return (
    <div>
      <Button btnType="Success" heading="Submit"></Button>
      <Dropdown greetings={greetings} heading="Greeting"></Dropdown>
      <Dropdown greetings={names} heading="Names"></Dropdown>
    </div>
  );
}

export default App;
