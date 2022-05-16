import React, { useEffect } from "react";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { GlobalStyles } from "./Styles/global.styles";

// import "./App.css";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
