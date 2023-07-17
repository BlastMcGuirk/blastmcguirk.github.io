import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { store } from "./app/store"
import { About } from "./about/About"
import { Home } from "./home/Home"

/**
 * Details about a page on the site
 */
export interface Page {
  // The path to the page
  path: string;
  // The name of the page for the header
  name: string;
  // The page
  element: JSX.Element;
}

/**
 * The list of pages for the website
 */
export const pages: Page[] = [
  {
    path: '/',
    name: 'Home',
    element: <Home />
  },
  {
    path: '/about',
    name: 'About',
    element: <About />
  },
  {
    path: '/projects',
    name: 'Projects',
    element: <h1>Projects</h1>
  }
]

// Create the routes
const router = createBrowserRouter(pages);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
