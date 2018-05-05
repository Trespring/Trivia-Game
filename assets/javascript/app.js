$("#start").on("click", function () {
	game.start();
})

$(document).on('click','#end',function(){
	game.done();
})

var questions = [{
	question: "What is a group of giraffes called?",
	answers: ["Graff", "Giant", "Ladder", "Tower"],
	correctAnswer: "Tower"
}, {
	question: "What is a group of flamingos called?",
	answers: ["Pageant", "Show", "Flamboyance", "Cabaret"],
	correctAnswer: "Flamboyance"
}, {
	question: "What is a group of cats called?",
	answers: ["Fluff", "Clowder", "Herd", "Claw"],
	correctAnswer: "Clowder"
}, {
	question: "What is a group of bison called?",
	answers: ["Brick", "Obstinancy", "Fortress", "Tower"],
	correctAnswer: "Obstinancy"
}, {
	question: "What is a group of hedgehogs called?",
	answers: ["Spike", "Function", "Array", "Spike"],
	correctAnswer: "Array"
}, {
	question: "What is a group of owls called?",
	answers: ["Study", "Class", "Library", "Parliament"],
	correctAnswer: "Parliament"
}, {
	question: "What is a group of otters called?",
	answers: ["Romp", "Mischief", "School", "Net"],
	correctAnswer: "Romp"
}, {
	question: "What is a group of Squirrels called?",
	answers: ["Menace", "Pavement", "Scurry", "Cumulus"],
	correctAnswer: "Scurry"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown: function () {
		game.counter--;
		$("#counter").html(game.counter);
		if (game.counter <= 0) {
			console.log("Time is up!");
			game.done();
		}
	},
	start: function () {
		timer = setInterval(game.countdown, 1000);
		$("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
		$("#start").remove();
		for (var i = 0; i < questions.length; i++) {
			$("#subwrapper").append("<h2>" + questions[i].question + "</h2");
			for (var j = 0; j < questions[i].answers.length; j++) {
				$("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
			}
		}
		$("#subwrapper").append('<br><button id="end">DONE!</button>');
	},

	done: function () {
		$.each($('input[name="question-0"]:checked'), function () {
			if ($(this).val() == questions[0].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-1"]:checked'), function () {
			if ($(this).val() == questions[1].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-2"]:checked'), function () {
			if ($(this).val() == questions[2].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-3"]:checked'), function () {
			if ($(this).val() == questions[3].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-4"]:checked'), function () {
			if ($(this).val() == questions[4].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-5"]:checked'), function () {
			if ($(this).val() == questions[5].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-6"]:checked'), function () {
			if ($(this).val() == questions[6].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-7"]:checked'), function () {
			if ($(this).val() == questions[7].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		this.result();
	},

	result: function () {
		clearInterval(timer);
		$("#subwrapper h2").remove();

		$("#subwrapper").html("<h2>All done!</h2>");
		$("#subwrapper").append("<h3>Correct Answers: " +this.correct + "</h3>");
		$("#subwrapper").append("<h3>Incorrect Answers: " +this.incorrect + "</h3>");
		$("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
	}





}

