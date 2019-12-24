import * as React from "react"
import {Segment} from "semantic-ui-react";

export const Person = ({name}: { name: string }) => <Segment>
    <h1>{name}</h1>
</Segment>;