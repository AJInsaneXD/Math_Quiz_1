function send(){
    number1 =document.getElementById("number1").value;
    number1 =document.getElementById("number1").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 = " X "+number2 +"</h4>":
input_box "<br>Answer : <input type="text" id="input_check_box">";
check_button ="<br><br><button class btn btn-info" onclick="check()">Check</button>";
row = question_number + input_box + check_button;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

question_turn = "player1";
answer_turn = "player2";
}

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answer_turn == "player_1"){
            player_1_score = player_1_score + 1;
            document.getElementById("scoreplayer1").innerHTML = player_1_score;
        }
        else{
            player_2_score = player_2_score +1;
            document.getElementById("scoreplayer2").innerHTML = player_2_score;
        }
    }
        if(question_turn == "player_1"){
            question_turn = "player_2"
            document.getElementById("player_question").innerHTML = "Question turn - "+ Player_2_name;
        }
        else{
            question_turn = "player_1"
            document.getElementById("player_question").innerHTML = "Question turn - "+ Player_1_name;
        }
        if(answer_turn == "player_1"){
            answer_turn = "player_2"
            document.getElementById("player_answer").innerHTML = "Answer turn - "+ Player_2_name;
        }
        else{
            answer_turn = "player_1"
            document.getElementById("player_answer").innerHTML = "Answer turn - "+ Player_1_name;
        }
    document.getElementById("output").innerHTML = "";
    }
    
}