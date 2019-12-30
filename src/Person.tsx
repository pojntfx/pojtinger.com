import * as React from "react";
import styled from "@emotion/styled";
import { IPerson } from ".";

const HeaderWrapper = styled.div`
  display: flex;
  flex-align: center;
  justify-content: center;
  width: 100%;
`;

const HeaderAvatar = styled.img`
  max-width: 15rem;
  border-radius: 50%;
`;

export const Person = (props: { person: IPerson }) => (
  <>
    <HeaderWrapper>
      <HeaderAvatar src={props.person.avatarLink} />
    </HeaderWrapper>
  </>
);
