//const question = "ゲーム市場、最も売れたゲーム機はどれ";
//const answers = ["super famicon", "playstation2", "nintendo switch", "xbox360"];
//const correct = "playstation2";

const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機はどれ",
    answers: ["super famicon", "playstation2", "nintendo switch", "xbox360"],
    correct: "playstation2"
  },{
    question: "あほ",
    answers: ["super famicon", "playstation2", "nintendo switch", "xbox360"],
    correct: "playstation2"
  },{
    question: "どこ",
    answers: ["super famicon", "playstation2", "nintendo switch", "xbox360"],
    correct: "playstation2"
  }
]
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
//console.log(document.getElementById("js-question").textContent);

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let i = 0;
    //let buttonLength = $button.length;
    while(i<buttonLength){
        $button[i].textContent = quiz[quizIndex].answers[i];
        i++;
    }
};

setupQuiz()

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解");
        score++;
    }else{
        window.alert("不正解");
    }

    quizIndex++;

    if(quizIndex < quizLength){
      //まだ問題がある
      setupQuiz();
    }else{
      window.alert("終了! あなたの正解数は" + score + "/" + quizLength + "です。");

    }
}
//ボタンを押したら正誤判定


let handleIndex = 0;
while(handleIndex < buttonLength){
  $button[handleIndex].addEventListener("click", (e) => {
      clickHandler(e);
  });
  handleIndex++;
};
