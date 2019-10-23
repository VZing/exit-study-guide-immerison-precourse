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
};

var isPalindrome = (string) => {
    // your code here
}

const mergeObjects = obj => {
    // your code here
};



//////////////////////////////////////////////////////
// USING RECURSION
//////////////////////////////////////////////////////

var replaceValuesInObj = (obj, value, newValue) => {
    // your code here
};

var addKeysToExistingObj = (obj, newKey, newValue) => {
    // your code here
};

var map = (arr, func) => {
    // your code here
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
    comedians.filter((actor) => {
        if (actor.begin >= 2005) {
            return actor
        }
    }).map((actor) => {
        actor.name = actor.actor;
        actor.appearanceNumber = '#' + (actor.number);
        actor.seasonsActive = actor.end - actor.begin + 1;
        delete actor.actor;
        delete actor.number;
        delete actor.end;
        delete actor.begin;
        answer.push(actor);
    })
    console.log(answer);
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
    // Your code here
    return comedians.reduce((actor) =>{
        if(actor.begin >= 2005){
            actor.name = actor.actor;
            actor.appearanceNumber = '#' + actor.number;
            actor.seasonsActive = actor.end - actor.begin + 1;
            delete actor.actor;
            delete actor.number;
            delete actor.begin;
            delete actor.end;   
        }
    }, [])

};

var comediansReduced2 = (comedians) => {
    // Your code here

};


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE
