import React from 'react';

function Category(props){
    return(
        <React.Fragment>
            
                <div className="tarjeta-categoria-resume ">
                    <div className="tit-cat-resume text-primary">
                        {props.categoria.name}
                    </div>
                    
                    <div className="desc-cat-resume">
                       Total de productos: {props.categoria.productCount}
                    </div>
                </div>
            
        </React.Fragment>
    )
}
export default Category;