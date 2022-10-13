import React from "react";
import {
  Container,
  Header,
  Title,
  Description,
  Main,
  Section,
  Block,
  SendButton,
  IMG,
  Slogan,
} from "../style/style.js";
import portada from "../../img/portada.svg";
import { useAuth0 } from "@auth0/auth0-react";

function Landing() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container>
      <Header>
        <Title>JOB APPLICATIONS</Title>
      </Header>
      <Description>
        <Block>
          <p>We help you to remember all the times you applied for a job.</p>{" "}
          <br />
          <p>
            In Job Applications you can keep tracking of your applications and
            see the status of each one.
          </p>
        </Block>
      </Description>
      <Main>
        <Section>
          <IMG src={portada}></IMG>
        </Section>

        <Section>
          <Block>
            <SendButton onClick={() => loginWithRedirect()}>LOGIN</SendButton>
            <Slogan>Be more organized when applying for a job.</Slogan>
          </Block>
        </Section>
      </Main>
    </Container>
  );
}

export default Landing;
