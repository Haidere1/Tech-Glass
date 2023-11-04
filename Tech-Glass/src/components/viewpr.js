import mainbg from '../backgrounds/mainbg2.jpg'
import '../styles/product.css'
import CollapsibleExample from './tabbar';
import pri from '../images/cutting6.jpg'
import Footer from './footer';

const Product=()=>{
    return(
        <div>
        <div className="overlay" style={{backgroundImage:`url(${mainbg})`}} ></div>
        <CollapsibleExample/>
        
        {/* //THIS IS THE FLEX CONTAINER FOR INTERNAL DIVS */}
        
        <div className='flexContainer'>  
        <div className='prd'>
            <h3>Flat and Tempered Glass</h3>
            <p>Whatever you want can come here so this is just an example to test how this shows on the main page so
                dont worry about it it wont hurt anybody.
            </p>
            <p>Whatever you want can come here so this is just an example to test how this shows on the main page so
                dont worry about it it wont hurt anybody.
            </p>
            <p>Whatever you want can come here so this is just an example to test how this shows on the main page so
                dont worry about it it wont hurt anybody.
            </p>
            <p>Whatever you want can come here so this is just an example to test how this shows on the main page so
                dont worry about it it wont hurt anybody.
            </p>
            <p><b>Whatever you want can come here so this is just an example to test how this shows on the main page so
                dont worry about it it wont hurt anybody.
                </b>
            </p>

        </div>
        <div className='prdisp'>
            <img class='primg ' src={pri} alt='nothing'></img>
           
            
        </div>
        </div>
       

        </div>
    );

}
export default Product;