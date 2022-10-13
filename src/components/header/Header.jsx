import React from "react";
import { Button, Head, Logo, TitleHead, Wrapper } from "../style/style.js";
import { useAuth0 } from "@auth0/auth0-react";
import perfil from "../../img/perfil.png";

function Nav() {
  const { logout, user } = useAuth0();

  return (
    <Head>
      <Wrapper>
        <Logo src={user?.picture || perfil} alt={user?.name} />
      </Wrapper>

      <Wrapper>
        <TitleHead>Job Applications</TitleHead>
      </Wrapper>

      <Wrapper>
        <Button onClick={logout}>Logout</Button>
      </Wrapper>
    </Head>
  );
}

export default Nav;
