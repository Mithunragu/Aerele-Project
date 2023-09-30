import React from "react";
import Typewriter  from "typewriter-effect";
import axios from "axios";
import { Link } from "react-router-dom";
export function LibraryAddBook(){

    function handlebook(event){
        event.preventDefault()

        var url=document.getElementById("url").value
        var title=document.getElementById("title").value
        var author=document.getElementById("author").value
        var quantity=document.getElementById("quantity").value
        var fees=document.getElementById("fees").value

        var addmemberdetails = {
            imageLink: url,
            title: title,
            author: author,
            quantity: quantity,
            rentFee: fees,
        }

        if (title===''){
            alert("Enter The Fields")
        } else {
            axios.post("http://localhost:8080/auth/create", addmemberdetails)
                .then((res) => {
                    if (res.data.responseMsg === "Error") {
                        alert("Please Fill The Field")
                    } else if (res.data.responseMsg === "Success"){
                        alert("ADD Book Successfully")
                        window.location.href = '/LibraryHomePage'
                    }
                })
    }
    }
    return(
        <>
        <form className="p-5  book-home">

        <Link to='/LibraryHomePage' className='btn btn-primary'  >Back</Link>
                    <div className="RegMainPage  p-5 w-100 h-100 d-flex align-items-center justify-content-center">
                        <div className="regCard container d-flex flex-column p-3 align-items-center justify-content-center gap-3">
                            <h2>
                                <Typewriter options={{ strings: ['UPLOAD BOOK DETAILS'], autoStart: true, loop: true }} />
                            </h2>
                            <input type="text"  placeholder="Enter the Book-Image URL" id="url" required />

                            <input type="text"  placeholder="Enter the Book Title" id="title" required />
                           

                            <input type="text" placeholder="Enter The Author Name" id="author" required />

                            <input type="number" placeholder="Enter The Quantity" id="quantity" required />

                            <input type="number"  id="fees" placeholder="Enter Your Rent Fees" required />

                           
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <button className="rounded border-0 w-50 p-2  fs-5 " type="submit" onClick={handlebook} >Upload Book</button>
                            </div>
                        </div>
                    </div>
                
            </form>


        
        
        </>
    );
}