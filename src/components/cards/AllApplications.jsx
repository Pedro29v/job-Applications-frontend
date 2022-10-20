import React from "react";
import { Link } from "react-router-dom";
import {
  CardAplication,
  Separator,
  FirstLine,
  DeleteButton,
  TextInfo,
  SpanBlue,
  SpanGreen,
  SpanRed,
  DivStatus,
} from "../style/style.js";

function AllApplications({
  company,
  country,
  date,
  position,
  status,
  id,
  deleteApp,
  email,
}) {
  return (
    <CardAplication>
      <Separator>
        <FirstLine>
          <Link to={`/detail/${id}`} state={{ id, email }} className="style">
            <div>
              {company} - {country}
            </div>
          </Link>
          <div>
            <DeleteButton onClick={deleteApp} value={id}>
              Remove
            </DeleteButton>
          </div>
        </FirstLine>
      </Separator>
      <Separator>
        <TextInfo>{date}</TextInfo>
      </Separator>
      <Separator>
        <TextInfo>{position}</TextInfo>
      </Separator>
      <Separator>
        {status === "In process" ? (
          <DivStatus>
            <Link to={`/detail/${id}`} state={{ id, email }} className="style">
              <SpanBlue>{status}</SpanBlue>
            </Link>
          </DivStatus>
        ) : status === "Rejected" ? (
          <DivStatus>
            <Link to={`/detail/${id}`} state={{ id, email }} className="style">
              <SpanRed>{status}</SpanRed>
            </Link>
          </DivStatus>
        ) : (
          <DivStatus>
            <Link to={`/detail/${id}`} state={{ id, email }} className="style">
              <SpanGreen>{status}</SpanGreen>
            </Link>
          </DivStatus>
        )}
      </Separator>
      <hr></hr>
    </CardAplication>
  );
}

export default AllApplications;
