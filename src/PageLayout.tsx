import { Button, ButtonGroup, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
// @ts-ignore
import Bg from "../bg.webp";

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

const MenuBar = styled.div<{ home?: boolean }>`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: ${(props: any) =>
    props.home ? "flex-end" : "space-between"};
  > *:last-child {
    margin-right: 0;
  }
  > * {
    margin: 0.5rem !important;
  }
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
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
          backdrop-filter: blur(7.5px);
          background: rgba(255, 255, 255, 0.8);
          @media (prefers-color-scheme: dark) {
            background: rgba(0, 0, 0, 0.8);

            .freestanding {
              color: #fff;

              .sub.header {
                color: rgb(255 255 255 / 80%);
              }
            }
          }
          > .container {
            height: 100%;
          }
        }
        body {
          background-image: url(${Bg}) !important;
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
        href="https://cloud.pojtinger.com/"
        icon="server"
        content="Hirschkopf-Cloud"
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
        href="https://github.com/pojntfx/pojtinger.com#license"
        content="© 2024 Felicitas Pojtinger and contributors (AGPL-3.0)"
        target="_blank"
      />

      <ButtonGroup color="green">
        <Button
          as="a"
          href="https://github.com/pojntfx/pojtinger.com/"
          icon="code"
          content="Code"
          target="_blank"
        />

        <Button
          as="a"
          href="https://felicitas.pojtinger.com/imprint"
          icon="legal"
          content="Imprint"
          target="_blank"
        />

        <Button
          as="a"
          href="https://felicitas.pojtinger.com/privacy/static"
          icon="shield"
          content="Privacy"
          target="_blank"
        />
      </ButtonGroup>
    </MenuBar>
  </Wrapper>
);
