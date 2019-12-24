import * as React from "react"
import {Link} from "react-router-dom"
import {constants} from "./constants";

export const Home = () => <div>
    <h1>Die Hirschkopfbande grüßt alle Besucher!</h1>

    {constants.people.map((person, index) =>
        <Link to={person.path} key={index}>{person.name}</Link>)}
</div>;