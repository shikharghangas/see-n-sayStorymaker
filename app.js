// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables -------------------------------------------------- */
var synth = window.speechSynthesis;
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');

const words1 = ["The turkey", "Mom", "Dad", "The dog", "The teacher", "The elephant", "The cat"];
const words2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const words3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const words4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const words5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

let currentWords = [];
let counters = {
	'1': 0,
	'2': 0,
	'3': 0,
	'4': 0,
	'5': 0
};

function generateRandomWord(type) {
	let word;
	switch (type) {
		case '1':
			word = words1[counters[type] % words1.length];
			counters[type]++;
			break;
		case '2':
			word = words2[counters[type] % words2.length];
			counters[type]++;
			break;
		case '3':
			word = words3[counters[type] % words3.length];
			counters[type]++;
			break;
		case '4':
			word = words4[counters[type] % words4.length];
			counters[type]++;
			break;
		case '5':
			word = words5[counters[type] % words5.length];
			counters[type]++;
			break;
		default:
			word = '';
	}
	document.getElementById('story').innerHTML = word + ' ';
	currentWords[type - 1] = word;
	speakWord(word); // Speak the word immediately after it's generated
}

function speakWord(word) {
	if ('speechSynthesis' in window) {
		const synth = window.speechSynthesis;
		const utterance = new SpeechSynthesisUtterance(word);
		synth.speak(utterance);
	} else {
		alert('Sorry, your browser does not support speech synthesis.');
	}
}

function resetStory() {
	document.getElementById('story').innerHTML = '';
	currentWords = [];
	counters = {
		'1': 0,
		'2': 0,
		'3': 0,
		'4': 0,
		'5': 0
	};
}

function generateRandomStory() {
	document.getElementById('story').innerHTML = '';
	currentWords = [];
	counters = {
		'1': 0,
		'2': 0,
		'3': 0,
		'4': 0,
		'5': 0
	};
	let story = '';
	story += words1[Math.floor(Math.random() * words1.length)] + ' ';
	story += words2[Math.floor(Math.random() * words2.length)] + ' ';
	story += words3[Math.floor(Math.random() * words3.length)] + ' ';
	story += words4[Math.floor(Math.random() * words4.length)] + ' ';
	story += words5[Math.floor(Math.random() * words5.length)] + ' ';
	document.getElementById('story').innerHTML = story;
	speakWord(story);
}
