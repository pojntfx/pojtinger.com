import * as React from "react"
import {Home} from "./Home";
import {Container} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Person} from "./Person";
import {PageLayout} from "./PageLayout";

export const Root = () => <>
    <Container>
        <BrowserRouter>
            <Switch>
                <Route path="/toni">
                    <PageLayout>
                        <Person name="Toni" avatarImage="" contactLink="" followLink="" username=""/>
                    </PageLayout>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    </Container>
</>;