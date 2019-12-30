import * as React from "react";
import styled from "@emotion/styled";
import { IPerson } from ".";
import { Grid, Header } from "semantic-ui-react";
import { constants } from "./constants";
import { Button } from ".";

const HeaderWrapper = styled(Grid)`
  width: 100%;
`;

const HeaderAvatar = styled.img`
  width: 15rem;
  max-width: 15rem;
  border-radius: 50%;
`;

const HeaderButton = styled(Button)`
  margin: 0.5rem !important;
`;

export const Person = (props: { person: IPerson }) => (
  <HeaderWrapper columns={3} verticalAlign="middle" stackable>
    <Grid.Row>
      <Grid.Column verticalAlign="middle" textAlign="center">
        <Header
          as="h1"
          content={`${props.person.name} ${constants.familyName}`}
          subheader={props.person.username}
        />
      </Grid.Column>
      <Grid.Column verticalAlign="middle" textAlign="center">
        <HeaderAvatar src={props.person.avatarLink} />
      </Grid.Column>
      <Grid.Column verticalAlign="middle" textAlign="center">
        <HeaderButton
          primary
          as="a"
          href={props.person.followLink}
          icon="add"
          content="Folgen"
          target="_blank"
        />
        <HeaderButton
          as="a"
          href={props.person.emailLink}
          icon="mail"
          content="Anschreiben"
          target="_blank"
        />
      </Grid.Column>
    </Grid.Row>
  </HeaderWrapper>
);
