import React from 'react';
import ProductInfo from './ProductInfo';

function LastProduct(){
    return(
        
        <div className="col-lg-6 mb-4">
            
            <section className="tarjeta-categoria-edit ">
                <div className="tarj-cat-sup padding20">
                    <div>
                        Ultimo Producto
                    </div>
                </div>
                <ProductInfo/>
            </section>
        </div>
    )
}

export default LastProduct;
