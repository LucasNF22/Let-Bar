import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import CategoryList from './CategoryList';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoryList />

        </div>
    )
}

export default ContentRowCenter;