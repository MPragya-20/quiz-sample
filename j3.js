
const answers_3 = {
    "ans1" : "BCo-WIN",
    "ans2" : "CMaharashtra",
    "ans3" : "BChhattisgarh",
    "ans4" : "CChina",
    "ans5" : "ADelhi"
}
var id;
let score_3 = 0;
const answerClick =()=>{
    $(".answer").click(function(){
       id = $(this).parent().attr("id")
       $('#'+id+'>'+'.answer').css("background-color","white")
       $(this).css("background-color","skyblue")
       
        if (($(this).text()) == answers_3.ans1 || ($(this).text()) == answers_3.ans2 ||($(this).text()) == answers_3.ans3 ||($(this).text()) == answers_3.ans4||($(this).text()) == answers_3.ans5){
            score_3+=1;
        }

    });
}
answerClick();


function reset(){
    location.reload();
}

function submit(){
    let content = "<h1 class=\"content\">Hi,<br>Your score is "+score_3+" / 5<br><br><span>Powered by Quicky</span></h1><br><br><h1>Share to</h1> <br> <div><div class=\"social\"><a href='https://www.facebook.com/'><i class=\"fa fa-facebook\"></i></a></div></div>"
    $("#prog_main_div").html(content);
}


