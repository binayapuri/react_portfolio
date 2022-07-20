import React from "react";
import "./contact.css";


export default function Contact(){
    return <>


    <div className="contact-me-card row">
        <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">


            <span className="get-in-touch mx-4 my-5">

                Get in touch
                

            </span>
            <div className="py-5 d-flex justify-content-center">
                    <lottie-player 
                        src="https://assets8.lottiefiles.com/private_files/lf30_vrcurbxk.json"  
                        background="transparent"  
                        speed="1"  
                        style={{width: "300px" , height: "300px"  }}
                        loop 
                        autoplay>

                    </lottie-player>

            </div>

        </div>
        <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
            <div className="d-flex flex-column card-contact-right">
                <div className="input-group my-3 d-flex flex-column">
                    <label> Name</label>
                    <input type="text" placeholder="enter your name" className="input-groups"></input>

                </div>
                <div className="input-group my-3 d-flex flex-column">
                    <label> email id</label>
                    <input type="text" placeholder="enter your Email" className="input-groups"></input>

                </div>
                <div className="input-group my-3 d-flex flex-column">
                    <label> Message</label>
                    <input type="text" placeholder="enter your message" className="input-groups"></input>

                </div>
                <div className="input-group my-3 d-flex flex-column">
                    <button className="btn btn-success">Send Message</button>
                </div>

            </div>
        </div>

    </div>



    </>
}