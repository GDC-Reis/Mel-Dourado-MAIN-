import './product.css'

//imagens
import img1 from '../../images/andrzj-brown-U0qJT3ynHOE-unsplash.jpg';

//components
import Footer from '../../components/Footer'

import axios from "axios";

import {useState} from 'react';
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const Product = () => {

  const [loading, setLoading] = useState(false); // Estado para controlar se o botão está carregando  
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
          console.log(response.data);
          return id;

        } catch (error) {
          console.log(error);
        }
      };
    
      const handleBuy = async () => {
        setLoading(true); // Define o estado como 'true' para indicar que o botão está carregando

        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }

        setLoading(false); // Define o estado de volta para 'false' após o término do carregamento
      };
     

    return ( 
        
        <div>
          
          <h1 className='title_poge_product'>Produtos</h1>
          

              <div className='card'>
                <img className='img_product' src={img1}/>
                <h3>Mel Puro (Cipo-Uva) 1L</h3>
                <span className='price'>R$ 30</span>
                <button className='button_comprar' onClick={handleBuy} disabled={loading || preferenceId}>
                    {loading ? 'Carregando...' : 'Comprar'}
                </button>
                {preferenceId && <Wallet initialization={{ preferenceId }} />}
              </div>

        <Footer/>
  
        </div>
     );
}
 
export default Product;