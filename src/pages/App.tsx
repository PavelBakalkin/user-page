import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import AllUsers from "./AllUsers/AllUsers";
import { Route, Routes } from "react-router-dom";
import UsersPosts from "./UsersPosts/UsersPosts";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { useEffect } from "react";
import { fetchInfo } from "../store/usersSlice";
import { requestEnum } from "../constants/api-constants";
import { useAppDispatch } from "../store/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchInfo({ requestName: requestEnum.users }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<AllUsers />} />
          <Route path="/users-posts/:id" element={<UsersPosts />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
