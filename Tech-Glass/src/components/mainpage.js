import CollapsibleExample from "./tabbar.js";
import Carousel from 'react-bootstrap/Carousel';
import cimage1 from '../images/cimage1.jpg'
import cimage2 from '../images/cimage2.jpg'
import cimage3 from '../images/cimage3.jpg'
import cuttingline from '../images/cuttingline.jpg'
import cutting2 from '../images/cutting2.jpg'
import cutting4 from '../images/cutting4.jpg'
import cutting5 from '../images/cutting5.jpg'
import cutting6 from '../images/cutting6.jpg'
import l2 from '../images/bomall.png'
import l3 from '../images/empmall.png'
import l4 from '../images/bmall.png'  
import {Link} from 'react-router-dom'

import '../styles/main.css'
import mainbg from '../backgrounds/mainbg2.jpg'
import Footer from "./footer.js";
// import { useState } from "react";

const Mainpage = () => {
  // const [display ,setDisplay]=useState();
  // const hotel=[]
  // const buildings=[]
  
// const handlebuttonclick=(value)=>{
//   console.log(value)
//   console.log("Hello")
// }
  
   
    

    return(
        <div className='mainpage'>
          <div className="overlay" style={{backgroundImage:`url(${mainbg})`}}></div>
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
  <div class="box glass " id="box1" data-aos="fade-right"><h1>Our Production:</h1>
  <p>One of the largest glass processing facility in the country, having the most modern
hi-tech and the latest machinery in Pakistan. We offer all kind of glass processing services,
cutting, edging, tempering, double glazing, lamination and designing, all under one roof. From home usage to furniture and retail fixtures to country's iconic commercial projects. The Best in Glass</p>
  </div>
  <div class="box" id="box2">
    <div className="infoImg" data-aos="flip-left"> 
    <img src={cuttingline} alt="nothing found" />
    </div>
    
    <div className="infoImg2"  data-aos="flip-left"> 
    <img src={cutting2} alt="nothing found"/>
    </div>
    
    <div className="infoImg3"  data-aos="flip-left"> 
    <img src={cutting4} alt="nothing found"/>
    </div>
    
    <div className="infoImg4"  data-aos="flip-left"> 
    <img src={cutting5} alt="nothing found"/>
    </div>
    
    <div className="infoImg5"  data-aos="flip-left"> 
    <img src={cutting6} alt="nothing found"/>
    </div>
    
    </div>

</div>
<div className="latestprj">
  <div className="child1"><h1> Latest Projects</h1>
  <p>One of the largest and the latest glass processing facility in the country, having the most modern, hi-tech and the latest machinery in Pakistan. Most of the machines and equipments are of 2017 - 2020 make.</p>
  </div>
</div>

<div className="flex-container">
<div className="prbox1">
    <div className="content glass" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      <img src={l3} alt="First" />
      <div>
        <h1>Emporium Mall</h1>
        <p>J7 Emporium Mall, Islamabad</p>
      </div>
    </div>
    <div className="content glass" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      <div>
        <h1>EOBI Mall</h1>
        <p>EOBI Mall Islamabad</p>
      </div>
      <img src={l2} alt="Second " />
    </div>
    <div className="content glass" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      <img src={l4} alt="Third 3" />
      <div>
        <h1>Bahria Box Park Mall</h1>
        <p>Bahria Box Park Mall</p>
      </div>
    </div>
  </div>

<div className="prbox2">
 <button data-aos="zoom-out-left" value='Hotels'><Link to='/View'>Hotels</Link></button>
 <button  data-aos="zoom-out-left" value='Education'>Education / Health projects</button>
 <button data-aos="zoom-out-left" value='' >Commercial Buildings</button>
 <button  data-aos="zoom-out-left" >Shopping Malls</button>
 <button  data-aos="zoom-out-left" >Auto Showroom</button>
 <button  data-aos="zoom-out-left" >Private Residences</button>
 <button data-aos="zoom-out-left">Skylights</button>
 
 
 

</div>

</div>




    
    

        </div>
    );
     
}; 
export default Mainpage;