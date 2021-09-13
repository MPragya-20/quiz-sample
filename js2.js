
const answers_2 = {
    "ans1" : "C720",
    "ans2" : "C2x",
    "ans3" : "C0",
    "ans4" : "B6",
    "ans5" : "DNone of the above"
}
var id;
let score_2 = 0;
const answerClick =()=>{
    $(".answer").click(function(){
       id = $(this).parent().attr("id")
       $('#'+id+'>'+'.answer').css("background-color","white")
       $(this).css("background-color","skyblue")
       
        if (($(this).text()) == answers_2.ans1 || ($(this).text()) == answers_2.ans2 ||($(this).text()) == answers_2.ans3 ||($(this).text()) == answers_2.ans4||($(this).text()) == answers_2.ans5){
            score_2+=1;
        }

    });
}
answerClick();


function reset(){
    location.reload();
}

function submit(){
    let content = "<h1 class=\"content\">Hi,<br>Your score is "+score_2+" / 5<br><br><span>Powered by Quicky</span></h1><br><br><h1>Share to</h1> <br> <div><div class=\"social\"><a href='https://www.facebook.com/'><i class=\"fa fa-facebook\"></i></a></div></div>"
    $("#prog_main_div").html(content);
}

