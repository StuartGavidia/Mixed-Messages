//Have 3 arrays for noun, verb, and adjective
//Create function that picks out 1 from each array and returns a string of sentence
//Console.log output from function

const nouns = ["Bird", "Car", "House"];
const verbs = ["Run", "Jump", "Fly"];
const adjectives = ["Red", "Strong", "Fast"];
const places = ["White House", "LA Fitness Center", "Basketball Court"];

function generateSentence(){
    let sentence = "";
    
    let noun = nouns[Math.floor(Math.random() * nouns.length)];
    let verb = verbs[Math.floor(Math.random() * verbs.length)];
    let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let place = places[Math.floor(Math.random() * places.length)];

    sentence = `The ${adjective} ${noun} will ${verb} to the ${place}`;

    return sentence;
}

console.log(generateSentence());
