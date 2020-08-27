import React from 'react';

const Spinner = ({laodind}) => {
    return (
        <div className="d-flex justify-content-center">

        {laodind && 
        <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
        </div>
        }
    </div>
    );
}

export default Spinner;