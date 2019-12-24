import * as React from "react"
import {constants} from "./constants";
import styled from "@emotion/styled";
// @ts-ignore
import Icon from "./icon.png"
import {PersonLink} from "./PersonLink";

const HomeIcon = styled.img`
    border-radius: 50%;
    max-width: 20rem;
`;

export const Home = () => <div>
    <h1>Die Hirschkopfbande grüßt alle Besucher!</h1>

    {constants.parents.map((person, index) =>
        <PersonLink person={person} key={index}/>)}

    <HomeIcon src={Icon}/>

    {constants.children.map((person, index) =>
        <PersonLink person={person} key={index}/>)}
</div>;