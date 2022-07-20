import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentTotales from './ContentTotales';
import Chart from './Chart';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className=" mb-0 texto-dash">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Totales-->*/}
					<ContentTotales />
					<ContentRowCenter />
					<Chart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;