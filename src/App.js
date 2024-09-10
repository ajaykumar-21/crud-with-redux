import "./App.css";
import CreateUserForm from "./components/CreateUserForm";
import UserCard from "./components/UserCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello, from App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateUserForm />} />
          <Route path="/card" element={<UserCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
