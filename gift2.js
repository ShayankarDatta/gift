function fun() {

  document.getElementById("n").style.display="block";

    var name=document.getElementById("signin").value;
    
    document.getElementById("n1").innerHTML =name;
     myVar1 = setTimeout(alertFunc1, 3000);  
     for ( i = 0; i < 20000; i++ ) {
    var t = document.getElementById('n1');
    var z = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    t.style.color = z
}
}

function alertFunc1() {
  document.getElementById("cont").innerHTML="Ok I have some pictures of Arpita Dutta. Can you please check which one is you among those &#129300;";
}



function fun1(){
   document.getElementById("h1").style.display="block";
    myVar = setTimeout(alertFunc, 13000);
    myVar2 = setTimeout(alertFunc2, 14000);
    myVar3 = setTimeout(alertFunc3, 15000);
    myVar4 = setTimeout(alertFunc4, 16000);
    myVar5 = setTimeout(alertFunc5, 17000);

}
function alertFunc() {
  document.getElementById("h2").innerHTML="Thanks for choosing<br>Now I am connecting my self with your mind... &#129488;";
}
function alertFunc2() {
  document.getElementById("d1").innerHTML="You are little gumphy &#129301; but very sweet &#129321;";
}
function alertFunc3() {
  document.getElementById("d2").innerHTML="Little lazy &#129317; but fresh from mind &#129322;";
}

function alertFunc4() {
  document.getElementById("d3").innerHTML="You are very friendly &#128519; but<br>love to play PUBG more &#128528;";
}
function alertFunc5() {
  document.getElementById("d4").innerHTML="Enter my prediction skill here: (1 to 10) Then I will say more";
}



function datee(){
   document.getElementById("divv").style.display="block";

    var name1=document.getElementById("inp").value;
    if(name1>=6){
      document.getElementById("divvv").innerHTML ="&#128513;";
    }
    else{
      document.getElementById("divvv").innerHTML ="&#128557;";
    }
    
       myVar6 = setTimeout(alertFunc6, 5000);
       myVar7 = setTimeout(alertFunc7, 6000);
       myVar8 = setTimeout(alertFunc8, 3000);
       myVar9 = setTimeout(alertFunc9, 7000);
}
function alertFunc6() {
  document.getElementById("d5").innerHTML="Wait...I can see something more...<br>Have you something special today? &#128064;";
}
function alertFunc7() {
  document.getElementById("d6").innerHTML="Let me check today's date &#8986;";
}

function alertFunc8() {
  document.getElementById("d10").innerHTML="And actually you know that I know everythig about you &#128540;";
}

function alertFunc9() {
  document.getElementById("d11").innerHTML="Please: ";
}




// var questions = [
//     'Whats your name ?',
//     'Where are you from?',
//     'What\'s your age?',
//     'What profile you are working on?',
//     'It was nice talking you :)'
// ];
// var num = 0;

// var inputBox = document.querySelector("#ans");
// var output = document.querySelector("#result");
// output.innerHTML = questions[num];

// function showResponse() {
//   var input = inputBox.value;
//   if(inputBox.value == "") {
    
//   }else {
//   if(num == 0) {
//     output.innerHTML = `Hii ${input}`;
//     inputBox.value = "";
//     inputBox.setAttribute("placeholder", "Wait for 2 secs");
//     ++num;
//     setTimeout(changeQuestion, 2000);
//   } else if(num == 1) {
//     output.innerHTML = `${input} must be a good place`;
//     inputBox.value = "";
//     inputBox.setAttribute("placeholder", "Wait for 2 secs");
//     ++num;
//     setTimeout(changeQuestion, 2000);
//   } else if(num == 2) {
//     output.innerHTML = `So you are ${2017 - input} born`;
//     inputBox.value = "";
//     inputBox.setAttribute("placeholder", "Wait for 2 secs");
//     ++num;
//     setTimeout(changeQuestion, 2000);
//   } else if(num == 3) {
//     output.innerHTML = `Awesome ${input}`;
//     inputBox.value = "";
//     inputBox.setAttribute("placeholder", "Wait for 2 secs");
//     ++num;
//     setTimeout(changeQuestion, 2000);
//   }
//   }
// }

// function changeQuestion() {
//   inputBox.setAttribute("placeholder", "Enter your response");
//   output.innerHTML = questions[num];
//   if(num == 4) {
//     inputBox.style.display = "none";
//   }
// } 

// $(document).on('keypress', function(e) {
//   if(e.which == 13) {
//     showResponse();
//   }
// })

// $( "#ans" ).focus();
