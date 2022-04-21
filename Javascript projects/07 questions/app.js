//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function(){
    // this here to close inactive questions
    questions.forEach(function(item) {
      if (item !==question) {
        item.classList.remove("show-text");
      }
    });
    // this here to close inactive questions
    question.classList.toggle("show-text");
  });
});



// traversing the dom


// const btns = document.querySelectorAll(".question-btn");
//
// btns.forEach(function(btn){
//   btn.addEventListener("click", function(e) {
//     // the way to acces the parent element - here used twice
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
