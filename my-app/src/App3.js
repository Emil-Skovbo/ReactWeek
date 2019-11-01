import React from "react";
import propTypes from 'prop-types';
import { names } from "./file2"

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export function WelcomePerson(props) {
    const { firstName, lastName, email } = props.person
    console.log("dskgfsdksd", props)
    return <h1>Hello,{firstName} {lastName} {email}</h1>;

}

export default function App3() {
    return (
        <div>
            <Welcome name="Sarah" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <Welcome />
            <Welcome name={45} />
            <WelcomePerson person={names[0]} />
            <WelcomePerson person={names[1]} />
            <WelcomePerson person={names[2]} />
        </div>

    );
}

Welcome.propTypes = {
    name: propTypes.string,
    name: propTypes.any.isRequired
};


