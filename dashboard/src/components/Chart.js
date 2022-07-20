import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [

    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        
           
               
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                               
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
            
            
      

    )
}

export default Chart;