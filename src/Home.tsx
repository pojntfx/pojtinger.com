import styled from "@emotion/styled";
// @ts-ignore
import Icon from "../icon.png";
import constants from "./constants.json";
import { PersonLink } from "./PersonLink";

const HomeIcon = styled.img`
  shape-outside: circle(50%);
  width: 30vw;
  max-width: 20rem;
`;

const PersonSelector = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PersonEdge = styled.div<{ right?: boolean }>`
  & > * > * > *:first-child {
    transition: all 0.2s ease-in-out 0s;

    &:hover,
    &:active {
      transform: scale(1.05);
      box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px,
        rgba(34, 36, 38, 0.15) 0px 2px 10px 0px !important;
    }
    &:active {
      transform: scale(1);
    }
  }
  &:first-child > * {
    margin-right: -1rem;
    margin-bottom: 1rem;
  }
  &:last-child {
    > *:first-child,
    > *:last-child {
      margin-left: -2.5rem;
    }
  }
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: ${(props: any) => (props.right ? "flex-start" : "flex-end")};
`;

const Heading = styled.h1`
  text-align: center;
`;

export const Home = () => (
  <div>
    <Heading className="freestanding">Welcome to the Hirschkopfbande!</Heading>

    <PersonSelector>
      <PersonEdge>
        {constants.parents.map((person, index) => (
          <PersonLink person={person} key={index} />
        ))}
      </PersonEdge>

      <HomeIcon src={Icon} />

      <PersonEdge right>
        {constants.children.map((person, index) => (
          <PersonLink person={person} key={index} />
        ))}
      </PersonEdge>
    </PersonSelector>
  </div>
);
