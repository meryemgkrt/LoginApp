import Login from "./LoginForm/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Registration/RegisterForm";

// Kök rota için bir bileşen ekleyin, örneğin Home.

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
