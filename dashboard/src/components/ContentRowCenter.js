import React from 'react';
import LastProduct from './LastProduct';
import CategoryList from './CategoryList';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Ultimo Producto en DB -->*/}
            <LastProduct />
            

            {/*<!-- Categorias en DB -->*/}
            <CategoryList />
            

        </div>
    )
}

export default ContentRowCenter;