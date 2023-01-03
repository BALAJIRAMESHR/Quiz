var data = [
    {
        "qs":"Q1. Who developed Python Programming Language? ",
        "options":[
           "Wick van Rossum",
           "Rasmus Lerdorf" ,
           "Guido van Rossum",
           "Niene Stom"

        ],
        "answerId": 2
        
    },
    {
        "qs":"Q2.  Which type of Programming does Python support?",
        "options":[
            "object-oriented programming",
            "structured programming",
            "functional programming",
            "all of the mentioned"

        ],
        "answerId": 3
        
    },
    {
        "qs":"Q3.Is Python case sensitive when dealing with identifiers? ",
        "options":[
            "no",
            "yes",
            "machine dependent",
            "none of the mentioned"

        ],
        "answerId": 3
        
    },
    {
        "qs":"Q4.Which of the following is the correct extension of the Python file? ",
        "options":[
            ".python",
            ".pl",
            ".py",
            ".p"
        ],
        "answerId": 2
        
    },
    {
        "qs":"Q5.Which keyword is used for function in Python language?",
        "options":[
            "Function",
            "def",
            "Fun",
            "Define"

        ],
        "answerId": 1
        
    },
    {
        "qs":"Q6.Which of the following character is used to give single-line comments in Python?",
        "options":[
            "//",
            "#",
            "/*",
            "!"

        ],
        "answerId": 1
        
    },
    {
        "qs":"Q7.Which of the following functions can help us to find the version of python that we are currently working on?",
        "options":[
            "sys.version(1)",
            "sys.version(0)",
            "sys.version()",
            "sys.version"

        ],
        "answerId": 3
        
    },
    {
        "qs":"Q8.What does pip stand for python?",
        "options":[
            "Pip Installs Python",
            "pip Installs Packages",
            "Preferred Installer Program",
            "All of the mentioned"

        ],
        "answerId": 2
        
    },
    {
        "qs":"Q9. Which of the following is the truncation division operator in Python?",
        "options":[
            "%",
            "|",
            "//",
            "!"

        ],
        "answerId": 2
        
    },
    {
        "qs":"Q10.Which of the following functions is a built-in function in python?",
        "options":[
            "factorial()",
            "print()",
            "seed()",
            "sqrt()"

        ],
        "answerId": 1
        
    },
   
]
let questionNo=0;
let score=0;
let question_title=document.getElementById('question_title');
let option_list=document.getElementById("option_list");
let scorearea=document.getElementById("score-area");
let btn_submit=document.getElementById("submit");
let start=document.getElementById("start");
let btn_again=document.getElementById("again");
let enjoy=document.getElementById("started");
let quiz=document.getElementById("quiz");


hideItems(question_title);
hideItems(option_list);
hideItems(btn_submit);
hideItems(btn_again);
hideItems(scorearea);
hideItems(enjoy);


//start btn click
start.addEventListener('click',function () {
    show(question_title);
    show(option_list);
    show(btn_submit);
    loadQuestions();
    hideItems(start);
    hideItems(enjoy);
    hideItems(quiz);
});


function loadQuestions(){
// check question is available;
    if (questionNo < data.length){
        let q=data[questionNo].qs;
        let optionsArray=data[questionNo].options;

        // display question
        question_title.innerText = q;

        option_list.innerText =" ";

        for (let i=0; i<optionsArray.length;i++){
            // console.log(i)
            option_list.innerHTML=  option_list.innerHTML +
            `
             <input type="radio" id="${i}" name="${question_title}">${optionsArray[i]}</input><br>
            `;
        }
    }else{
        console.log("NO more question")
        show(scorearea);
        scorearea.innerText="Your Score:"+ score;
        hideItems(btn_submit);
        hideItems(question_title);
        hideItems(option_list);
        show(btn_again);
        show(enjoy);
        hideItems(quiz);

    }
}
btn_again.addEventListener('click',function(){
    location.reload();

})



btn_submit.addEventListener('click',function () {
    // get checked id
    let id = getCheckedId();
    //compare id to db
    try{
        if(id == data[questionNo].answerId) {
            
            score++;
            console.log("correct answer")
        }
    }catch(error){



    }
    //question no ++;
    questionNo++;

    //load next question
    loadQuestions()
    
})


function getCheckedId() {
    for (let i = 0; i < 4; i++){
        if(document.getElementById(i).checked){
            console.log("you selected:" + i);
            return i;
        }

    }
}

function hideItems(element){
    element.style.display="none";

}
function show(element){
    element.style.display="block";
}
