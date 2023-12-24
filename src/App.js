import PT from "prop-types";
import { Component } from "react";

//Composing Components

function Welcome(props)
{
 return(
  <>
   <h1>Hello, {props.name}</h1>
  </>
 )
}

export function App()
{ 
  return(<> 
    <Welcome name="Ajeet"/>
    <Welcome name="Chandan"/>
  </>)
}


//Extracting Components

//Generic function for date
function formatDate(date) {
    return date.toLocaleDateString()
}

function Image(props) {
    return (
        <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
            width={props.author.width}
            height={props.author.height}
        />
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo">

            <Image author={props.author} />

            <div className="UserInfo-name">
                {props.author.name}
            </div>

        </div>
    )
}
function Comment(props) {
    return (
        <div className="Comment">

            <UserInfo author={props.author} />

            <div className="Comment-text">{props.text}</div>
            
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>

        </div>
    )
}
const obj = {
    date: new Date(),
    text: 'Enjoying learning React!!',
    author: {
        name: 'Hello,',
        //avatarUrl: 'https://www.sahosoft.com/img/team/1.jpg',
        avatarUrl:'tom-and-jerry.jpg',
        width:'200px',
        height:'200px'

    },
};

export function Bpp() {
    return (
        <Comment
            date={obj.date}
            text={obj.text}
            author={obj.author}
        />
    )
}


// function UserGreeting()
// {
//   return(<>
//    <h1>Welcome Back!!</h1>
//   </>)
// }

// function GuestGreeting()
// {
//   return(<>
//    <h1>Please Sign Up!!</h1>
//   </>)
// }


// function Greeting(props)
// {
//   const {isLoggedIn} = props;
//   if(isLoggedIn)
//   {
//     return <UserGreeting/>
//   }
//   else
//   {
//     return <GuestGreeting/> 
//   }
// }


// export function Cpp()
// {
//   return(
//     // <Greeting isLoggedIn/>
//     <Greeting isLoggedIn={false}/>
//   )
// }



// class Login extends Component
// {
//   constructor()
//   {
//     super();
//     this.state={
//       isLoggedIn:false 
//     }
//   }

//   handleLogin=()=>{
//     this.setState({
//       isLoggedIn:true
//     })
//   }

//   handleLogout=()=>{
//     this.setState({
//       isLoggedIn:false 
//     })
//   }

//   render()
//   {
//     const {isLoggedIn} = this.state;
//     console.log(this.state);
//     if(isLoggedIn)
//       {
//          return(<>
//           <div>
        
//           <AGreeting isLoggedIn={isLoggedIn}/>
       
//           <LogoutButton clickHandle={this.handleLogout}/>
//           </div>
//          </>)
//       }
//     else
//     {
//       return(<>
//         <div>
      
//         <AGreeting isLoggedIn={isLoggedIn}/>
    
//         <LoginButton clickHandle={this.handleLogin}/>
//         </div>
//        </>)
//     }

// }

// }



// function LoginButton(props)
// {
//   return(<>
    
//     <button type="button" onClick={props.clickHandle}>Login</button>

//   </>)
// }

// function LogoutButton(props)
// {
//   return(<>
    
//     <button type="button" onClick={props.clickHandle}>Logout</button>

//   </>)
// }



// function AUserGreeting()
// {
//   return(<>
//    <h1>Welcome Back!!</h1>
//   </>)
// }

// function AGuestGreeting()
// {
//   return(<>
//    <h1>Please Sign Up!!</h1>
//   </>)
// }


// function AGreeting(props)
// {
//   const {isLoggedIn} = props;
//   if(isLoggedIn)
//   {
//     return <AUserGreeting/>
//   }
//   else
//   {
//     return <AGuestGreeting/> 
//   }
// }



//reducing return statement using element variable.

// class Login extends Component
// {
//   constructor()
//   {
//     super();
//     this.state={
//       isLoggedIn:false 
//     }
//   }

//   handleLogin=()=>{
//     this.setState({
//       isLoggedIn:true
//     })
//   }

//   handleLogout=()=>{
//     this.setState({
//       isLoggedIn:false 
//     })
//   }

//   render()
//   {
//     const {isLoggedIn} = this.state;
//     console.log(this.state);
//     let btn;
//     if(isLoggedIn)
//       {
//          btn=(<>
//           <div>
        
//           <AGreeting isLoggedIn={isLoggedIn}/>
       
//           <LogoutButton clickHandle={this.handleLogout}/>
//           </div>
//          </>)
//       }
//     else
//     {
//       btn=(<>
//         <div>
      
//         <AGreeting isLoggedIn={isLoggedIn}/>
    
