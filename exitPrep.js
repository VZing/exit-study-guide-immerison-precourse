// Your mission should you choose to accept it is to complete the following functions. 
// If you choose to do so, you may find that you are ready to crush it on the precourse exit.

// Remember your training:
    // Be sure you understand the instructions.
    // Pseudocode your logic.
    // Breathe.
    // You can do this.


/////////////////////////////////////////////////////////
// MANIPULATING COLLECTIONS
/////////////////////////////////////////////////////////


const pureShuffle = array => {
    // your code here
    //input array
    //output different shuffled array
    //constraints don't modify the original array
    let newArr = array.slice();
    let result = [];
    const { floor, random } = Math;
    while(newArr.length){
        let randIndex = floor(random() * newArr.length);
        result.push(newArr.splice(randIndex, 1)[0]);
    }
    return result;
};

const dirtyShuffle = (array) =>{
    const { random, floor } = Math;
    for(let i = array.length - 1; i > -1; i--){
        let ele = array[i];
        let temp = ele;
        let randomIndex = array[floor(random) * array.length];
       array[i] = array[randomIndex];
       array[randomIndex] = temp;
    }
    return array;
}

var isPalindrome = (string) => {
    // your code here
    //check if string.length is even number
    //if it is, split it in half, reverse 1 half and compare them
    //if it's an odd number, Math.floor to determine length of both halves
    //then split it, reverse one half and compare them
    //return a boolean
    console.log(string)
if(!string.length){
    return undefined;
}
  string = string.toLowerCase();
  let arr = string.split("");
  let stringNoSpaces = arr.join("")
 arr.reverse();
  let joined = arr.join("");
  if(stringNoSpaces === joined){
      console.log(true)
      return true;
  }else{
      console.log(false)
      return false;
  }
}

const mergeObjects = (...obj) => {
    // your code here
    return Object.assign(...obj)
};

const semiMergedObjects = (obj1, ...objs) =>{
    objs.forEach(obj => {
        for(let key in obj){
            if(!obj1[key]){
                obj1[key] = obj[key];
            }
        }
    })
    return obj1;
}



//////////////////////////////////////////////////////
// USING RECURSION
//////////////////////////////////////////////////////

var replaceValuesInObj = (obj, value, newValue) => {
    // your code here
    for(let key in obj){
        if(obj[key] === value){
            obj[key] = newValue;
        } else if (obj[key] instanceof Object){
            replaceValuesInObj(obj[key], value, newValue)
        }
    }
    return obj;
};

var addKeysToExistingObj = (obj, newKey, newValue) => {
    // your code here
    obj[newKey] = newValue;
    for(let key in obj){
        if(obj[key] instanceof Object){
            addKeysToExistingObj(obj[key], newKey, newValue)
        }
    }
    return obj;
};

var map = (arr, func) => {
    // your code here
    let result = [];
    if(arr.length){
        result.push(func(arr[0]))
        arr.splice(0, 1);
        map(arr, func)
    }
    return result;
}


/////////////////////////////////////////////////////////////////
// REDUCE VS CHAINED METHODS
/////////////////////////////////////////////////////////////////

var comedians = [
    { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
    { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
    { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
    { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
    { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
    { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
    { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
    { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
    { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
    { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
];

/* Solve by chaining native methods of map and filter only */
var comediansFilteredAndMapped = (comedians) => {
    let answer = [];
    // comedians.filter((actor) => {
    //     if (actor.begin >= 2005) {
    //         return actor
    //     }
    // }).map((actor) => {
    //     actor.name = actor.actor;
    //     actor.appearanceNumber = '#' + (actor.number);
    //     actor.seasonsActive = actor.end - actor.begin - 1;
    //     delete actor.actor;
    //     delete actor.number;
    //     delete actor.end;
    //     delete actor.begin;
    //     answer.push(actor);
    // })
    // console.log(answer);
    // return answer;
    comedians.filter((actor) => {
        if(actor.begin >= 2005){
            return actor; 
        }
    }).map((actor) => {
        let newActor = {
            name: actor.actor,
            appearanceNumber: '#' + actor.number,
            seasonsActive: actor.end - actor.begin + 1
        }
        answer.push(newActor)
    })
    // console.log(answer)
return answer;
};

var comedianNamesFilteredAndMapped = (comedians) => {
    // Your code here
    // - cast members added from the year 2005 to present
    // - cast members whose __full name__ have more than 10 letters
    let result = [];
    comedians.filter((actor) =>{
        if(actor.begin >= 2005){
            result.push(actor.actor);
        }
    })
    return result;
};




/* Solve by using native method of reduce only */
// - cast members added from the year 2005 to present
//     - cast members whose __full name__ have more than 10 letters

// It should:
// - Use`reduce`
//     - Make new keys(`appearanceNumber`, `name`, and`seasonsActive`)
// [
//     {
//         appearanceNumber: '#8',
//         name: 'Sterling K. Brown',
//         seasonsActive: 6
//     },
//     {
//         appearanceNumber: '#9',
//         name: 'Jay Pharoah',
//         seasonsActive: 7
//     },
//     {
//         appearanceNumber: '#10',
//         name: 'Leslie Jones',
//         seasonsActive: 5
//     }
// ]

// - cast members added from the year 2005 to present
//     - cast members whose __full name__ have more than 10 letters

// It should:
// - Use`reduce`
//     - Make new keys(`appearanceNumber`, `name`, and`seasonsActive`)
var comediansReduced1 = (comedians) => {


    return comedians.reduce((reduced, actor) =>{
      
        if(actor.begin >= 2005){
            let newActor = {
                name: actor.actor,
                appearanceNumber: '#' + actor.number,
                seasonsActive: actor.end - actor.begin + 1,
            }
            reduced.push(newActor)
        }
        console.log(reduced)
        return reduced;
    }, [])
    
};

var comediansReduced2 = (comedians) => {
    // Your code here
return comedians.reduce((reduced, actor) => {
    if(actor.begin >= 2005){
        reduced.push(actor.actor)
    }
    return reduced;
}, [])
};


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE
