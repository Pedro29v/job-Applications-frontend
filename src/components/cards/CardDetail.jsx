import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  DetailCard,
  TitleName,
  Block,
  DivStatusDetail,
  SpanBlue,
  SpanGreen,
  SpanRed,
  UpdateButton,
} from "../style/style.js";

function CardDetail({
  id,
  company,
  position,
  date,
  country,
  modality,
  status,
  email,
  getDataDetail,
}) {
  const changeStatus = async (e) => {
    try {
      const status = { name: "" };
      e.target.value === "In process" && (status.name = "Successful");
      e.target.value === "Successful" && (status.name = "Rejected");
      e.target.value === "Rejected" && (status.name = "In process");

      await axios.put(
        `https://jobapplications-backend-production.up.railway.app/edit/${e.target.name}`,
        status
      );
      getDataDetail(id, email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DetailCard>
      <Block>
        <TitleName>COMPANY</TitleName>
        {company}
      </Block>
      <Block>
        <TitleName>POSITION</TitleName>
        {position}
      </Block>
      <Block>
        <TitleName>DATE</TitleName>
        {date}
      </Block>
      <Block>
        <TitleName>COUNTRY</TitleName>
        {country}
      </Block>
      <Block>
        <TitleName>MODALITY</TitleName>
        {modality}
      </Block>
      <DivStatusDetail>
        <TitleName>STATUS</TitleName>
        {status === "In process" ? (
          <Link to={`/detail/${id}`} className="style">
            <SpanBlue>{status}</SpanBlue>
          </Link>
        ) : status === "Rejected" ? (
          <Link to={`/detail/${id}`} className="style">
            <SpanRed>{status}</SpanRed>
          </Link>
        ) : (
          <Link to={`/detail/${id}`} className="style">
            <SpanGreen>{status}</SpanGreen>
          </Link>
        )}
      </DivStatusDetail>
      <UpdateButton onClick={changeStatus} value={status} name={id}>
        Change Status
      </UpdateButton>
    </DetailCard>
  );
}

export default CardDetail;
