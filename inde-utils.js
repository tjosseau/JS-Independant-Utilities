
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

// - Displays the arguments in the console, then returns them.
echo = function() { if (console) console.log.apply(console, arguments) ; return arguments.length === 1 ? arguments[0] : arguments ; },

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

// - Clones an object deeply.
clone = function(object) { var newObject = {} ; for (var p in object) { if (object.hasOwnProperty(p)) { if (object[p] != null && typeof object[p] === 'object') newObject[p] = clone(object[p]) ; else newObject[p] = object[p] ; }} return newObject ; },

// - Copies all properties from a source to a target.
copy = function(target, source) { for (var p in source) if (object.hasOwnProperty(p)) target[p] = source[p] ; }

;
