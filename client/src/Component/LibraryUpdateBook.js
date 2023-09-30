import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Typewriter  from "typewriter-effect";
import axios from "axios";
export function LibraryUpdateBook(){

 
    var {bookId}=useParams()
   
    const[imagelink,setImagelink]=useState('')
    const[title,setTitle]=useState('')
    const[author,setAuthor]=useState('')
    const[quantity,setQuantity]=useState('')
    const[rentfee,setrentfee]=useState('')
  
    useEffect(()=>{
       fetch("http://localhost:8080/auth/getonebook/"+bookId)
        .then(data=>data.json())
        .then((res)=>{
            console.log(res)
            setImagelink(res.jData[0].imageLink)
            setTitle(res.jData[0].title)
            setAuthor(res.jData[0].author)
            setQuantity(res.jData[0].quantity)
            setrentfee(res.jData[0].rentFee)
        })
        

    },[])
    function handleupdate(event){
        event.preventDefault()
        var imagelink=document.getElementById("imagelink").value 
        var title=document.getElementById("title").value 
        var author=document.getElementById("author").value 
        var quantity=document.getElementById("quantity").value 
        var rentfee=document.getElementById("rentfee").value 

        var updatedetails={
            imageLink:imagelink,
            title:title,
            author:author,
            quantity:quantity,
            rentFee:rentfee
        }
        if(imagelink===''){
            alert("Enter the imagelink")
        }
        else{
            axios.put("http://localhost:8080/auth/updateallbook/"+bookId,updatedetails)
            .then((res)=>{

                if(res.data.responseMsg==="Error"){
                    alert("Data are Not Update")
                }
                else if(res.data.responseMsg==="Success"){
                    alert("Data are Updated")
                    window.location.href='/LibraryViewBook'
                }
            })
        }
    }
    

    return(
        <>
   <form className="p-5  book-home" onSubmit={handleupdate}>

<Link to='/LibraryViewBook' className='btn btn-primary'  >Back</Link>
            <div className="RegMainPage  p-5 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="regCard container d-flex flex-column p-3 align-items-center justify-content-center gap-3">
                    <h2>
                        <Typewriter options={{ strings: ['UPDATE BOOK DETAILS'], autoStart: true, loop: true }} />
                    </h2>
                    <input type="text"  placeholder="Enter the Book-Image URL" id="imagelink" value={imagelink} onChange={(updatedata)=>{setImagelink(updatedata.target.value)}} required />

                    <input type="text"  placeholder="Enter the Book Title" id="title"  value={title} onChange={(updatedata)=>{setTitle(updatedata.target.value)}} required />
                   

                    <input type="text" placeholder="Enter The Author Name" id="author" value={author} onChange={(updatedata)=>{setAuthor(updatedata.target.value)}} required />

                    <input type="number" placeholder="Enter The Quantity" id="quantity" value={quantity} onChange={(updatedata)=>{setQuantity(updatedata.target.value)}} required />

                    <input type="number"  id="rentfee" value={rentfee} placeholder="Enter Your Rent Fees"  onChange={(updatedata)=>{setrentfee(updatedata.target.value)}} required />

                   
                    <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                        <button className="rounded border-0 w-50 p-3 bg-success text-white " type="submit"  >Update Book</button>
                    </div>
                </div>
            </div>
        
    </form>



        </>

    );
}