/** @license Apache-2.0 */

'use strict';

/**
* Test whether two single-precision complex floating-point numbers are not equal.
*
* @module @stdlib/complex-base-assert-is-not-equalf
*
* @example
* var Complex64 = require( '@stdlib/complex-float32' );
* var isNotEqualf = require( '@stdlib/complex-base-assert-is-not-equalf' );
*
* var z1 = new Complex64( 5.0, 3.0 );
* var z2 = new Complex64( 5.0, -3.0 );
*
* var v = isNotEqualf( z1, z2 );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
