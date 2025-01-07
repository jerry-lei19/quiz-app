  
  // answers.html for page2.html
  
  
  // JavaScript code to handle the next button on question 1 in page1.html
  function saveAnswer1() {
    // Prevent the form from submitting and navigating to answers.html
    event.preventDefault();
    const selectedAnswer = document.querySelector('input[name="indoor-outdoor1"]:checked').value;
    sessionStorage.setItem('indoor-outdoor1', selectedAnswer);
    
    // Get the selected answer
  
    
    // Redirect to the next question
    window.location.href = "page2.html";
}
    function saveAnswer2(){
        event.preventDefault();  
        const selectedAnswer = document.querySelector('input[name="indoor-outdoor2"]:checked').value;
        sessionStorage.setItem('indoor-outdoor2', selectedAnswer); 

    // Check if the next button should lead to answers.html

      // Redirect to answers.html
      window.location.href = "page3.html";
  }
  function saveAnswer3(){
    event.preventDefault();  
    const selectedAnswer = document.querySelector('input[name="indoor-outdoor3"]:checked').value;
    sessionStorage.setItem('indoor-outdoor3', selectedAnswer); 

// Check if the next button should lead to answers.html

  // Redirect to answers.html
  window.location.href = "page4.html";
}
function saveAnswer4(){
  event.preventDefault();  
  const selectedAnswer = document.querySelector('input[name="indoor-outdoor4"]:checked').value;
  sessionStorage.setItem('indoor-outdoor4', selectedAnswer); 

// Check if the next button should lead to answers.html

// Redirect to answers.html
window.location.href = "page5.html";
}
function saveAnswer5(){
 
  const selectedAnswer = document.querySelector('input[name="indoor-outdoor5"]:checked').value;
  sessionStorage.setItem('indoor-outdoor5', selectedAnswer); 

// Check if the next button should lead to answers.html

// Redirect to answers.html
window.location.href = !"page4.html";
}
