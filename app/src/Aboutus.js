import React from 'react'
import "./Aboutus.css";

 function Aboutus() {
    return (
        <div>
            <div className="container-fluid cater3-movingBG" >
                
                    <div class="">
                    <marquee behavior="slide" direction="left"
                        style={{ fontSize: "50px", color: 'black', height: "60px"}}> About Us
                       </marquee>
                       
                    <marquee direction="right" style={{ fontSize: "45px", color: 'black', height: "53px", paddingBottom: " 100px" ,fontFamily:"cursive"}}>F<span style={{color:'deeppink'}}>U</span>SION AUTOGLYM</marquee>
                </div>
             
              <br/>
                <div className="row">
                    <div className="col-12 col-md-5 text-justify  " >
                        
                            <h4 style={{fontSize:"30px",textAlign:'center'}}>Who are we??</h4>
                        <p style={{
                            fontSize: "20px"}}>Fusion Autoglym is a automobile startup business by Hemanth and Revanth, established in
                      the year 2020.We are located at x-road,Sangareddy.We organize the Car Cleaning segment to give the community a new definition of car care and detailing services which are not professionally followed in India.</p>
                        </div>
                    <div className="col-12 col-md-5 offset-md-2 text-justify " >

                        <h4 style={{ fontSize: "30px", textAlign: 'center' }}>What we do??</h4>
                        <p style={{
                            fontSize: "20px"
                        }}>We provide car detailing and cleaning services like Wrapping, paint correction, Waxing, Coating with lowest cost and highest quality.Here at Fusion Autoglym we 
                      do a plethora of research on the car care and maintenance specific to your car and we are focusing on educating our customers about the whole concept of Clean Car Culture.</p>
                    </div>
                        
                        

                        </div>

                    </div>
                </div>
                
            
        
    )
}
export default Aboutus;
