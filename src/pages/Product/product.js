import './product.css'

//imagens
import img1 from '../../images/andrzj-brown-U0qJT3ynHOE-unsplash.jpg';
import img2 from '../../images/bianca-ackermann-mTNVvQvmoKs-unsplash.jpg';
import img3 from '../../images/danika-perkinson-ZhA9vZQPTeE-unsplash.jpg';
import img4 from '../../images/klara-avsenik-5cFqO92t7pM-unsplash.jpg';

//components
import Footer from '../../components/Footer'

import axios from "axios";

import {useState} from 'react';
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const Product = () => {

    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago("APP_USR-4eb0c957-8931-42ed-be1c-39085cb82ccb");

    const createPreference = async () => {
        try {
          const response = await axios.post("http://localhost:8080/create_preference", 
          {
            description: "Mel Puro (Cipo-Uva)",
            price: 30,
            quantity: 1,
            currency_id: "ARS",
          },);
    
          const { id } = response.data;
          return id;

        } catch (error) {
          console.log(error);
        }
      };
    
      const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
          setPreferenceId(id);
        }
      };
     

    return ( 
        
        <div>
          
          <h1 className='title_poge_product'>Produtos</h1>
          

              <div className='card'>
                <img className='img_product' src={img1}/>
                <h3>Mel Puro (Cipo-Uva) 1L</h3>
                <span className='price'>R$ 30</span>
                <button className='button_comprar' onClick={handleBuy}>Comprar</button>
                {preferenceId && <Wallet initialization={{ preferenceId }} />}

              </div>

        <Footer/>
  
        </div>
     );
}
 
export default Product;