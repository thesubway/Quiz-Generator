var allOfAbove = "All of the above";
var noneOfAbove = "None of the above";
var nUndefined = "n is undefined";
var noSolution = "no solution";
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