import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About } from "./about/About"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
