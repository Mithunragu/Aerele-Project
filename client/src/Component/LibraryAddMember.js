import React from "react";
import Typewriter  from "typewriter-effect";
import axios from "axios";
import { Link } from "react-router-dom";


export function LibraryAddMember(){

    function handlemember(event){
        event.preventDefault()

        var firstname=document.getElementById("firstname").value
        var lastname=document.getElementById("lastname").value
        var age=document.getElementById("age").value
        var email=document.getElementById("email").value
        var phoneNumber=document.getElementById("phoneNumber").value

        var addmemberdetails = {
            fName: firstname,
            lName: lastname,
            age: age,
            email: email,
            phoneNumber: phoneNumber,
        }

        if (firstname===''){
            alert("Enter The Fields")
        } else {
            axios.post("http://localhost:8080/auth/insert", addmemberdetails)
                .then((res) => {
                    if (res.data.responseMsg === "Error") {
                        alert("Please Fill The Field")
                    } else if (res.data.responseMsg === "Success"){
                        alert("Added Students Successfully")
                        window.location.href = '/LibraryHomePage'
                    }
                })

    }

    }
return(
    <>
<form>
                <main data-aos="fade-up" className="reg-bg">
                    <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                    <Link to='/LibraryHomePage' className='btn btn-light  back-button text-dark '  >Back</Link>
                        
                        <div className="regCard container d-flex flex-column align-items-center justify-content-center gap-3">
                            <h2>
                                <Typewriter options={{ strings: ['Add Students'], autoStart: true, loop: true }} />
                            </h2>
                            <input type="text"  placeholder="Enter FirstName" id="firstname" required />
                            <input type="text"  placeholder="Enter LastName" id="lastname" required />

                            <input type="number" placeholder="Enter Age" id="age" required />

                            <input type="email" placeholder="Enter E-Mail" id="email" required />

                            <input type="tel" pattern="^[6-9]{1}[0-9]{9}" id="phoneNumber" placeholder="Enter Your PhoneNumber" required />

                           
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <button className="rounded border-0 w-50" type="submit" onClick={handlemember} >SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </main>
            </form>

    </>
);
    
    }