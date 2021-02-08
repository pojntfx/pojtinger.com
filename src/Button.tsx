import styled from "@emotion/styled";
import { Button } from "semantic-ui-react";

export const PageButton = styled(Button)`
  white-space: nowrap;
  transition: all 0.2s ease-in-out 0s !important;
  &:hover,
  &:active {
    transform: scale(1.05);
    & > * > *:first-of-type {
      box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px,
        rgba(34, 36, 38, 0.15) 0px 2px 10px 0px !important;
    }
  }
  &:active {
    transform: scale(1);
  }
`;
