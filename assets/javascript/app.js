//music trivia code

//create object
var wins = 0;
var losses = 0;
var questions = [
{
userQuest:"What did \"Weird Al\" Yankovic call his album that contained a parody of a song from Michael Jackson's album BAD?",
userAnswer:["Baddest","Even Worse","Badder","Good"],
correctAnswer:1
//Even Worse
},
{
userQuest:"What band leader was known as \"the King of Swing\"?",
userAnswer:["Tommy Dorsey","Benny Goodman","Guy Lombardo","Glenn Miller"],
correctAnswer:1
//Benny Goodman
},
{
userQuest:"Which one of these four Australian terms can be found in the lyrics of the song \"Waltzing Matilda\" is a tree?",
userAnswer:["billabong","coolibah","jumbuck","tucker\-bag"],
correctAnswer:1
//coolibah
},
{
userQuest:"Which of the following musicals was based on Thornton Wilder's comedy The Matchmaker?",
userAnswer:["Hello, Dolly!","The Music Man","Take Me Along","The Unsinkable Molly Brown"],
correctAnswer:0
//Hello, Dolly!
},
{
userQuest:"What symphony's last movement includes a setting of Schiller's poem \"Hymn to Joy\"?",
userAnswer:["Beethoven's Ninth","Bruckner's Eight","Mahler's Tenth","Mozart's 40th"],
correctAnswer:0
//Beethoven's Ninth
},
{
userQuest:"Gloria Estefan broke her back in what kind of accident?",
userAnswer:["She fell off a stage","She was in a helicopter crash","A tour bus accident"," A car accident"],
correctAnswer:2
//A tour bus accident
},
{
userQuest:"The sonnet that starts out \"The world is charged with the grandeur of God\" was written by whom?",
userAnswer:["Gerard Manley Hopkins","Henry Wadsworth Longfellow","Alfred, Lord Tennyson","Oscar Wilde"],
correctAnswer:0
//Gerard Manley Hopkins
},
{
userQuest:"\"A wandering minstrel\" and \"Titwillow\" are songs contained in which comic opera by Gilbert and Sullivan?",
userAnswer:["The Gondoliers","The Mikado","H.M.S. Pinafore","The Pirates of Penzance"],
correctAnswer:1
//The Mikado
},
{
userQuest:"The piano piece known as \"The Minute Waltz\" was written by whom?",
userAnswer:["Johannes Brahms","Frederic Chopin","Franz Liszt","Sergei Rachmaninoff"],
correctAnswer:1
//Frederic Chopin
},
{
userQuest:"The musical work, The Sorcerer's Apprentice, was written by whom?",
userAnswer:["Paul Dukas","Wolfgang Amadeus Mozart","Maurice Ravel","Camille Saint-Saens"],
correctAnswer:0
//Paul Dukas
},
{
userQuest:"A song called \"Party All the Time\", released in 1985, reached the # 2 spot on Billboard's pop charts. Which Saturday Night Live actor recorded the song?",
userAnswer:["Garrett Morris","Eddie Murphy","Bill Murray","Joe Piscopo"],
correctAnswer:1
//Eddie Murphy
},
{
userQuest:"Two of Barbara Cook's most popular songs, \"Dear Friend\" and \"Vanilla Ice Cream\", were provided by what musical?",
userAnswer:["Candide","Carousel","The Music Man","She Loves Me"],
correctAnswer:3
//She Loves Me
}

]

window.onload = function() {
	for (var i=0; i<questions.length; i++) {
		$('#question').html(questions[i].userQuest);

		var question = questions[i];
		for (var x=0; x<question.userAnswer.length; x++) {
			switch (x){
case 0:
$('#ans0').html(question.userAnswer[x]);
				userAns = x			
				break;
				case 1:
$('#ans1').html(question.userAnswer[x]);		
				userAns = x
				break;
				case 2:
$('#ans2').html(question.userAnswer[x]);
				userAns = x
				break;
				case 3:
$('#ans3').html(question.userAnswer[x]);
				userAns = x
				break;	
			}
			console.log(question.userAnswer[x])
		}
		// code to check userAnswer to see if it matches correctAnswer
		if (userAns === questions.correctAnswer) {
			wins++
		}
		else {
			losses--
		}
	}
}
// getAnswer: function(){
// 	$('#ans0').on('click', questions.ans0);
// 	$('#ans1').on('click', questions.ans1);
// 	$('#ans2').on('click', questions.ans2);
// 	$('#ans3').on('click', questions.ans3);

// }
// code for countdown timer

  

var stopwatch = {
  time:1000*30,
  reset: function(){
    $('#display').html('00:30');
  },
  start: function(){
    counter = setInterval(stopwatch.count, 1000);
  },
  stop: function(){
    clearInterval(counter);
  },
  count: function(){
    stopwatch.time--;
    var converted = stopwatch.timeConverter(stopwatch.time);
    $('#display').html(converted);
  },
  timeConverter: function(t){
    var seconds = (1000 * 30);
    if (seconds < 10){
      seconds = "0" + seconds;
    }

  }

};