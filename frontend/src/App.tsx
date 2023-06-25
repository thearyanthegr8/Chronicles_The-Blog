import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound";
import { userContext } from "./context/userContext";
import api from "./hooks/AxiosApi";
import { User } from "./context/userContext";
import Register from "./pages/Login/Register";

class App extends React.Component<{}, { user: User | null }> {
  constructor(props: any) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount(): void {
    api
      .get("/getUser")
      .then((res) => {
        console.log(res.data);
        this.setState({ user: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <userContext.Provider value={{ user: this.state.user }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    );
  }
}

export default App;
