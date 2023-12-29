import react from "react";
import { Component } from "react";
import reactDOM from "react-dom/client";

// function NotificationMsg(props) {
//   switch (props.text) {
//     case "Hi TechWorld":
//       return "Hi TechWorld, Good Evening!!";
//     case "Hello TechWorld":
//       return "Hello TechWorld, Good Morning!!";
//     default:
//       return props.text;
//   }
// }

// function NotificationMsg(props) {
//   switch (props.text) {
//     case "Hi TechWorld":
//       return (<>
//        <p>Hi TechWorld, Good Evening!!</p>
//        <p>I am fine.</p>
//       </>);
//     case "Hello TechWorld":
//       return (<>
//        <p>"Hello TechWorld, Good Morning!!";</p>
//        <Message msg="Well done."/>
//       </>)
//     default:
//       return (<>
//        <p>props.text;</p>
//       </>)
//   }
// }

// function Message({msg})
// {
//   return(<>
//    <div style={{backgroundColor:'green'}}>
//     {msg}
//    </div>
//   </>)
// }

// export function App() {
//   return(<>

//    <NotificationMsg text="Hi TechWorld"/>
//    <br />
//    <NotificationMsg text="Hello TechWorld"/>
//    <br />
//    <NotificationMsg text="Hey TechWorld"/>

//   </>);
// }


//Below are function (function returing jsx) component
// const Wishlist = () => {
//   return (
//     <>
//       <button>Wishlist</button>
//     </>
//   );
// };


// const Buy = () => {
//   return (
//     <>
//       <button>Buy</button>
//     </>
//   );
// };


// const CardList = () => {
//   return (
//     <>
//       <button>CardList</button>
//     </>
//   );
// };


// //ENUM
// const CARD_LIST ={
//  wishlist:<Wishlist/>,
//  buy:<Buy/>,
//  cardlist:<CardList/>
// };

// //Normal function can;t return JSX

// function CardState({cState})
// {
//   return (<>
   
//    <div>
//     {CARD_LIST[cState]}
//    </div>

//   </>)
// }



// export const App = () =>{
 
//   return(<>
  
//    <h1>Product</h1>
//    <CardState cState="wishlist"/>
//    <br />

//    <CardState cState="buy"/>
//    <br />

//    <CardState cState="cardlist"/>
  
//   </>)
// }



// export function App()
// {
//   const people = [
//     {name:"Ajeet"},
//     {name:"Chandan"},
//     {name:"Pawan"},
//     {name:"Samir"},
//   ];

//   return(<>
//    {
//     people.map(val=><p>{val.name}</p>)
//    }
//   </>)
// }

//Key props warning.

// export class App extends Component
// {
//   constructor()
//   {
//     super();
//     this.state={
//       people:[
//         {id:100,name:"Ajeet"},
//         {id:101,name:"Chandan"},
//         {id:102,name:"Pawan"},
//         {id:103,name:"Samir"},
//         {id:104,name:"Pawan"},
//       ]
//     }
    
//   }

//   addMore = () =>{
//     this.setState({
//       people:[
//         {id:100,name:"Ajeet"},
//         {id:101,name:"Chandan"},
//         {id:105,name:"Rama"},
//         {id:102,name:"Pawan"},
//         {id:103,name:"Samir"},
//         {id:104,name:"Pawan"},
//       ]
//     });
//   }
 
//   render()
//   {
//     return(<>
//       {
//       //  this.state.people.map((val,index)=><p key={index}>{val.name}</p>)
      
//       // this.state.people.map((val,index)=>
//       // {
//       //   return <p key={index}> <span> {val.name} </span> </p>
//       // }
//       // )
      
//       this.state.people.map((val,index)=>
//       {
//         return <p key={val.id}> <span> {val.name} </span> </p>
//       }
//       )
      
//       }
   
//      <button type="button" onClick={this.addMore}>Add More</button>   
   
//      </>)
//   }
 
// }







// export class App extends Component
// {
//   constructor()
//   {
//     super();
//     this.state={
//       people:[

//         {id:100,name:"Ajeet",
//         courses:[
//           {name:"REACT JS",type:"Paid"},
//           {name:"JAVASCRIPT",type:"free"}
//         ]},

//          {id:101,name:"Chandan",
//         courses:[
//           {name:"ANGULAR",type:"Paid"},
//           {name:"TYPESCRIPT",type:"free"}
//         ]},

//       ]
//     }
    
//   }

 
//   render()
//   {
//     return(<>
      
//       {
//         this.state.people.map((val)=>{
//           return(
//             <div key={val.id}>
//               <h2>{val.name}</h2>
//               <div>
//                 {
//                   val.courses.map((c,i)=>{
//                     return (
//                       <p key={i}>{c.name} is {c.type}</p>
//                     )
//                   })
//                 }
//               </div>
//             </div>
//           )
//         })
//       }
   
//      </>)
//   }
 
// }




// export function App()
// {
//   const person = {
//     name:"Ajeet",
//     age:29,
//     mobileNo:7894561230 
//   }


//  return(<>
 
//   <div>
//     {
//       Object.keys(person).map((val,indx)=>{
//         return <p key={indx}>{person[val]}</p>
//       })
//     }
//   </div>
  
//  </>)

// }



// export function App()
// {
//   const person = {
//     name:"Ajeet",
//     age:29,
//     mobileNo:7894561230 
//   }

//  return(<>
 
//   <div>
//     {
//       Object.values(person).map((v,i)=>{
//         return <p key={i}>{v}</p>
//       })
//     }
//   </div>
//  </>)

// }


function ListItem({value})
{
  return (
    <li>{value}</li>
  )
}

function NumberList({numbers})
{
  return(
    
    //  <ul>
    //   {
    //     // where we use map, in parent tage we give key
    //     numbers.map(n=>{
    //       return <ListItem key={n} value={n}/>
    //     })
    //   }
    //  </ul>

    //here in shortcut <></> we will not be able to pass key 
    <ul>
      {
        numbers.map(n=>{
          return(<react.Fragment key={n}>
              <ListItem value={n}/>
            </react.Fragment>)
        })
      }
   </ul>
    
  )
}

const nums = [1,2,3,4,5,6,7,8,9,10];

export function App()
{
  return(<>
   
   <NumberList numbers={nums}/>

  </>)
}




