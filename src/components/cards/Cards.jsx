import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  DisplayInfo,
  ContainerVacio,
  Welcome,
  Button,
  Pagination,
} from "../style/style.js";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "../nav/Nav.jsx";
import Swal from "sweetalert2";
import AllApplications from "./AllApplications.jsx";

function Cards() {
  const [info, setInfo] = useState("");
  const [filterState, setFilterState] = useState();
  const { user } = useAuth0();

  let [currentPage, setCurrentpage] = useState(1);
  let [appForPage] = useState(5);
  const lastApp = currentPage * appForPage;
  const firstApp = lastApp - appForPage;
  const currentInfo = info.slice(firstApp, lastApp);
  const pageLimit = Math.ceil(info.length / appForPage);

  const prev = () => {
    if (currentPage !== 1) {
      setCurrentpage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage < pageLimit) setCurrentpage(currentPage + 1);
  };

  const getData = async () => {
    const resp = await axios.get(
      `https://jobapplications-backend-production.up.railway.app/applications/${user?.email}`
    );
    setInfo(resp.data);
    setFilterState(resp.data);
  };

  const deleteApplications = async (e) => {
    try {
      await axios.delete(
        `https://jobapplications-backend-production.up.railway.app/delete/${e.target.value}`
      );
      Swal.fire("Job Application Deleted", "success");
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const order = (e) => {
    let result = "";
    e.target.value === "desc"
      ? (result = [...info.sort((a, b) => (a.date < b.date ? 1 : -1))])
      : (result = [...info.sort((a, b) => (a.date > b.date ? 1 : -1))]);

    setInfo(result);
  };

  const filter = async (e) => {
    if (e.target.value === "All") return setInfo(filterState);

    if (e.target.value !== "All") {
      let result = filterState.filter(
        (element) => element.status === e.target.value
      );
      result.length > 0
        ? setInfo(result)
        : Swal.fire("Job applications with this status not found", "info");
    }
  };
  /* console.log(info); */
  useEffect(() => {
    getData();
  }, [getData]);

  return currentInfo?.length !== 0 ? (
    <>
      <Nav order={order} filter={filter} />
      <DisplayInfo>
        {currentInfo?.map((e, i) => {
          return (
            <AllApplications
              key={i}
              company={e.company}
              country={e.country}
              date={e.date}
              modality={e.modality}
              position={e.position}
              status={e.status}
              id={e.id}
              deleteApp={deleteApplications}
              email={user?.email}
            />
          );
        })}
      </DisplayInfo>
      <Pagination>
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </Pagination>
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
