import React from "react";
import { Link } from "react-router-dom";
import Typewriter  from "typewriter-effect";

export function LibraryIssuePage(){

    return(
        <>
        <form >
                <main data-aos="fade-up" className="reg-bg">
                    <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                        <div className="regCard container d-flex flex-column align-items-center justify-content-center gap-3">
                            <h2>
                                <Typewriter options={{ strings: ['Issue Book'], autoStart: true, loop: true }} />
                            </h2>
                            <input type="number"  placeholder="Enter Member-Id" id="memberid" required />
                            <input type="number" placeholder="Enter Book-Id" id="bookid" required />
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                            
                            <label >Enter the Due-Date:</label>
                            <input type="date" id="dob" placeholder="Enter Your Due-Date" required />
                            </div>
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <label>status:</label>
                                <select id="isStatus">

                                    <option value='' >Select The Status</option>
                                    <option className="opt1" value='returned'>Returned</option>
                                    <option className="opt2" value='borrowed'>Borrowed</option>
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