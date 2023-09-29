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
        axios.get("http://localhost:8080/auth/getonemember/"+memberId)
        .then(data=>data.json())
        .then((res)=>{
            console.log(res)
            setFname(res[0].fname)
            setLname(res[0].lname)
            setAge(res[0].age)
            setEmail(res[0].email)
            setPhonenumber(res[0].phonenumber)
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
            fname:fname,
            lname:lname,
            age:age,
            email:email,
            phonenumber:phonenumber
        }
        if(fname===''){
            alert("Enter the fname")
        }
        else{
            axios.put("http://localhost:8080/auth/updateallmember/"+memberId,updatedetails)
            .then((res)=>{

                if(res.data.responseMsg==="Error"){
                    alert("data are not update")
                }
                else if(res.data.responseMsg==="Success"){
                    alert("data are updated")
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
                            <input type="text"  placeholder="Enter FirstName" value={fname} onChange={(updatedata)=>{setFname(updatedata.target.value)}} required />
                            <input type="text"  placeholder="Enter LastName" value={lname} onChange={(updatedata)=>{setLname(updatedata.target.value)}}  required />

                            <input type="number" placeholder="Enter Age" value={age} onChange={(updatedata)=>{setAge(updatedata.target.value)}}  required />

                            <input type="email" placeholder="Ent er E-Mail" value={email} onChange={(updatedata)=>{setEmail(updatedata.target.value)}}  required />

                            <input type="tel" pattern="^[6-9]{1}[0-9]{9}" value={phonenumber}  placeholder="Enter Your PhoneNumber" onChange={(updatedata)=>{setPhonenumber(updatedata.target.value)}} required />

                           
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