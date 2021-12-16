import PropTypes from 'prop-types';
import React from 'react';
import {
  Temporal,
  Intl,
  toTemporalInstant,
} from '@js-temporal/polyfill';


// implement the Temporal polyfill (normally near an entry file)
Date.prototype.toTemporalInstant = toTemporalInstant;


export default function ErgoTimer() {
  return (
    <div>

    </div>
  );
}

ErgoTimer.displayName = 'ErgoTimer';

ErgoTimer.propTypes = {};
