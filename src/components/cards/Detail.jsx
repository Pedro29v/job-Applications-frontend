import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import CardDetail from "./CardDetail";
import {
  DetailSection,
  ContentButtonBack,
  Button,
  ContentDetailCard,
} from "../style/style.js";

function Detail() {
  const location = useLocation();
  const { id, email } = location.state;

  const [card, SetCard] = useState();

  const getDataDetail = async (userId, userEmail) => {
    const resp = await axios.get(
      `http://localhost:3001/detail/${userEmail}?id=${userId}`
    );
    SetCard(resp.data);
  };

  useEffect(() => {
    getDataDetail(id, email);
  }, [id, email]);

  return (
    <div>
      <Header />
      <DetailSection>
        <ContentButtonBack>
          <Link to="/home" className="style">
            <Button>Home</Button>
          </Link>
        </ContentButtonBack>
        <ContentDetailCard>
          {card?.map((e, i) => {
            return (
              <CardDetail
                key={i}
                id={e.id}
                company={e.company}
                position={e.position}
                date={e.date}
                country={e.country}
                modality={e.modality}
                status={e.status}
                getDataDetail={getDataDetail}
                email={email}
              />
            );
          })}
        </ContentDetailCard>
      </DetailSection>
    </div>
  );
}

export default Detail;
