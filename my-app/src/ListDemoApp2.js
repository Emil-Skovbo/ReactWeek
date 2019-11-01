import React, { useState } from "react";

// kom ikke så langt
function MemberTable({ members }) {
    return (
        <table>
            <thead>members[1]</thead>
            <tbody>{members}</tbody>
        </table>
    );
}

function MemberDemo(props) {
    return (
        <div>
            <h4>All Members</h4>
            <h1>test</h1>
            <MemberTable members={props.name} />
        </div>
    );
}

export default function App() {
    const initialMembers = [{ name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }];
    const [members, setMembers] = useState(initialMembers)

    return (<MemberDemo members={members} />);
}
