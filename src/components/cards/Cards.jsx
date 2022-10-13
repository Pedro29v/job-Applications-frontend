import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import { DisplayInfo, ContainerVacio, Welcome } from "../style/style.js";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "../nav/Nav.jsx";
import Swal from "sweetalert2";

function Cards() {
  const [info, setInfo] = useState("");
  const { user } = useAuth0();

  const getData = async (orderInfo = "DESC") => {
    const resp = await axios.get(
      `http://localhost:3001/applications/${user?.email}?inf=${orderInfo}`
    );
    setInfo(resp.data);
  };

  const deleteApplications = async (e) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${e.target.value}`);
      Swal.fire("Job Application Deleted", "Deleted", "success");
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const order = (e) => {
    let orderInfo = "";

    e.target.value === "desc" ? (orderInfo = "DESC") : (orderInfo = "ASC");

    getData(orderInfo);
  };

  const changeStatus = async (e) => {
    try {
      const status = { name: "" };
      e.target.value === "In process" && (status.name = "Successful");
      e.target.value === "Successful" && (status.name = "Rejected");
      e.target.value === "Rejected" && (status.name = "In process");

      await axios.put(`http://localhost:3001/edit/${e.target.name}`, status);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const filter = async (e) => {
    let response = "";
    console.log(e.target.value);
    e.target.value === "All"
      ? getData()
      : (response = await axios.get(
          `http://localhost:3001/filter/${user?.email}?filtro=${e.target.value}`
        ));
    setInfo(response.data);
  };
  /* console.log(info); */
  useEffect(() => {
    getData();
  }, []);

  return info?.length !== 0 ? (
    <>
      <Nav order={order} filter={filter} />
      <DisplayInfo>
        {info?.map((e, i) => {
          return (
            <Card
              key={i}
              company={e.company}
              country={e.country}
              date={e.date}
              modality={e.modality}
              position={e.position}
              status={e.status}
              id={e.id}
              deleteApp={deleteApplications}
              changeStatus={changeStatus}
            />
          );
        })}
      </DisplayInfo>
    </>
  ) : (
    <>
      <Nav order={order} />
      <ContainerVacio>
        <Welcome>Welcome to Job Applications {user.name}</Welcome>
      </ContainerVacio>
    </>
  );
}

export default Cards;
