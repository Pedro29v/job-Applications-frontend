import React from "react";
import Header from "../header/Header";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Navigation, Button } from "../style/style";
import { Link } from "react-router-dom";
import {
  Formu,
  Input,
  Block,
  Options,
  SubmitButton,
  Container,
  ErrorMessage,
  Division,
  Section,
} from "../style/style";

function NewJobAppli() {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const customSubmit = async (data) => {
    const allData = {
      company: data.company,
      position: data.position,
      date: data.date,
      country: data.country,
      modality: data.modality,
      status: data.status,
      userEmail: user?.email,
    };
    try {
      await axios.post("http://localhost:3001/newAppli", allData);
      Swal.fire("New Job Applications", "success", "success");
      navigate("/home");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Container>
      <Header />
      <Division>
        <Section>
          <Navigation>
            <Link to="/home">
              <Button>Home</Button>
            </Link>
          </Navigation>
        </Section>
        <Section>
          <Formu onSubmit={handleSubmit(customSubmit)}>
            <Block>
              <label>Company</label>
              <Input
                type="text"
                {...register("company", { required: true, maxLength: 35 })}
              />
              {errors.company?.type === "required" && (
                <ErrorMessage>the field can not be empty</ErrorMessage>
              )}
              {errors.company?.type === "maxLength" && (
                <ErrorMessage>35 characters only</ErrorMessage>
              )}
            </Block>

            <Block>
              <label>Position</label>
              <Input
                type="text"
                {...register("position", { required: true, maxLength: 35 })}
              />
              {errors.position?.type === "required" && (
                <ErrorMessage>the field can not be empty</ErrorMessage>
              )}
              {errors.position?.type === "maxLength" && (
                <ErrorMessage>35 characters only</ErrorMessage>
              )}
            </Block>

            <Block>
              <label>Date</label>
              <Input type="date" {...register("date", { required: true })} />
              {errors.date?.type === "required" && (
                <ErrorMessage>the field can not be empty</ErrorMessage>
              )}
            </Block>

            <Block>
              <label>Country</label>
              <Input
                type="text"
                {...register("country", { required: true, maxLength: 35 })}
              />
              {errors.country?.type === "required" && (
                <ErrorMessage>the field can not be empty</ErrorMessage>
              )}
              {errors.country?.type === "maxLength" && (
                <ErrorMessage>35 characters only</ErrorMessage>
              )}
            </Block>

            <Block>
              <label>Modality</label>
              <Options defaultValue="Remote" {...register("modality")}>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </Options>
            </Block>

            <Block>
              <label>status</label>
              <Options defaultValue="In process" {...register("status")}>
                <option value="In process">In process</option>
                <option value="Successful">Successful</option>
                <option value="Rejected">Rejected</option>
              </Options>
            </Block>

            <Block>
              <SubmitButton>Submit</SubmitButton>
            </Block>
          </Formu>
        </Section>
      </Division>
    </Container>
  );
}

export default NewJobAppli;
