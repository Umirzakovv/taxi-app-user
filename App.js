// import AppStack from "./src/stacks/AppStack";
import { useContext } from "react";
import MainProvider from "./src/context";
import AuthStack from "./src/stacks/AuthStack";
import MainApp from "./src/MainApp";

export default function App() {
  return (
    <MainProvider>
      <MainApp />
    </MainProvider>
  );
}
