let array = ['Mario', 'Happy', 'Playing'];

function tellStory(name, mood, activity) {
    inputName = name;
    inputMood = mood;
    inputActivity = activity;

    return `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The End.`
}

console.log(tellStory(array[0], array[1], array[2]));