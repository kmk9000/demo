import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Layout from "./Layout";
import Todos from "./components/Todos";
import SingleEmployee from "./components/SingleEmployee";
import EmployeeDataGrid from "./components/EmployeeDataGrid";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/employees/:id",
        element: <SingleEmployee />,
      },
      {
        path: "/grid",
        element: <EmployeeDataGrid />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },

      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
