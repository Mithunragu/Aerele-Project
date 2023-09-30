import React from "react";
import Typewriter  from "typewriter-effect";
import axios from "axios";

export function LibraryLogin(){

    function handlelogin(event){
        event.preventDefault()
        var email=document.getElementById("email").value 
        var password =document.getElementById("password").value
        var passkey=document.getElementById("passkey").value

        const  logindetail = {
            email:email,
            password: password,
            passKey:passkey
          }
          if(email===''){
            alert("Enter the Email")
        } else if(password===''){
            alert("Enter The Password")
        }else if(passkey===''){
            alert("Enter The PassKey")
        }
        else{
            axios.post("http://localhost:8080/auth/logins",logindetail)
            .then((res)=>{
                if(res.data.data==="Welcome  Librarian"){
                    alert("✌️Welcome  Librarian✌️")
                    window.location.href='/LibraryHomePage'
                }else{
                    alert("Invalid Librarian")
                }
            })
    }
}

    return(
        <>
        <form onSubmit={handlelogin}>
            <main className="login-bg">
                <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="regCard py-5 container d-flex flex-column align-items-center justify-content-center gap-3">
                        <h2>
                        <Typewriter options={{strings :['Librarian Login Form'],autoStart:true,loop:true}}/>
                        </h2>
                        <input type="email" id="email" placeholder="Enter E-Mail" required/>
                        <input type="password" id="password" placeholder=" Password" required/>
                        <input type="password" id="passkey" placeholder=" Librarian Key" required/>

                        <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                            <button type="submit" className="rounded border-0 w-50">LOGIN</button>
                        </div>
                        <p className="fs-5" ><b> Welcome, Librarian!</b>  </p>
                    </div>
                </div>
            </main>
            </form>
        </>
    );
    }
