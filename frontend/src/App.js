// Import Externall modules
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

// Import Internal Modules
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import Navbar from "./components/Navbar/Navbar";
import LeftBar from "./components/Leftbar/Leftbar";
import RightBar from "./components/Rightbar/Rightbar";

function App() {
  // Var only for testing purpose - testing Protected Routes
  const currentUser = true;

  // This propertie Allow us to use reusable components
  // Return Outlet from react-router-dom
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  // Protect some routers - example: if user is not logined or registered redirect to login or register page
  // Children are protected routes
  // In our case Protected Routes are Home and Profile Components
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
