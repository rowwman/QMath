// Define questions for each level
const questions = {
  algebra1: [
      {
          text: "What is the value of x in the equation 2x + 5 = 15?",
          choices: ["5", "6", "7", "8"],
          correctAnswer: "5"
      },
      {
          text: "Simplify: 3(x + 2)",
          choices: ["6x + 12", "3x + 6", "3x - 6", "6x - 12"],
          correctAnswer: "3x + 6"
      },
      {
        text: "If 3x + 5y = 24 and x = 3, find the value of y.",
        choices: ["6", "8", "4", "3"],
        correctAnswer: "3"
      },
      {
        text: "What is the reciprocal of 5?",
        choices: ["-5", "1/5", "-1/5", "1"],
        correctAnswer: "1/5"
      },
      {
        text: "If a line has a slope of -6 and the line goes through the point (0,7), what is the equation of the line?",
        choices: ["y = -6x + 7", "y = 7x - 6", "x = -6y + 7", "y = -6x"],
        correctAnswer: "y = -6x + 7"
      }
  ],
  geometry: [
      {
          text: "What is the formula for the area of a rectangle?",
          choices: ["Length × Width", "πr^2", "1/2 × base × height", "1/3 × base × height"],
          correctAnswer: "Length × Width"
      },
      {
          text: "What is the sum of the interior angles of a triangle?",
          choices: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
          correctAnswer: "180 degrees"
      },
      {
        text: "Triangle ABC has two angles that are defined. Angle A is 58 degrees and angle B is 22 degrees. What is the value of angle C?",
        choices: ["130", "42", "100", "10"],
        correctAnswer: "100"
      },
      {
        text: "All of the above are ways to prove a triangle is congruent except:",
        choices: ["SSS", "HL", "ASA", "AAA"],
        correctAnswer: "AAA"
      },
      {
        text: "Which of the following triangles always have 2 equal sides?",
        choices: ["Isosceles Triangle", "Equilateral Triangle", "Scalene Triangle", "Right Triangle"],
        correctAnswer: "Isosceles Triangle"
      },
  
  ],
  algebra: [
    {
      text: "Solve the systems of equations. x = -3y + 4, y + 4x = -6",
      choices: ["x = -5, y = 3", "x = 3, y = -5", "x = -5, y = -3", "x = -2, y = 6"],
      correctAnswer: "x = -5, y = 3"
    },
    {
      text: "Find the solutions to the quadratic equation: x^2 + 5x + 6 = 0",
      choices: ["x = -2, x = -3", "x = -2, x = 3", "x = 2, x = 3", "x = -1, x = -6"],
      correctAnswer: "x = -2, x = -3"
    },
    {
      text: "If f(x) = 3x^2 - 6x + 2, find f(-1).",
      choices: ["7", "11", "-1", "5"],
      correctAnswer: "11"
    },
    {
      text: "What is the domain of the function f(x) = √(x - 3)?",
      choices: ["All real numbers", "x ≥ 3", "x > 3", "x < 3"],
      correctAnswer: "x ≥ 3"
    },
    {
      text: "What is the range of the function g(x) = x^2 - 4x + 5?",
      choices: ["All real numbers", "y ≥ 5", "y > 5", "y < 5"],
      correctAnswer: "y ≥ 5"
    }
  ],
  precalculus: [
    {
      text: "Find the domain of the function f(x) = √(4 - x^2).",
      choices: ["All real numbers", "-2 ≤ x ≤ 2", "-4 ≤ x ≤ 4", "x ≥ 2"],
      correctAnswer: "-2 ≤ x ≤ 2"
    },
    {
        text: "Solve for x, -2sin(x) = 1 on the interval [0,2π",
        choices: ["x = 7π/6, 11π/6","5π/6,7π/6","4π/3,5π/3","2π/3,4π/3"],
        correctAnswer: "x = 7π/6, 11π/6"
    },
    {
      text: "What is the asymptote equation of the function f(x) = 1/x?",
      choices: ["y = 0", "x = 0", "y = 1", "x = 1"],
      correctAnswer: "x = 0"
    },
    {
      text: "Find the value of the limit lim(x→∞) (3x^2 - 2x + 1).",
      choices: ["∞", "-∞", "0", "Does not exist"],
      correctAnswer: "∞"
    },
    {
      text: "What are the solutions to the equation sin(x) = 0.5 in the interval [0, 2π]?",
      choices: ["π/6, 5π/6", "π/4, 3π/4", "π/3, 2π/3", "π/2, π"],
      correctAnswer: "π/6, 5π/6"
    }
  ],
  calculus: [
    {
      text: "Find the derivative of f(x) = 2x^3+3x^2+2x-1 then find the maximum output of f on the interval [-7,7]",
      choices: ["-1", "0","-2","4"],
      correctAnswer: "5"
    },
    {
      text: "How many points of inflection does the function g(x) = x^3 - 2x - 5 have on the interval [-3,2]",
      choices: ["1","2","0","3"],
      correctAnswer: "1"
    },
    {
      text: "Solve this indefinite integral f(x) = ∫ (5x^4 + 3x^2 - 5)dx",
      choices: ["f(x) = 5x^4 + 3x^3 +5x","f(x) = x^5 + x^3 -5x","f(x) = 5x^4 + x^3 + 5x","f(x) = x^5 + x^3 + 5x"],
      correctAnswer: "f(x) = x^5 + x^3 -5x"
    },
    {
      text: "What is the sum of the infinite series Σ (-1/3)^n from n = 0 to infinity",
      choices: ["1/3","-1/3","3/4","1/4"],
      correctAnswer: "3/4"
    },
    {
      text: "Find the limit of as x approaches infinity of (x^2)/(e^x)",
      choices: ["∞","0","-∞","3"],
      correctAnswer: "0"
    }
    
    
  ]
};


function renderQuestions(level) {
  const questionsDiv = document.getElementById('questions');
  questions[level].forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.innerHTML = `<p>Question ${index + 1}: ${question.text}</p>`;
      question.choices.forEach(choice => {
          const radioBtn = document.createElement('input');
          radioBtn.type = 'radio';
          radioBtn.name = `question${index}`;
          radioBtn.value = choice;
          questionDiv.appendChild(radioBtn);
          questionDiv.innerHTML += `<label>${choice}</label><br>`;
      });
      questionsDiv.appendChild(questionDiv);
      questionsDiv.appendChild(document.createElement('br'));

  });
}

function checkAnswers() {
  const urlParams = new URLSearchParams(window.location.search);
  const level = urlParams.get('level');
  const answers = questions[level].map((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
    return selectedAnswer ? selectedAnswer.value : null;
  });

  const resultsDiv = document.getElementById('results');
  let score = 0;
  resultsDiv.innerHTML = '<h2>Results:</h2>';
  answers.forEach((answer, index) => {
    const question = questions[level][index];
    const isCorrect = answer === question.correctAnswer;
    if (isCorrect) {
      score++;
      resultsDiv.innerHTML += `<p>Question ${index + 1}: Correct!</p>`;
    } else {
      resultsDiv.innerHTML += `<p>Question ${index + 1}: Incorrect. Correct answer: ${question.correctAnswer}</p>`;
    }
  });
  resultsDiv.innerHTML += `<p>Total Score: ${score}/${questions[level].length}</p>`;
}

// Main script
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const level = urlParams.get('level');
  renderQuestions(level);
  
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', checkAnswers);
};