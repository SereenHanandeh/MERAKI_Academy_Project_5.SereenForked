import "./App.css";
import Login from "./components/login/Login";
import { Route, Routes, useRoutes } from "react-router-dom";
import Register from "./components/register/Register";
import Home from "./components/dashboard/Home";
import Profile from "./components/profile/Profile";
import Forget from "./components/forgetPassword/Forget";
import Posts from "./components/posts/Posts";
import { useState } from "react";
import Comments from "./components/comments/Comments";

import SearchBar from "./components/search/Search";
import Followers from "./components/profile/Followers";
import NextStep from "./components/forgetPassword/NextStep";
import SavedPost from "./components/saved Post/savedPost";
import Edit from "./components/profile/Edit";
import AdminDashBoard from "./components/AdminPanel/AdminDashBoard/AdminDashBoard";
import AdminUsers from "./components/AdminPanel/AdminUsers/AdminUsers";
import AdminPosts from "./components/AdminPanel/AdminPosts/AdminPosts";
import AdminReports from "./components/AdminPanel/AdminReports/AdminReports";
import AdminIsLogin from "./components/AdminPanel/AdminIsLogin/AdminIsLogin";
import AdminHome from "./components/AdminPanel/AdminDashBoard/Admin Home/AdminHome";

import HowToUse from "./components/setting/HowToUse";
import GeneralSettings from "./components/setting/UpdateGeneralSettings";
import PrivacySettings from "./components/setting/UpdatePrivacySettings";
import SecuritySettings from "./components/setting/UpdateSecuritySettings";
import ContactUs from "./components/setting/ContactUs";
import AdminComments from "./components/AdminPanel/AdminPosts/adminComments/AdminComments";
import Explore from "./components/explore/Explore";
// import { Provider } from "@/components/ui/provider"
// import { Provider } from "@/components/ui/provider";

function App() {
  const themes = ["light", "dark", "blue", "green"];
  const [theme, setTheme] = useState("light");

  const toggleTheme = (e) => {
    setTheme(e.target.value);
  };

  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "forget",
          element: <Forget />,
          children: [
            {
              path: "claim/",
              element: <NextStep />,
            },
          ],
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          path: "",
          element: <Posts />,
        },
        {
          path: "profile/:id",
          element: <Profile />,
        },
        {
          path: "/home/profile/edit",
          element: <Edit />,
        },
        {
          path: "/home/profile/f/:id",
          element: <Followers />,
        },
        {
          path: "/home/comments/:id",
          element: <Comments />,
        },
        {
          path: "/home/explore",
          element: <Explore />,
        },
        {
          path: "/home/search",
          element: <SearchBar />,
        },
        {
          path: "bookmark",
          element: <SavedPost />,
        },
      ],
    },
    {
      path: "/home/setting",
      children: [
        {
          path: "howToUse",
          element: <HowToUse />,
        },
        {
          path: "general",
          element: <GeneralSettings />,
        },
        {
          path: "privacy",
          element: <PrivacySettings />,
        },
        {
          path: "security",
          element: <SecuritySettings />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
      ],
    },
    {
      path: "Admin/Panel",
      element: <AdminDashBoard />,
      children: [
        { path: "", element: <AdminHome /> },
        { path: "users", element: <AdminUsers /> },
        {
          path: "posts",
          element: <AdminPosts />,
          children: [
            {
              path: "comments/:postId",
              element: <AdminComments />,
            },
          ],
        },
        { path: "reports", element: <AdminReports /> },
        {
          path: "Is/Login",
          element: <AdminIsLogin />,
        },
      ],
    },
  ]);


  return <div className={`app ${theme}`}>{element}</div>;

  return (
    <div className={`app ${theme}`}>
      {/* <header className="app-header">
        <label htmlFor="theme-select">Choose Theme: </label>
        <select id="theme-select" value={theme} onChange={toggleTheme}>
          {themes.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </header> */}
        {element}


   
    </div>
  );

}

export default App;
