import React from 'react'
import "./Signup.css"
import {db} from "../base"

const Signup = () => {


    const sendData=(e)=>{
        e.preventDefault()
        const{fname,email,pass}=e.target.elements
        try{
            db.collection("users").add(
                {
                    name:fname.value,
                    email:email.value,
                    password:pass.value
                }
            )
            console.log("data stored succesfully")
        }
        catch
            (error){
                console.log(error);
            }
        
        alert('sent succesfully')
        e.target.reset()

    }
    return (
        <div className="reg">
            <form action ="submit" className="bahasha" onSubmit={sendData}>
                <h1>signup</h1>
                <input type ="text"name="fname" placeholder="Full name"className="in"/>
                <input type ="email"name="email" placeholder="Enter email"className="in" />
                <input type ="password"name="pass" placeholder="Enter password"className="in" />

                <div className="but">
                    <button className="submit">
                    submit
                    </button>
                    </div>

            </form>

        </div>
    )
}

export default Signup
