/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */



//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare search function that takes an array (animals) and a string as inputs
// function looks through animals array and returns animal's object if that name exists.
// function returns null if no animals with that name exists.
function search(array, string) {
    for (var i = 0; i < array.length; i++) {
        var x = array[i].name;
        if ( x === string) {
            return array[i];
        } 
    } if (x !== string) {
        return null;
    }

}
console.log(search(animals, 'Rui'));
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// function takes three inputs: array of animals, string rep name of animal, and object rep replacement animal
// function searches animals array for string, if match exists, it replaces its entire object with replacement object
// otherise does nothing

function replace(array, string, object) {
var x = search(array, string);
    if (x !== null) {
    return array.splice(x, 1, object);
}
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(array, name) {
    var x = search(array, name);
    if (x !== null) {
        return array.splice(x, 1);
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(array, object) {
    
    if (object.hasOwnProperty('species') === true && object.hasOwnProperty('name') === true) {
        var x = search(array, object.name);
    } if (x === null) {
    return array.push(object);
}
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}