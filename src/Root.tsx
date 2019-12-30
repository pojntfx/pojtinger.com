import * as React from "react";
import { Home } from "./Home";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// @ts-ignore
import imprint from "./Imprint.md";
import SafeHTML from "react-safe-html";
import { constants, PageLayout, Person } from ".";

export const Root = () => (
  <>
    <Container>
      <BrowserRouter>
        <Switch>
          {[...constants.children, ...constants.parents].map(
            (person, index) => (
              <Route path={person.path} key={index}>
                <PageLayout>
                  <Person person={person} />
                </PageLayout>
              </Route>
            )
          )}
          <Route path="/imprint">
            <PageLayout segment>
              <SafeHTML html={imprint} />
            </PageLayout>
          </Route>
          <Route path="/">
            <PageLayout home>
              <Home />
            </PageLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  </>
);
