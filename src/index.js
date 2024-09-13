import React from "react";
import  * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./App.jsx";    

const root =ReactDOMClient.createRoot(document.getElementById("root"))
root.render(<App></App>);