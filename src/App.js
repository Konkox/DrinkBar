import "./styles.css";
import styles from "./styles.module.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CarbonatedDrinks from "../src/components/CarbonatedDrinks/Carbonated_drink";
import Drinkers from "./components/Drinkers/Drinker";
import Juices from "./components/Juices/Juice";
import Nav from "./components/Nav/Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "carbo",
        element: <CarbonatedDrinks />
      },
      {
        path: "drinkers",
        element: <Drinkers />
      },
      {
        path: "juices",
        element: <Juices />
      }
    ]
  }
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} className={styles.nav} />
    </div>
  );
}
