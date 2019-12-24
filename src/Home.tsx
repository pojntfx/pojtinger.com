import * as React from "react"
import {Link} from "react-router-dom"
import {constants} from "./constants";
import styled from "@emotion/styled";
// @ts-ignore
import Icon from "./icon.png"

const HomeIcon = styled.img`
    border-radius: 50%;
    max-width: 10rem;
`;

export const Home = () => <div>
    <h1>Die Hirschkopfbande grüßt alle Besucher!</h1>

    {constants.parents.map((person, index) =>
        <Link to={person.path} key={index}>{person.name}</Link>)}

    <HomeIcon src={Icon}/>

    {constants.children.map((person, index) =>
        <Link to={person.path} key={index}>{person.name}</Link>)}
</div>;