import * as React from "react";
import { Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";

const Wrapper = styled.div`
  min-height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InnerWrapper = styled.div`
  flex-grow: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props: any) =>
    props.home ? "flex-end" : "space-between"};
  > *:last-child {
    margin-right: 0;
  }
`;

const SegmentWrapper = styled(Segment)`
  width: 100%;
  min-height: 100%;
  flex-grow: 1;
`;

export const PageLayout = (props: {
  children: JSX.Element | JSX.Element[];
  home?: boolean;
  segment?: boolean;
}) => (
  <Wrapper>
    <Global
      styles={css`
        #root {
          height: 100vh;
          overflow-y: auto;
          background: rgba(255, 255, 255, 0.9);
          > .container {
            height: 100%;
          }
        }
        body {
          background-image: url(https://source.unsplash.com/random?forest=) !important;
          background-position: 50% !important;
          background-attachment: fixed !important;
          background-repeat: no-repeat !important;
          background-size: cover !important;

          a,
          a:hover {
            color: #16ab39;
            transition: all 0.2s ease-in-out 0s;
            &:hover {
              color: #1ac743;
              cursor: pointer;
            }
          }
        }
      `}
    />
    <MenuBar home={props.home}>
      {!props.home && (
        <Button
          color="green"
          as={Link}
          to="/"
          icon="arrow left"
          content="Back"
        />
      )}
      <Button
        color="green"
        as="a"
        href="https://nx904.your-storageshare.de/"
        icon="unlock"
        content="Login"
      />
    </MenuBar>
    <InnerWrapper>
      {props.segment ? (
        <SegmentWrapper>{props.children && props.children}</SegmentWrapper>
      ) : (
        props.children && props.children
      )}
    </InnerWrapper>
    <MenuBar>
      <Button
        color="green"
        as="a"
        href="https://github.com/pojntfx/family-site/"
        content="© 2019 Felicitas Pojtinger"
      />
      <Button
        color="green"
        as={Link}
        to="/imprint"
        icon="legal"
        content="Impressum"
      />
    </MenuBar>
  </Wrapper>
);
