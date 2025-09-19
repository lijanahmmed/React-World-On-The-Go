import React, { use, useState } from 'react';

import './Countries.css';

const Countries = ({ countriesPromise }) => {
   

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>Total countries: {countries.length}</h1>
            
        </div>
    );
};

export default Countries;