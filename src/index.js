import { Component } from "react";
import ReactDOM from "react-dom/client";
import {App,Bpp,Cpp,Dpp,Epp,Fpp,Gpp} from "./app";


// function AIndex()
// {
//   return(
//    <>
//        <App/>

//        <br/>
       
//        <Bpp/>
//    </>
//   )
// }

// const aroot = ReactDOM.createRoot(document.getElementById("root"));
// aroot.render(<AIndex/>);



// function Watch()
// {
//   const element = (
//     <div>
//       <h2>Hello, Team</h2>
//       <h3>It's {new Date().toLocaleTimeString()}</h3>
//     </div>
//   )

//   const broot = ReactDOM.createRoot(document.getElementById("root"));
//   broot.render(element);

// }

// setInterval(Watch,1000);


//React conditional rendering


function BIndex()
{
  return(
   <>
     {/* <Cpp/> */}
     
     {/* <Dpp/> */}

     {/* <Epp/> */}
   
     {/* <Fpp/> */}

     <Gpp/>
   </>
  )
}

const broot = ReactDOM.createRoot(document.getElementById("root"));
broot.render(<BIndex/>);










