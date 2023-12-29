import react from "react";
import { Component } from "react";
import reactDOM from "react-dom/client";
import { App } from "./app";

class AIndex extends Component
{
    render()
    {
        return(<>
         
         <App/>

        </>)
    }
}

const aroot = reactDOM.createRoot(document.getElementById("root"));
aroot.render(<AIndex/>);


