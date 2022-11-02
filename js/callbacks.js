// console.log('It me. Callbacks!');


/*
    JavaScript Callbacks
*/

function filter(anArr){
    let output = [];
    for (let element of anArr){
        if (element % 2 === 0){ // Logic that determines if filtered
            output.push(element);
        };
    };
    return output;
};


let numbers = [5, 10, 15, 20, 25, 30, 35, 40];

console.log(filter(numbers));


// Create a function to filter out based on any true condition from a function

function fliterWithCallback(anArr, callbackFn){
    let output = [];
    for (let element of anArr){
        if (callbackFn(element)){ // Logic that determines if filtered
            output.push(element);
        };
    };
    return output;
}


function isOdd(num){
    return num % 2 === 1;
}

console.log(fliterWithCallback(numbers, isOdd));

console.log(fliterWithCallback(numbers, num => num >= 20));

// isOdd and the arrow function are considered callback functions (because they are passed into another function as an argument to be executed later)
// filterWithCallback is considereed a higher-order function (because it accept a function as an argument)
console.clear();



// Async Example
function first(){
    setTimeout(() => {
        console.log('First')
    }, 3000);
};

function second(){
    console.log('Second');
};


// first();
// second();


// Real-ish life example

// Create a function that wil take in a song name, download the song, and then play the song

// function downloadSong(songName){
//     console.log(`Downloading ${songName}...`)
//     setTimeout(() => {
//         console.log('Finished Downloading')
//         return songName
//         // return {title: songName, artist: 'Chief Keef'}
//     }, 3000)
// }

// function playSong(songName){
//     let song = downloadSong(songName);
//     console.log(`${song} is playing`)
//     // console.log(`${song.title} by ${song.artist} is playing...`)
// }

// playSong('Love Sosa');


// Fix the issue with Callbacks!

function downloadSong(songName, callback){
    console.log(`Downloading ${songName}...`)
    setTimeout(() => {
        console.log('Finished Downloading')
        callback(songName)
        // return {title: songName, artist: 'Chief Keef'}
    }, 3000)
}

function playSong(song){
    console.log(`${song} is playing`)
}

downloadSong('Love Sosa', playSong);


// Send it to a friend
downloadSong("Don't Like", (song) => console.log(`Sending ${song} to a friend...`));



// Handling Errors

// 

function downloadSong2(songName, callbackSuccess, callbackFail){
    console.log(`Searching for ${songName} in our database...`);
    setTimeout(() => {
        // Simulate a valid song choice
        let song;
        if (songName.length > 4){
            song = {
                title: songName,
                artist: 'Pitbull',
                duration: '3:25'
            }
            callbackSuccess(song);
        } else {
            callbackFail(songName);
        }
    }, 3000);
};

let songChoice = 'Wonderwall';

downloadSong2(
    songChoice, 
    s => console.log(`${s.title} by ${s.artist} is playing for the next ${s.duration}`),
    s => console.log(`${s} is not in our database. Please try another song.`)
);
