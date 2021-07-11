import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Service, ServiceBtn, ServiceH1, ServiceP, ServicesStyle, ServiceStyle } from '../Services/ServicesStyle';
import Sidebar from '../Sidebar/Sidebar';
// import Sidebar from 


const Services = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <ServicesStyle>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <ServiceStyle>
                <Service>
                    <ServiceH1>Greatest Food Pack</ServiceH1>
                    <ServiceP>Ready In 2 minutes</ServiceP>
                    <ServiceBtn>Order Now</ServiceBtn>
                </Service>
            </ServiceStyle>
        </ServicesStyle>
        </>
    );
};

export default Services;