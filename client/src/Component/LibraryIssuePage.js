import React from "react";
import { Link } from "react-router-dom";
import Typewriter  from "typewriter-effect";
import axios from "axios";
export function LibraryIssuePage(){

    function handleissue(event){
        event.preventDefault()
    var member_id=document.getElementById("member_id").value
    var book_id=document.getElementById("book_id").value
    var date=document.getElementById("date").value
    var status=document.getElementById("status").value
    var dueday=document.getElementById("dueday").value
    var returndate=document.getElementById("returndate").value
    var key={
        memberId:member_id,
        bookId:book_id,
        dueDate:date,
        status:status,
        dueDay:dueday,
        returnDate:returndate
    }
    if (member_id==""){
        alert("Enter the member_id")
    }
    else if(book_id==""){
        alert("Enter the book_id")
    }
    else if(date==""){
        alert("Enter the date")
    }
    else if(dueday==""){
        alert("Enter the Due-Date")
    }
   
else{
        axios.post("http://localhost:8080/auth/issuebook",key)
        .then((res)=>{
            if(res.data.responseMsg==="Success"){
                alert(res.data.data)
                window.location.reload()
            }
            else if(res.data.responseMsg==="Error"){
                alert(res.data.data)
            }
            else if(res.data.responseMsg==="Issued"){
             alert(res.data.data)
             window.location.href=''
            }
     })
   }
}
    return(
        <>
        <form onSubmit={handleissue} >
            
                <main data-aos="fade-up" className="reg-bg">

                    <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                        
                        <div className="regCard container d-flex flex-column align-items-center justify-content-center gap-3">
                            
                            <h2>
                                <Typewriter options={{ strings: ['Issue Book'], autoStart: true, loop: true }} />
                            </h2>
                            <input type="number"  placeholder="Enter Member-Id" id="member_id" required />
                            <input type="number" placeholder="Enter Book-Id" id="book_id" required />
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                            
                            <label >Enter the Due-Date:</label>
                            <input type="date" id="date" placeholder="Enter Your Due-Date" required />
                            </div>
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                            
                            <label >Enter the Return-Date:</label>
                            <input type="date" id="returndate" placeholder="Enter Your Return-Date" required />
                            </div>
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <label>Status:</label>
                                <select id="status">

                                    <option value='' >Select The Status:</option>
                                    <option className="opt1" value='Returned'>Returned</option>
                                    <option className="opt2" value='Brrowed'>Brrowed</option>
                                </select>
                            </div>
                           
                            <input type="number" placeholder="Enter Your Due-Day" id="dueday" required />
                            
                            <p className="fs-5" >Note: If The Member has Outstanding more than 500 then Unable to Issue Book</p>
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <button className="rounded border-0 w-50" type="submit">ISSUE</button>
                            </div>
                        </div>
                    </div>
                </main>
            </form>
        
        </>
    );

}