import * as React from "react"

export const Person = (props: { name: string, username: string, avatarImage: string, followLink: string, contactLink: string }) =>
    <>
        <h1>{props.name}</h1>
    </>;