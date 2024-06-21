import "./App.css";
import Buttons from "./Container/Buttons";
import Contacts from "./Container/Contacts";
import Forms from "./Container/Forms";
import Header from "./Container/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpLine from "./Container/HelpLine";

function App() {
  return (
    <>
      <Header></Header>
      <Contacts></Contacts>
      <Buttons></Buttons>
      <Forms></Forms>
      <HelpLine></HelpLine>
    </>
  );
}

export default App;
