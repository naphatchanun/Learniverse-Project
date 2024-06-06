import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextValue } from "./context/user";
import { AxiosLib } from "./lib/axiosLib";

//component
import Navbar from "./component/Navbar/Navbar";
import Creact from "./Page/Creact/creact";
import Play from "./Page/Play/play";
import Firsthome from "./Page/Firsthome/firsthome";
import Login from "./Page/Login/login";
import SignUp from "./Page/SignUp/SignUp";
import Testexam from "./Page/Testexam/testexam";
import Account from "./Page/Account/account";
import ExamResult from "./Page/ExamResult/ExamResult";

import { AuthContext } from "./context/user";
import { useCallback, useEffect, useState } from "react";

export const App = () => {
  const [authContext, setAuthContext] = useState(ContextValue);
  const fetchMyData = useCallback(async () => {
    try {
      const response = await AxiosLib.get("/user/me");
      if (response.status === 200) {
        setAuthContext({
          isLogin: true,
          userId: response.data._id,
          displayName: response.data.displayName,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          role: response.data.role,
          phone: response.data.phone,
        });
      }
    } catch (error) {
      setAuthContext({
        isLogin: false,
        userId: "",
        displayName: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        phone: "",
      });
    }
  }, []);

  useEffect(() => {
    fetchMyData().then(() => console.log("success"));
  }, [fetchMyData]);
  return (
    <AuthContext.Provider value={authContext}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Firsthome />} />
            <Route path="creact" element={<Creact />} />
            <Route path="play" element={<Play />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="testexam/:examID" element={<Testexam />} />
            <Route path="testexam/result/:examID" element={<ExamResult />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
