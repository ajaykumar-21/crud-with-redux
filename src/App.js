import "./App.css";
import CreateUserForm from "./components/CreateUserForm";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
      <h1>Hello, from App</h1>
      <NavBar />
      <CreateUserForm />
    </div>
  );
}

export default App;
