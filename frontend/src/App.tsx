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
import Blog from "./pages/Blog";

class App extends React.Component<{}, { user: User | null; blogs: [] }> {
  constructor(props: any) {
    super(props);
    this.state = { user: null, blogs: [] };
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

    api
      .get("/getAllBlogs")
      .then((res) => {
        console.log(res.data);
        this.setState({ blogs: res.data });
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
              <Route index element={<Home blogs={this.state.blogs} />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="blog/:id" element={<Blog />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    );
  }
}

export default App;
