import React from "react";

import {
  Info,
  Block,
  Strong,
  UpdateButton,
  DeleteDiv,
  DeleteButton,
  DivStatus,
  SpanBlue,
  SpanGreen,
  SpanRed,
} from "../style/style.js";

function Card({
  company,
  country,
  date,
  modality,
  position,
  status,
  id,
  deleteApp,
  changeStatus,
}) {
  return (
    <div>
      <Info>
        <DeleteDiv>
          <DeleteButton onClick={deleteApp} value={id}>
            X
          </DeleteButton>
        </DeleteDiv>
        <Block>
          <Strong>COMPANY:</Strong> {company}
        </Block>
        <Block>
          <Strong>POSITION:</Strong> {position}
        </Block>
        <Block>
          <Strong>DATE:</Strong> {date}
        </Block>
        <Block>
          <Strong>COUNTRY:</Strong> {country}
        </Block>
        <Block>
          <Strong>MODALITY:</Strong> {modality}
        </Block>

        {status === "In process" ? (
          <DivStatus>
            <Strong>STATUS:</Strong>
            <SpanBlue>{status}</SpanBlue>
          </DivStatus>
        ) : status === "Rejected" ? (
          <DivStatus>
            <Strong>STATUS:</Strong>
            <SpanRed>{status}</SpanRed>
          </DivStatus>
        ) : (
          <DivStatus>
            <Strong>STATUS:</Strong>
            <SpanGreen>{status}</SpanGreen>
          </DivStatus>
        )}

        <UpdateButton onClick={changeStatus} value={status} name={id}>
          Update Status
        </UpdateButton>
      </Info>
    </div>
  );
}

export default Card;
