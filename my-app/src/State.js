import React, { useState } from 'react';


export function CountQueuingStrategy(props) {
    return (Date.toLocalTimeString())
}

var dateobj = new Date();

// time from above date object is 
// being extracted using toLocaleTimeString() 
var B = dateobj.toLocaleTimeString();


export default function Example() {
    // Declare a new state variable, which we'll call "count"
    //  const time = Date.toLocaleTimeString();
    const [count, setCount] = useState(9); // change number in useState for assignment c1
    const [time, setTime] = useState()
    const setStorageCount = localStorage.setItem("count", count);
    const getStorageCount = localStorage.getItem("count") //Returns value as a string
    //let timee = new Date().toLocaleString();

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                1up
      </button>
            <button onClick={() => setCount(count - 1)}>
                1down
      </button>
            <p></p>
        </div>
    );
}

function updateInput(ish) {
    document.getElementById("fieldname").value = ish;
}