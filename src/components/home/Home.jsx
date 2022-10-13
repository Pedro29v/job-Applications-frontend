import React from "react";
import Header from "../header/Header";
import Cards from "../cards/Cards";
import Footer from "../footer/Footer";
import { Pinwheel } from "@uiball/loaders";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Loader } from "../style/style.js";

function Home() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Container>
      <Header />
      <Cards />
      <Footer />
    </Container>
  ) : (
    <Loader>
      <Pinwheel size={45} color="#231F20" />
    </Loader>
  );
}

export default Home;
