var allOfAbove = "All of the above";
var noneOfAbove = "None of the above";
var nUndefined = "n is undefined";
var noSolution = "no solution";
var subjects = ["Math","History","Science"];
var mathQuestions = [
	{
		question:"(2 ^ 2) = n. What is n?",
		questionType: 1,
		choices: ["same as 2+2","same as2*2","same as 2^2",allOfAbove],
		correctAns: allOfAbove,
	},
	{
		question:"What does 0 ^ 0 equal?",
		questionType: 1,
		choices: ["same as 0+0","same as 0*0","1",nUndefined],
		correctAns: nUndefined,
	},
	{
		question:"What does 1 + 1 equal?",
		questionType: 1,
		choices: ["window","11","infinity",noSolution],
		correctAns: "window",
	},
	{
		question:"How many acute angles are in a rectangle?",
		questionType: 1,
		choices: ["0","1","2","3","4"],
		correctAns: "0",
	},
	{
		question:"What is 5 - 9?",
		questionType: 1,
		choices: ["-1","1","-4","4"],
		correctAns: "4",
	}
];
var historyQuestions = [
	{
		question:"Which war was first?",
		questionType: 1,
		choices: ["World War I","World War II"],
		correctAns: "World War I",
	},
	{
		question:"World War II ended when Germany surrendured.",
		questionType: 1,
		choices: ["True","False"],
		correctAns: "False",
	},
	{
		question:"World War II ended when Japan surrendured.",
		questionType: 1,
		choices: ["True","False"],
		correctAns: "True",
	},
	{
		question:"Who did the US fight in the revolutionary war?",
		questionType: 1,
		choices: ["Britain","France","The South"],
		correctAns: "Britain",
	},
	{
		question:"Anne Frank and Martin Luther King were born the same year.",
		questionType: 1,
		choices: ["True","False"],
		correctAns: "True",
	}
];
var scienceQuestions = [
	{
		question:"What is O?",
		questionType: 1,
		choices: ["Zero","Oxygen","Organics",allOfAbove],
		correctAns: "Oxygen",
	},
	{
		question:"Which planet has human life?",
		questionType: 1,
		choices: ["The Sun","Venus","Earth",allOfAbove],
		correctAns: "Earth",
	},
	{
		question:"Which one of these live in the water?",
		questionType: 1,
		choices: ["Dog","Human","Whale","Koala"],
		correctAns: "Whale",
	},
	{
		question:"What is a change from liquid to solid?",
		questionType: 1,
		choices: ["condensation","boiling","melting","freezing"],
		correctAns: "freezing",
	},
	{
		question:"Natural selection is based on:",
		questionType: 1,
		choices: ["Survival of the fittest","Attractive qualities","Genetic Engineering"],
		correctAns: "Survival of the fittest",
	}
];