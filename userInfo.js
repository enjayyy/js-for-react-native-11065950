/*Takes an array of names and the array of modified names from Task 2.
- Returns an array of objects, each containing originalName, modifiedName,
and id (auto-incremented starting from 1). */

import {strings,formatArrayStrings} from '/.arrayManipulation.js'

function createUserProfiles ( strings, formatArrayStrings){
    if (strings.length !== formatArrayStrings.length){
        console.log("Arrays should be the same length");
    }

    const userProfiles=[];
    let id=1;

    for(let i=0; i<strings.length; i++){
        userProfiles.push({
            originalName: strings[i],
            modifiedName: formatArrayStrings,
            id: id++,
        })
    }
    return userProfiles;
} 

const profiles = createUserProfiles(strings, formatArrayStrings);
console.log(profiles);