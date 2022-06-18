import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom"
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/signin/SignIn";

function Shop() {
  return (
    <div>I am shop</div>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
