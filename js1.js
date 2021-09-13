$(document).ready(function(){
    $(".start-quiz").click(function(){
        const choice = $("input[name='choice']:checked").val();
        if (choice === 'Mathematics'){
            $(".start-quiz-div").attr("href","math.html");
        }
        else if (choice === 'Programming'){
            $(".start-quiz-div").attr("href","programming.html");
        }
        else if(choice === 'Current Affairs') {
            $(".start-quiz-div").attr("href","current_affairs.html");
        }
    });

});
const answers_1 = {
    "ans1" : "BGuido Van Rossum",
    "ans2" : "ABjarne Stroustroup",
    "ans3" : "Cprint(\"Hello World\")",
    "ans4" : "DHyperText Markup Language",
    "ans5" : "CHyperText Preprocessor"
}
var id;
let score_1 = 0;
const answerClick =()=>{
    $(".answer").click(function(){
       id = $(this).parent().attr("id")
       $('#'+id+'>'+'.answer').css("background-color","white")
       $(this).css("background-color","skyblue")
       
        if (($(this).text()) == answers_1.ans1 || ($(this).text()) == answers_1.ans2 ||($(this).text()) == answers_1.ans3 ||($(this).text()) == answers_1.ans4||($(this).text()) == answers_1.ans5){
            score_1+=1;
        }

    });
}
answerClick();


function reset(){
    location.reload();
}


function submit(){
    let content = "<h1 class=\"content\">Hi,<br>Your score is "+score_1+" / 5<br><br><span>Powered by Quicky</span></h1><br><br> <h1>Share to</h1> <br><div><div class=\"social\"><a href='https://www.facebook.com/'><i class=\"fa fa-facebook\"></i></a></div></div>"
    $("#prog_main_div").html(content);
}
