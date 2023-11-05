const Footer = (e) => {
    return(
       <div>
           {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div className="" style={{fontSize:"large",marginTop:"10px"}}>

 <footer className="text-black text-center text-lg-start bg-transparent glass">
   {/* <!-- Grid container --> */}
   <div className="container p-4">
     {/* <!--Grid row--> */}
     <div className="row mt-4">
       {/* <!--Grid column--> */}
       <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
         <h5 className="text-uppercase mb-4">Contact</h5>

         <p>
           <b>Head Office</b>
         </p>

         <p>
         Islamabad Highway, Adjacent Emaar Canyon Views, Islamabad - Pakistan
         </p>

         <div className="mt-4">
           {/* <!-- Facebook --> */}
           <button className="btn btn-floating btn-light btn-lg"><i className="bi bi-facebook"></i></button>
           {/* <!-- Dribbble --> */}

           {/* <!-- Twitter --> */}
           <button className="btn btn-floating btn-light btn-lg"><i className="bi bi-twitter"></i></button>
           {/* <!-- Google + --> */}
           <button className="btn btn-floating btn-light btn-lg"><i className="bi bi-google"></i></button>
           {/* <!-- Linkedin --> */}
         </div>
       </div>
       {/* <!--Grid column-->

       <!--Grid column--> */}
       <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
         

         <ul className="fa-ul" style={{marginLeft: "1.65em"}}>
           <li className="mb-3">
             <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2"><b>Lahore Office: </b>
             20 Aibak Block, New Garden Town Lahore.
             </span>
           </li>
           <li className="mb-2">
            Contact: (042) 35914670-71
           </li>
           <li className="mb-3">
             <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2"><b>Karachi Office:</b>Office no 31-GF, Business Arcade. Club Rd, Movenpick Hotel Karachi-75530.</span>
           </li>
           <li className="mb-2">
            Contact: +92-51-5165800
           </li>
         </ul>
       </div>
       {/* <!--Grid column--> */}

       {/* <!--Grid column--> */}
       <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
         <h5 className="text-uppercase mb-4">Opening hours</h5>

         <table className="table text-center text-white ">
           <tbody className="fw-normal bg-transparent">
             <tr>
               <td>Mon - Sat:</td>
               <td>9am - 5:30pm</td>
             </tr>
             
           </tbody>
         </table>
       </div>
       {/* <!--Grid column--> */}
     </div>
     {/* <!--Grid row--> */}
   </div>
   {/* <!-- Grid container --> */}

   {/* <!-- Copyright --> */}
   <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
   
   </div>
   {/* <!-- Copyright --> */}
 </footer>

</div>
{/* <!-- End of .container --> */}
       </div>
    );
};
export default Footer;