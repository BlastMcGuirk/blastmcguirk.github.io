import React from "react"
import ReactDOM from "react-dom/client"
import About from "./pages/About"
import App from "./pages/App"
import Awards from "./pages/Awards"
import Projects from "./pages/Projects"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { CssBaseline, Stack, Toolbar } from "@mui/material"

const Layout = () => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Header />
      <Toolbar />
      <Outlet />
      <Footer />
    </Stack>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "awards", element: <Awards /> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline>
        <RouterProvider router={router} />
    </CssBaseline>
  </React.StrictMode>,
)
