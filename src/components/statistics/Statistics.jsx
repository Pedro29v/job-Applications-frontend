import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import {
  Graphs,
  Button,
  ContainerGraph,
  DivisionButton,
} from "../style/style.js";
import Header from "../header/Header";

function Statistics() {
  const [info, setInfo] = useState();
  const { user } = useAuth0();

  useEffect(() => {
    const allInfo = async () => {
      const resp = await axios.get(
        `https://jobapplications-backend-production.up.railway.app//applications/${user?.email}`
      );

      return setInfo(resp.data);
    };
    allInfo();
  }, [user?.email]);

  let inProcess = 0;
  let rejected = 0;
  let success = 0;

  info?.map((e) => {
    return e.status === "In process"
      ? inProcess++
      : e.status === "Rejected"
      ? rejected++
      : success++;
  });

  console.log("en proceso", inProcess);
  console.log("rechazado", rejected);
  console.log("exito", success);

  const data = {
    series: [inProcess, success, rejected],
    chart: {
      type: "donut",
    },
  };

  return (
    <>
      <Header />
      <ContainerGraph>
        <DivisionButton>
          <Link to="/home">
            <Button>Home</Button>
          </Link>
        </DivisionButton>

        <Graphs>
          <Chart
            options={{
              labels: ["In Process", "Success", "Rejected"],
            }}
            series={data.series}
            type="donut"
            width="100%"
            height="100%"
          />
        </Graphs>
      </ContainerGraph>
    </>
  );
}

export default Statistics;
