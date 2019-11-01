import React, { useState } from "react";

const NameForm = () => {
    const initialState = { name: "" };
    const [name, setName] = useState(initialState);
    const handleChange = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        //  name[id] = value;
        setName({ ...name, [id]: value })
    }
    function handleSubmit(event) {
        window.alert('A Name was submitted: ' + JSON.stringify(name));
        //  event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <label>
                    Name:
          <input id="name" type="text" value={name.name} />
                </label>
                <button >Submit</button>
            </form>
            <p>{JSON.stringify(name)}</p>
        </div>
    );
};

export default function FormDemo() {
    return (
        <div style={{ marginTop: 25 }}>
            <NameForm />
        </div>
    );
}
