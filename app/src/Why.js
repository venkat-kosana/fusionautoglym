import { Button } from 'bootstrap';
import React from 'react'
import './Why.css';

function Why() {
    return (
        <div className="container-fluid pb-5 bgimg1 whybg2 whybg3" >
            
            <div className="row">
                <div className="col-12 col-md-6 ">
                    <h2 className="my-5 py-5 center2">Why <span class="text-info">Fusion AUTOGLYM</span>?</h2>
                    <div className="row my-4 py-5">
                        <div className="col-sm-12 col-lg-6 mb-5 " style={{ padding: "0px 50px" ,display:'flex',flexDirection:"row" }}>
                            <img style={{height:"70px",width:"70px"}} alt="feature-1" class="lazy" src="https://static.gobikes.co.in/images/feature-1.png"></img>
                          <h2 style={{padding:"30px 15px"}}>Lowest Price!!</h2>
                        </div >
                        
                       
                        <div className="col-sm-12 col-lg-6  " style={{ padding: "0px 50px" ,display:'flex',flexDirection:"row" }}>
                            <img style={{ height: "70px", width: "70px" }} alt="feature-3" class="lazy" src="https://static.gobikes.co.in/images/feature-3.png"></img>
                          <h2 style={{padding:"30px 15px"}}>Quality Service</h2>
                        </div >
                       
                        

                        
                       
                    </div>
                    <div className="row my-4 pb-5">
                        <div className="col-sm-12 col-lg-6 mb-5" style={{ padding: "0px 50px" ,display:'flex',flexDirection:"row" }}>
                            <img style={{ height: "70px", width: "70px" }} alt="feature-4" class="lazy" src="https://static.gobikes.co.in/images/feature-4.png"></img>
                          <h2 style={{padding:"30px 15px"}}>24/7 Operational </h2>
                        </div >

                        
                        <div className="col-sm-12 col-lg-6 " style={{ padding: "0px 50px",display:'flex',flexDirection:"row" }}>
                            <img style={{ height: "70px", width: "70px" }} alt="feature-6" class="lazy" src="https://static.gobikes.co.in/images/feature-6.png"></img>
                          <h2 style={{padding:"30px 15px"}}>Roadside Assistance</h2>
                        </div >

                        

                    </div>
                    
                    

                </div>
                <div className="col-12 col-md-6 " style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
                    <h2 style={{fontSize:"40px",fontFamily:"cursive",backgroundColor:"white"}}>Want to Book a Slot!!</h2>
                    <button className="btn btn-outline-info my-4 btn-light btn-lg">
                      <a href="tel:1234567891" className="brand">
                        <span className="font-size selected ">Contact Us </span>
                      </a>
                    </button>

                    
                </div>

            </div>
          

        </div>
        

            
      
    )
        
}
export default Why;
