import * as React from "react"
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom"
import styled from "@emotion/styled";

const Wrapper = styled.div`
    padding-top: 1rem;
`;

const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > *:last-child {
        margin-right: 0;
    }
`;

export const PageLayout = (props: any) => <Wrapper>
    <Navbar>
        <Button as={Link} to="/" icon="caret left" content="Back"/>
        <Button as="a" href="https://nx904.your-storageshare.de/" icon="unlock" content="Login"/>
    </Navbar>
    {props.children && props.children}
</Wrapper>;