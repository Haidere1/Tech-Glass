import CollapsibleExample from "./tabbar.js";
import Carousel from 'react-bootstrap/Carousel';
import cimage1 from '../images/cimage1.jpg'
import cimage2 from '../images/cimage2.jpg'
import cimage3 from '../images/cimage3.jpg'
import women from '../images/women.jpg'
import cuttingline from '../images/cuttingline.jpg'
import cutting2 from '../images/cutting2.jpg'
import cutting4 from '../images/cutting4.jpg'
import cutting5 from '../images/cutting5.jpg'
import cutting6 from '../images/cutting6.jpg'

import '../styles/main.css'
import mainbg from '../backgrounds/mainbg2.jpg'
import mennewsbg from '../backgrounds/mennews.jpg'
import { useEffect, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Mainpage = () => {
   
    

    return(
        <div className='mainpage' style={{backgroundImage:`url(${mainbg})`}}>
            <CollapsibleExample/>


    <div className="carouseldiv" >
    <Carousel fade style={{height:"80vh"}}>
      <Carousel.Item>
        <img style={{objectFit:"cover", maxHeight:"80vh"}}
          className="d-block w-100 h-50"
          src={cimage1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{objectFit:"cover", maxHeight:"80vh"}}
          className="d-block w-100"
          src={cimage2}
          alt="Second slide"
        />
        
        <Carousel.Caption>
          <h3>New Arrival</h3>
          <p>Best Color and Best Quality That A Man Can Get</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{objectFit:"cover", maxHeight:"80vh"}}
          className="d-block w-100"
          src={cimage3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    <div class="flex-container ">
  <div class="box glass " id="box1" data-aos="fade-right"><h1>Company Profile:</h1>
  <p>One of the largest glass processing facility in the country, having the most modern
hi-tech and the latest machinery in Pakistan. We offer all kind of glass processing services,
cutting, edging, tempering, double glazing, lamination and designing, all under one roof. From home usage to furniture and retail fixtures to country's iconic commercial projects. The Best in Glass</p>
  </div>
  <div class="box" id="box2">
    <div className="infoImg" data-aos="flip-left"> 
    <img src={cuttingline} alt="nothing found" />
    </div>
    
    <div className="infoImg2"  data-aos="flip-left"> Image 2 will be placed here
    <img src={cutting2} alt="nothing found"/>
    </div>
    
    <div className="infoImg3"  data-aos="flip-left"> Image 3 will be placed here
    <img src={cutting4} alt="nothing found"/>
    </div>
    
    <div className="infoImg4"  data-aos="flip-left"> Image 4 will be placed here
    <img src={cutting5} alt="nothing found"/>
    </div>
    
    <div className="infoImg5"  data-aos="flip-left"> Image 5 will be placed here
    <img src={cutting6} alt="nothing found"/>
    </div>
    
    </div>

</div>




    
    

        </div>
    );
     
};
export default Mainpage;