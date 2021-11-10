import React from 'react';
import Samplecard from './Samplecard';
import Title from './Title';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from './Services';
import Options from './Options';
import Why from './Why';
import Aboutus from './Aboutus';


function HomePage() {
    return (
        < BrowserRouter >
            <Title></Title>,
        
            <Options></Options>
        <Aboutus></Aboutus>
        
            <Services></Services>
            <Why></Why>
            
          
            <Samplecard></Samplecard>
            
            </BrowserRouter>
        
    );
}
export default HomePage;