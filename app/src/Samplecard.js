import React from 'react';
import waxingvideo from './waxingvideo.mp4';
import Ceramiccoating from './Ceramiccoating.mp4';
import ppfvideo from './ppfvideo.mp4';
import Wrapping from './Wrapping.mp4';
import dbg1 from './3dbg1.jpg';
import carbg from './carbg.jpg';
import bg2 from './bg2.jpg';

function Samplecard() {
    return (
        
        <div className="container-fluid bgimg"  >
            
            
                <h1 className="text-center font-bold font-size2 my-3 center2" style={{color:'black'}}>
                    Our Works
                </h1>
            <div className="row text-center  d-flex flex-nowrap overflow-auto scroolbar" >
                
                    <div className="col-12 col-md-4">
                        <div className="card shadow h-100">
                        
                            <video className="img-fluid " controls style={{height:"400px",width:"auto",backgroundColor:'orange'}} src={waxingvideo} alt="waxing"/>
                            
                        <div className="card-body" style={{ backgroundColor: "black" }}>
                            
                            
                             
                             
                                <h4 className="card-text font-size2" style={{ color: 'deeppink'}}>
                                WAXPRO COATING
                        </h4>
                                
                                
                            </div>

                        </div>
                    </div>
                <div className="col-12 col-md-4">
                    <div className="card shadow h-100">

                        <video className="img-fluid " controls  style={{ height: "400px", width: "auto", backgroundColor: 'orange' }} src={Ceramiccoating} alt="waxing" />

                        <div className="card-body" style={{ backgroundColor: "black" }}>


                            <h4 className="card-text font-size2" style={{ color: 'deeppink' }}>
                                CERAMIC COATING
                        </h4>
                            
                            
                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card shadow h-100">

                        <video className="img-fluid " controls  style={{ height: "400px", width: "auto", backgroundColor: 'orange'}} src={ppfvideo} alt="waxing" />

                        <div className="card-body" style={{ backgroundColor: "black" }}>


                            <h4 className="card-text font-size2" style={{ color: 'deeppink'}}>
                                PPF
                        </h4>
                            
                            
                        </div>

                    </div>
                </div>
                
                <div className="col-12 col-md-4">
                    <div className="card shadow h-100">

                        <video className="img-fluid" controls  style={{ height: "400px", width: "auto" ,backgroundColor:"orange"}} src={Wrapping} alt="waxing" />

                        <div className="card-body" style={{backgroundColor:"black"}}>


                            <h4 className="card-text font-size2 " style={{ color: 'deeppink'}}>
                                WRAPPING
                        </h4>
                           
                        </div>

                    </div>
                </div>
                
        </div>
        </div>
        
    )
}
export default Samplecard;