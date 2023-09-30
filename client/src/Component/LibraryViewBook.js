import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import axios from "axios";

export function LibraryViewBook(){

    const[book,setBook]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/auth/getallbook")
        .then((res)=>{
            // console.log(res)
            setBook(res.data.jData)
            
        })
    })
    function handledeletebook(bookId){
        var datas={bookId:bookId}
    
        axios.post("http://localhost:8080/auth/deleteallbook",datas)
        .then((res) => {
            if (res.data.responseMsg === "Error") {
                alert("Data Are Not Deleted")
            } else if (res.data.responseMsg === "Success"){
                alert("Deleted Successfully")
            }
        })
    }
    return(
        <>
        <body className="bg-viewbook  mt-4 m-5">
                <h1 className="text-center m-3">View All Book Details</h1>
                <Link to='/LibraryHomePage' className='btn btn-danger '>Back</Link>
                <CSVLink data={book}className="btn btn-success ms-3 m-2" >Download Sheets</CSVLink>
                <Link to='/LibraryAddPage' className='btn btn-danger '>Create +</Link>

                
        <table>
            <thead>
                <tr id="header">
                    <th>BOOK-ID</th>
                    <th>Book-Image</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Quantity</th>
                    <th>Rent-Fees</th>
                    <th>Action</th>
                    </tr>
            </thead>
                    <tbody>
                        {
                            book.map((value,index)=>(
                                <>                            
                                <tr>
                                <td>{value.bookId}</td>
                                <td><img  src={value.imageLink} className="image-book" /></td>
                                <td>{value.title}</td>
                                <td>{value.author}</td>
                                <td>{value.quantity}</td>
                                <td>{value.rentFee}</td>
                                <td><Link to={`/LibraryUpdateBook/${value.bookId}`}  className='btn btn-success'>Edit</Link><Link onClick={()=>{handledeletebook(value.bookId)}}  className='btn btn-danger m-1' >Delete</Link></td>
                            </tr>
                            </>
                            ))
                        }
                    </tbody>
        </table>
        
        </body>
        
        </>
    );
}
