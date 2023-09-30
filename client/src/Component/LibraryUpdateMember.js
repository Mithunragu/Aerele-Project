import React, { useEffect, useState } from "react";
import Typewriter  from "typewriter-effect";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export function LibraryUpdateMember(){

    var {memberId}=useParams()
   
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[age,setAge]=useState('')
    const[email,setEmail]=useState('')
    const[phonenumber,setPhonenumber]=useState('')
  
    useEffect(()=>{
       fetch("http://localhost:8080/auth/getonemember/"+memberId)
        .then(data=>data.json())
        .then((res)=>{
            console.log(res)
            setFname(res.jData[0].fName)
            setLname(res.jData[0].lName)
            setAge(res.jData[0].age)
            setEmail(res.jData[0].email)
            setPhonenumber(res.jData[0].phoneNumber)
        })
        

    },[])
    function handleupdate(event){
        event.preventDefault()
        var fname=document.getElementById("fname").value 
        var lname=document.getElementById("lname").value 
        var age=document.getElementById("age").value 
        var email=document.getElementById("email").value 
        var phonenumber=document.getElementById("phonenumber").value 

        var updatedetails={
            fName:fname,
            lName:lname,
            age:age,
            email:email,
            phoneNumber:phonenumber
        }
        if(fname===''){
            alert("Enter the fname")
        }
        else{
            axios.put("http://localhost:8080/auth/updateallmember/"+memberId,updatedetails)
            .then((res)=>{

                if(res.data.responseMsg==="Error"){
                    alert("Data are Not Update")
                }
                else if(res.data.responseMsg==="Success"){
                    alert("Data are Updated")
                    window.location.href='/LibraryViewMember'
                }
            })
        }
    }
    return(
        <>
        <form onSubmit={handleupdate}>
                <main data-aos="fade-up" className="reg-bg">
                    <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                    <Link to='/LibraryHomePage' className='btn btn-light  back-button text-dark '  >Back</Link>
                        
                        <div className="regCard container d-flex flex-column align-items-center justify-content-center gap-3">
                            <h2>
                                <Typewriter options={{ strings: ['UPDATE MEMBER'], autoStart: true, loop: true }} />
                            </h2>
                            <input type="text"  placeholder="Enter FirstName" id="fname" value={fname} onChange={(updatedata)=>{setFname(updatedata.target.value)}} required />
                            <input type="text"  placeholder="Enter LastName" id="lname" value={lname} onChange={(updatedata)=>{setLname(updatedata.target.value)}}  required />

                            <input type="number" placeholder="Enter Age" id="age" value={age} onChange={(updatedata)=>{setAge(updatedata.target.value)}}  required />

                            <input type="email" placeholder="Ent er E-Mail" id="email" value={email} onChange={(updatedata)=>{setEmail(updatedata.target.value)}}  required />

                            <input type="tel" pattern="^[6-9]{1}[0-9]{9}" id="phonenumber" value={phonenumber}  placeholder="Enter Your PhoneNumber" onChange={(updatedata)=>{setPhonenumber(updatedata.target.value)}} required />

                           
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <button className="rounded border-0 w-50" type="submit">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </main>
            </form>


        </>
    );
}