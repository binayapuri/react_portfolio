import React from "react";
import "./testimonials.css";


export default function Testimonials(){
    const testimonials =[
        {
            name: "Sujan Timalsina",
            text: " this company is very good and provides best it services in the kathmandu valley."
        },
        {
            name: "Aakash Ghimire",
            text: " this it company is very good and it provides post services for the website also"

        },
        {
            name: "bharat khanal",
            text: "very good website design , app design in the town in very affordable price"
        }
    ];
    return <>
    <div>
        <div className="row mx-5">

            {testimonials.map((value) => {

                return <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                    
                    <div className="card shadow testimonials-card d-flex flex-column text-center">
                        <span className="description">{value.text} </span>
                        
                        <span className="stars text-center my-3">
                        ⭐⭐⭐⭐⭐
                        </span>
                        <span className="name text-center">{value.name}</span>


                    </div>
                </div>;

            })}
        </div>
    </div>
    </>;
}