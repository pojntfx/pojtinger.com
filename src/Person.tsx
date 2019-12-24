import * as React from "react"
import {Segment} from "semantic-ui-react";

export const Person = (props: { name: string, username: string, avatarImage: string, followLink: string, contactLink: string }) =>
    <Segment>
        <h1>{props.name}</h1>
    </Segment>;