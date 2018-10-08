import React from 'react';
import PropTypes from 'prop-types';
/**
 * @original props: es un json que tiene todos los parametros que se envian a este componente
 * @param city
 * @returns {*}
 * @constructor
 */
const Location = ({ city }) => {
    return(
        <div>
            <h1>
                { city }
            </h1>
        </div>
    );
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Location;