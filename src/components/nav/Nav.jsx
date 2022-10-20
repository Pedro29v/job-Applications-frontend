import React from "react";
import { Navigation, Button, Choose, DivNavButtom } from "../style/style";
import { Link } from "react-router-dom";

function Nav({ order, filter }) {
  return (
    <div>
      <Navigation>
        <DivNavButtom>
          <Link to="/new">
            <Button>New</Button>
          </Link>
          <Link to="/statistics">
            <Button>Statistics</Button>
          </Link>
        </DivNavButtom>

        <DivNavButtom>
          <Button value="asc" onClick={order}>
            Asc
          </Button>
          <Button value="desc" onClick={order}>
            Desc
          </Button>
        </DivNavButtom>

        <Choose onChange={filter}>
          <option value="All">All</option>
          <option value="In process">In process</option>
          <option value="Successful">Successful</option>
          <option value="Rejected">Rejected</option>
        </Choose>
      </Navigation>
    </div>
  );
}

export default Nav;
