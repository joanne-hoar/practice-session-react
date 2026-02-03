import storeImage from '/cute-storefront.jpg'
import './HomePage.css'

function HomePage(){

    return(
        <div>
         <img src={storeImage} alt="Cute Storefront Logo" /> 
        </div>
    );
}
export default HomePage