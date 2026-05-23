import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from "./sections/user/dash";
import Login from "./sections/login";
import Signup from "./sections/user/signup";
import MyBooks from "./sections/user/mybooks";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/user"
          element={<User />}
        />

        <Route
          path="/mybooks"
          element={<MyBooks />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;