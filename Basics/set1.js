//Question 1 and 2
let n = "String"
let num = 5
console.log("Sum of name and num is " + n + num);
console.log(typeof (n));

//Creation const object and displaying it keys
const object = {
    obj1: 1,
    obj2: 2,
    obj3: "name",
    isAdult: true
};
console.log(object.obj1);
console.log(object.obj2);
console.log(object.obj3);
console.log(object.isAdult);

//Adding new key to the const object
object.age = 20;
console.log(object.age);

// Create a word-meaning dictionary
const dictionary = {
    "serene": "calm, peaceful, and untroubled",
    "eloquent": "fluent or persuasive in speaking or writing",
    "vivid": "producing powerful feelings or strong, clear images in the mind",
    "resilient": "able to withstand or recover quickly from difficult conditions",
    "benevolent": "well-meaning and kindly"
};

// Print the dictionary
console.log("Word Meaning Dictionary:");
for (const word in dictionary) {
    console.log(`${word}: ${dictionary[word]}`);
}
