
/**
 * JavaScript Independant Utilities
 *
 * @author      Thomas Josseau
 * @version     0.1.0
 * @date        2014.03.15
 * @link        https://github.com/tjosseau/inde-utils
 *
 * @description
 *      Tiny independant utilities to copy/paste for your libraries.
 */

var
////////////////////////////////////////////////////////////////////////////////
// Choose the function utilities instead of copy/paste the whole.             //
// Every function is independant from the others, otherwise it is noted.      //
////////////////////////////////////////////////////////////////////////////////

// Console utils //

	// - Displays the arguments in the console, then returns them.
	echo = function() { if (console) console.log.apply(console, arguments) ; return arguments.length === 1 ? arguments[0] : arguments ; },

// Checking //

	// - A set of type-checking functions.
	is = {
	    object : function(o) { return o != null && typeof o === 'object' && !is.array(o) ; },
	    bool : function(o) { return typeof o === 'boolean' ; },
	    array : function(o) { return Object.prototype.toString.call(o) === '[object Array]' ; },
	    number : function(o) { return !isNaN(parseFloat(o)) && isFinite(o) ; },
	    string : function(o) { return typeof o === 'string' ; },
	    funct : function(o) { return typeof o === 'function' ; },
	    container : function(o) { return is.object(o) || is.array(o) ; },
	    empty : function(o) { for (undefined in o) return false ; return true ; },
	    constructor : function(o) { return o === 'constructor' ; }
	},

	// - Checks if an object owns a property.
	owns = function(object, property) { return object.hasOwnProperty(property) ; },

// Container utils //

	// - Clones an object deeply.
	clone = function(object) { var newObject = {} ; for (var p in object) { if (object.hasOwnProperty(p)) { if (object[p] != null && typeof object[p] === 'object') newObject[p] = clone(object[p]) ; else newObject[p] = object[p] ; }} return newObject ; },

	// - Copies all properties from a source to a target.
	copy = function(target, source) { target = target || {} ; for (var p in source) if (source.hasOwnProperty(p)) target[p] = source[p] ; return target ; },

// Math utils //

	// - A set of number parsing functions.
	num = function(value) { return parseInt(value, 10) ; },
	dot = function(value) { return parseFloat(value) ; },
	dot1 = function(value) { return num(dot(value)*10)/10 ; },
	dot2 = function(value) { return num(dot(value)*100)/100 ; },
	dot3 = function(value) { return num(dot(value)*1000)/1000 ; },

	// - Generates a random number.
	random = function($1, $2) {
		if ($1 == null) return Math.random() ;
		else if ($2 == null) return Math.random()*$1 ;
		else return $1+Math.random()*($2-$1) ;
	},

// Time utils //

	// - Generates the current timestamp.
	now = function() { return new Date().getTime() ; }

	;
