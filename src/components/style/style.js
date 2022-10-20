import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--secondary-color);
  color: white;
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 1rem;

  @media screen and (max-width: 480px) {
    padding: 0;
    padding-top: 1rem;
  }
`;

export const Title = styled.h1`
  font-family: "Righteous", cursive;
  font-size: 1.8em;
  color: var(--primary-color);
`;

export const Description = styled.section`
  width: 100%;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;

  @media screen and (max-width: 480px) {
    width: 70%;
    margin: auto;
    margin-top: 2rem;
    padding: 0;
    text-align: center;
    line-height: 1.3rem;
  }

  @media screen and (min-width: 480px) and (max-width: 780px) {
    margin-top: 0rem;
  }
`;

export const Main = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 3rem;

  @media screen and (max-width: 480px) {
    margin-top: 4rem;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 480px) and (max-width: 780px) {
    margin-top: 1rem;
  }
`;

export const Section = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 1rem;

  @media screen and (max-width: 480px) {
    margin-top: 4rem;
    width: 80%;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const SendButton = styled.button`
  width: 7rem;
  padding: 14px;
  background-color: var(--primary-color);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 1px;
  margin-top: 5rem;

  @media screen and (max-width: 480px) {
    margin-top: 1rem;
  }

  &:hover {
    box-shadow: 0px 2px 5px black;
    transition: box-shadow 0.5s;
    border-radius: 3px;
  }
`;

export const SubTitle = styled.div`
  width: 10rem;
  padding: 0.3rem;
  border-radius: 3px;
  text-align: center;
  font-size: 2em;
  font-family: "Righteous", cursive;
`;

export const IMG = styled.img`
  width: 80%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 7rem;
  padding: 14px;
  background-color: var(--primary-color);
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  margin-right: 1rem;

  &:hover {
    box-shadow: 0px 2px 5px black;
    transition: box-shadow 0.5s;
    border-radius: 3px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Head = styled.div`
  background-color: var(--primary-color);
  color: #fff;
  width: 100%;
  height: 72px;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleHead = styled.h1`
  font-family: "Righteous", cursive;
  font-size: 1.8em;
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Name = styled.div`
  width: auto;
  padding: 1rem;
  font-size: 1em;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  width: 80%;
  margin: auto;
  margin-top: 1rem;
  height: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    padding: 0rem;
    height: auto;
  }
`;

export const Formu = styled.form`
  width: auto;
  padding: 1rem;
  color: #fff;
  margin: auto;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 15rem;
  padding: 0.5rem;
  border-radius: 3px;
  border: none;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Options = styled.select`
  width: 15.7rem;
  padding: 0.5rem;
  border-radius: 3px;
  border: none;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const SubmitButton = styled(Button)`
  width: 15.5rem;
  padding: 0.6rem;
  margin: auto;
  margin-top: 0.8rem;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.small`
  margin-top: 0.3rem;
  color: #fff;
  font-weight: normal;
`;

export const Division = styled(Main)`
  margin-top: 0rem;
`;

export const DisplayInfo = styled.div`
  width: 70%;
  min-height: 50vh;
  margin: auto;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0rem;
    padding-bottom: 1rem;
    margin-top: 2rem;
  }
`;

export const Info = styled.div`
  width: 15rem;
  padding: 0.5rem;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin: auto;

  &:hover {
    box-shadow: 1px 10px 20px black;
    transition: box-shadow 0.5s;
    border-radius: 3px;
  }
`;

export const Strong = styled.strong`
  font-weight: bold;
  color: #c3fcf2;
  padding: 0.2rem;
`;

export const UpdateButton = styled(Button)`
  width: 80%;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  background-color: #2f4858;

  &:hover {
    box-shadow: none;
    background-color: #fff;
    color: var(--secondary-color);
    transition: background 0.5s;
    border-radius: 3px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const DeleteDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const DeleteButton = styled(Button)`
  width: 5rem;
  background-color: var(--secondary-color);
  color: #fff;
  margin-right: 0px;
  padding: 3px;

  &:hover {
    box-shadow: none;
    background-color: #fff;
    color: var(--secondary-color);
    transition: background 0.5s;
    border-radius: 3px;
  }
`;

export const DivStatus = styled(Block)`
  width: 100%;
  margin: auto;
  margin-top: 0.5rem;
  background-color: var(--secondary-color);
  font-size: 1em;
  font-weight: bold;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const SpanBlue = styled.span`
  color: #009ff5;
`;
export const SpanGreen = styled.span`
  color: #00c099;
`;
export const SpanRed = styled.span`
  color: #ea9a27;
`;

export const Foot = styled.footer`
  width: 100%;
  height: 3rem;
  paddin: 1rem;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

export const Loader = styled.div`
  width: 10%;
  margin: auto;
  margin-top: 18rem;
  display: flex;
  justify-content: center;
`;

const rotatingText = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
 
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
    
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const ContainerVacio = styled(DisplayInfo)`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Welcome = styled.p`
  animation: ${rotatingText} 3s linear infinite;
  font-size: 1.5em;
`;

export const Slogan = styled.p`
  margin-top: 3rem;
  font-size: 0.8rem;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const Choose = styled(Options)`
  width: 9rem;
  background-color: var(--primary-color);
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin: auto;
    margin-top: 1rem;
  }
`;

/* TODAS LAS APLICACIONES  DE TRABAJO */

export const CardAplication = styled.div`
  width: 70%;
  height: auto;
  padding: 0.5rem;
  background-color: var(--secondary-color);
  margin: auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 3px;

  &:hover {
    box-shadow: 2px 2px 15px 1px #000;
    transition: all 0.8s ease-out;
  }
`;

export const Separator = styled.div`
  width: 98.5%;
  padding: 0.3rem;
`;

export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextInfo = styled.div`
  font-size: 0.9em;
`;

export const DetailSection = styled(Main)`
  width: 65%;
  height: 70vh;
  margin: auto;
  margin-top: 4rem;

  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const ContentButtonBack = styled.div`
  width: 30%;
  heigtht: 100%;
  display: flex;
  padding-top: 3rem;
  justify-content: end;
`;

export const ContentDetailCard = styled.div`
  width: 70%;
  heigtht: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DetailCard = styled(CardAplication)`
  background-color: var(--primary-color);
  color: #fff;
  width: 40%;
  height: auto;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem;

  &:hover {
    box-shadow: none;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    margin-top: 4rem;
  }
`;

export const TitleName = styled.p`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
export const DivStatusDetail = styled(DivStatus)`
  background-color: var(--secondary-color);
`;

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 7rem;
`;

export const Graphs = styled.div`
  width: 70%;
  background-color: #fff;
  margin: auto;
  display: flex;
  justify-content: center;
  border-radius: 5px;

  @media screen and (max-width: 480px) {
    margin-top: 4rem;
    width: 100%;
    height: 200px;
    padding-top: 1.5rem;
  }
`;

export const ContainerGraph = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const DivisionButton = styled(Navigation)`
  width: 50%;
`;

export const DivNavButtom = styled.div`
  @media screen and (max-width: 480px) {
    padding: 0.5rem;
  }
`;
