import * as React from "react"
import {Home} from "./Home";
import {Container} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Person} from "./Person";

export const Root = () => <>
    <Container>
        <BrowserRouter>
            <Switch>
                <Route path="/toni">
                    <Person name="Toni"/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    </Container>
</>;