//         <LoginButton clickHandle={this.handleLogin}/>
//         </div>
//        </>)
//     }
//  return btn;
// }

// }



// function LoginButton(props)
// {
//   return(<>
    
//     <button type="button" onClick={props.clickHandle}>Login</button>

//   </>)
// }

// function LogoutButton(props)
// {
//   return(<>
    
//     <button type="button" onClick={props.clickHandle}>Logout</button>

//   </>)
// }



// function AUserGreeting()
// {
//   return(<>
//    <h1>Welcome Back!!</h1>
//   </>)
// }

// function AGuestGreeting()
// {
//   return(<>
//    <h1>Please Sign Up!!</h1>
//   </>)
// }


// function AGreeting(props)
// {
//   const {isLoggedIn} = props;
//   let ctrl;
//   if(isLoggedIn)
//   {
//     ctrl=<AUserGreeting/>
//   }
//   else
//   {
//     ctrl=<AGuestGreeting/> 
//   }
//   return ctrl;
// }


//ternanry operator

// class Login extends Component
// {
//   constructor()
//   {
//     super();
//     this.state={
//       isLoggedIn:false 
//     }
//   }

//   handleLogin=()=>{
//     this.setState({
//       isLoggedIn:true
//     })
//   }

//   handleLogout=()=>{
//     this.setState({
//       isLoggedIn:false 
//     })
//   }

//   render()
//   {
//     const {isLoggedIn} = this.state;
//     console.log(this.state);
//     let btn;
//     isLoggedIn ?
//          btn=(<>
//           <div>
        
//           <AGreeting isLoggedIn={isLoggedIn}/>
       
//           <LogoutButton clickHandle={this.handleLogout}/>
//           </div>
//          </>)
//       :
//       btn=(<>
//         <div>
      
//         <AGreeting isLoggedIn={isLoggedIn}/>
    
//         <LoginButton clickHandle={this.handleLogin}/>
//         </div>
//        </>)
    
//  return btn;
// }

// }



// function LoginButton(props)
// {
//   return(<>
    
//     <button type="button" onClick={props.clickHandle}>Login</button>

//   </>)
// }

// function LogoutButton(props)
// {
//   return(<>
    
//     <button type="button" onClick={props.clickHandle}>Logout</button>

//   </>)
// }



// function AUserGreeting()
// {
//   return(<>
//    <h1>Welcome Back!!</h1>
//   </>)
// }

// function AGuestGreeting()
// {
//   return(<>
//    <h1>Please Sign Up!!</h1>
//   </>)
// }


// function AGreeting(props)
// {
//   const {isLoggedIn} = props;
//   let ctrl;
//   isLoggedIn ?
//     ctrl=<AUserGreeting/>
//   :
//     ctrl=<AGuestGreeting/> 
//   return ctrl;
// }


// export function Dpp()
// {
//   return(
//     <Login/>
//   )
// }



// export function Epp()
// {
//   return(<>
   
//    {(10>8) && <h1>Hello Vijay!!</h1>}

//    {(10>7 && (1==1)) && <> <h1>Hello Ajeet!!</h1> <p>I am fine</p></>}
  
//    {(10>8) && alert("123")}

//   </>)
// }


function MailBox(props)
{
  const {unreadMsg}=props;
  return(<>
    <h1>My Mail Box</h1>
    
    {/* <h2>You have {unreadMsg.length} unread message </h2> */}

   {unreadMsg.length>0 && <h2>You have {unreadMsg.length} unread message </h2> }

  </>)
}

// const message = ["Mail1","Mail2"];
// const message=[];
const message = ["Mail1","Mail2"];
export function Fpp()
{
  return(<>
   
   <MailBox unreadMsg={message}/>

  </>)
}


// function Warning(props)
// {
//   if(!props.warn)
//   {
//     return null;
//   }

//   return(<>
//    <h1>This is your last warning</h1>
//   </>)
// }

// export function Gpp()
// {
//   return(<>
//    {/* <Warning warn/> */}
   
//    <Warning warn={false}/>

//   </>)
// }


function Warning(props)
{
  if(!props.warn)
  {
    return null;
  }

  return(<>
   <h1>This is your last warning</h1>
  </>)
}

export class Gpp extends Component
{
  constructor()
  {
    super();
    this.state = {
      showWarn:false
    }

  }

  handleToggleWarn = () => {

    this.setState((state)=>
    (  //() because not using return 
      {
       showWarn:!this.state.showWarn
      }
    )
    
    )
  
  }

  render()
  {
    return(<>
      <Warning warn={this.state.showWarn}/>

      <button type="button" onClick={this.handleToggleWarn}>{this.state.showWarn ? 'Hide':'Show'}</button>
    </>)
  }

}