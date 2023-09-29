import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Typewriter  from "typewriter-effect";
import axios from "axios";
export function LibraryUpdateBook(){

 
    const {bookId}=useParams(); 
    const [values,setValues]=useState({
         bookId:bookId,
        imageLink:'',
        title:'',
        author:'',
        quantity:'',
        rentFee:''
    })

    useEffect(()=>{
             
        axios.get("http://localhost:8080/auth/getallbook/"+bookId)
        .then( res=>{
            setValues({...values,imageLink:res.data.imageLink,title:res.data.title,author:res.data.author,quantity:res.data.quantity,rentFee:res.data.rentFee})
        })
        .catch(err=>console.log(err))
                },[])
        
        const handlesubmit =(event)=>{
            event.preventDefault();
        
            axios.put("http://localhost:8080/auth/updateallbook/"+bookId,values)
        .then( res=>{
            window.location.href='/LibraryHomePage'

        })
        .catch(err=>console.log(err))
        }

        


    return(
        <>
   
   <form className="p-5  book-home" onSubmit={handlesubmit}>

<Link to='/LibraryViewBook' className='btn btn-primary'  >Back</Link>
            <div className="RegMainPage  p-5 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="regCard container d-flex flex-column p-3 align-items-center justify-content-center gap-3">
                    <h2>
                        <Typewriter options={{ strings: ['UPDATE BOOK DETAILS'], autoStart: true, loop: true }} />
                    </h2>
                    <input type="text"  placeholder="Enter the Book-Image URL" id="url" required />

                    <input type="text"  placeholder="Enter the Book Title" id="title" required />
                   

                    <input type="text" placeholder="Enter The Author Name" id="author" required />

                    <input type="number" placeholder="Enter The Quantity" id="quantity" required />

                    <input type="number"  id="fees" placeholder="Enter Your Rent Fees" required />

                   
                    <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                        <button className="rounded border-0 w-50 p-3 bg-success text-white " type="submit"  >Update Book</button>
                    </div>
                </div>
            </div>
        
    </form>



        </>

    );
}