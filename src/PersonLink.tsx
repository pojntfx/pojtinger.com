import * as React from "react"
import {Person} from "./constants";
import {Link} from "react-router-dom"
import styled from "@emotion/styled";

const PersonLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
`;

const PersonAvatar = styled.img`
    width: 5rem;
    border-radius: 50%;
`;

const PersonName = styled.div`
    font-size: 1.6rem;
    padding-left: 1rem;
`;

export const PersonLink = (props: { person: Person }) => props.person.remoteLink ?
    <a href={props.person.remoteLink} target="_blank">
        <PersonLinkWrapper>
            <PersonAvatar src={props.person.avatarLink}/>
            <PersonName>{props.person.name}</PersonName>
        </PersonLinkWrapper>
    </a> :
    <Link to={props.person.path}>
        <PersonLinkWrapper>
            <PersonAvatar src={props.person.avatarLink}/>
            <PersonName>{props.person.name}</PersonName>
        </PersonLinkWrapper>
    </Link>;
