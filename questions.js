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
		points: 2
	},
	{
		question:"What does 0 ^ 0 equal?",
		questionType: 1,
		choices: ["same as 0+0","same as 0*0","1",nUndefined],
		correctAns: nUndefined,
		points: 2
	},
	{
		question:"What is 5 - 9?",
		questionType: 2,
		choices: ["-1","1","-4","4"],
		correctAns: "-4",
		points: 4
	},
	{
		question:"What does 1 + 1 equal?",
		questionType: 1,
		choices: ["window","11","infinity",noSolution],
		correctAns: "window",
		points: 2
	},
	{
		question:"How many acute angles are in a rectangle?",
		questionType: 1,
		choices: ["0","1","2","3","4"],
		correctAns: "0",
		points: 4
	},
	{
		question:"What is square root of 4?",
		questionType: 1,
		choices: ["1","2","4","1/4"],
		correctAns: "2",
		points: 3
	},
	{
		question:"What is 2 * 3?",
		questionType: 2,
		choices: ["-6","6","5","-1"],
		correctAns: "6",
		points: 3
	}
];
var historyQuestions = [
	{
		question:"Which war was first?",
		questionType: 1,
		choices: ["World War I","World War II"],
		correctAns: "World War I",
		points: 7
	},
	{
		question:"World War II ended when Germany surrendured.",
		questionType: 1,
		choices: ["True","False"],
		correctAns: "False",
		points: 2
	},
	{
		question:"World War II ended when Japan surrendured.",
		questionType: 1,
		choices: ["True","False"],
		correctAns: "True",
		points: 2
	},
	{
		question:"Who did the US fight in the revolutionary war?",
		questionType: 1,
		choices: ["Britain","France","The South"],
		correctAns: "Britain",
		points: 5
	},
	{
		question:"Anne Frank and Martin Luther King were born the same year.",
		questionType: 1,
		choices: ["True","False"],
		correctAns: "True",
		points: 4
	}
];
var scienceQuestions = [
	{
		question:"What is symbol for Hydrogen?",
		questionType: 2,
		choices: ["C","F","H","K"],
		correctAns: "H",
		points: 2
	},
	{
		question:"What does the symbol O represent?",
		questionType: 1,
		choices: ["Zero","Oxygen","Organics",allOfAbove],
		correctAns: "Oxygen",
		points: 1
	},
	{
		question:"Which planet has human life?",
		questionType: 1,
		choices: ["The Sun","Venus","Earth",allOfAbove],
		correctAns: "Earth",
		points: 4
	},
	{
		question:"Which one of these live in the water?",
		questionType: 1,
		choices: ["Dog","Human","Whale","Koala"],
		correctAns: "Whale",
		points: 5
	},
	{
		question:"What is a change from liquid to solid?",
		questionType: 1,
		choices: ["condensation","boiling","melting","freezing"],
		correctAns: "freezing",
		points: 3
	},
	{
		question:"Natural selection is based on:",
		questionType: 1,
		choices: ["Survival of the fittest","Attractive qualities","Genetic Engineering"],
		correctAns: "Survival of the fittest",
		points: 5
	}
];