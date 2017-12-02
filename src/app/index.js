import React from 'react';
import { render } from "react-dom";
import App from "./Components/App.js"

//Here we could call an App that would return a JSON Object with all the messages.
const fakeMessages = [
    {
        message: "This is a public message message.",
    },
    {
        message: "This is a private message you can access",
        messageKey: 1234
    },
    {
        message: "This is a private message you can't access",
        messageKey: 4321
    }
]



render(<App userId={1234} initialMsgs={fakeMessages} />, window.document.getElementById('app'));

