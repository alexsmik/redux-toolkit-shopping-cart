import React from "react";
import { Outlet } from 'react-router-dom';
// why this? Outlet
// An <Outlet> should be used in parent route elements to render their child route elements.
//     This allows nested UI to show up when child routes are rendered.
//     If the parent route matched exactly, it will render a child index route
// or nothing if there is no index route.
//     function Dashboard() { return ( <div> <. h1>Dashboard</h1>
// {/*. This element will render either <DashboardMessages> when the URL is "/.
// messages", <DashboardTasks> at "/tasks", or null if it is "/" */} <. Outlet /> </div> ); }
const Home = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default Home;
