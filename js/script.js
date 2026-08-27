(() => {
  "use strict";

  const form = document.querySelector("#driving-check-form");

  if (!form) {
    return;
  }

  const questions = [...form.querySelectorAll(".driving-check__question")];
  const progress = form.querySelector(".driving-check__progress");
  const progressCurrent = form.querySelector("[data-progress-current]");
  const progressTrack = form.querySelector("[role='progressbar']");
  const progressValue = form.querySelector("[data-progress-value]");
  const controls = form.querySelector(".driving-check__controls");
  const nextButton = form.querySelector("[data-check-next]");
  const previousButton = form.querySelector("[data-check-previous]");
  const errorMessage = form.querySelector("#driving-check-error");
  const resultRegion = document.querySelector("#driving-check-result");
  const resultItems = [...resultRegion.querySelectorAll("[data-result]")];
  const resetButton = resultRegion.querySelector("[data-check-reset]");

  const answers = {
    q1: null,
    q2: null,
    q3: null,
    q4: null,
  };

  const scoreRules = {
    q1: {
      recent: { route: 1 },
      "one-to-three": { focus: 1 },
      "three-to-five": { basic: 1 },
      "five-plus": { basic: 2 },
    },
    q2: {
      road: { basic: 2 },
      parking: { focus: 2 },
      narrow: { focus: 2 },
      lane: { focus: 2 },
      child: { basic: 1, route: 1 },
    },
    q3: {
      neighborhood: { basic: 1 },
      errands: { route: 1 },
      school: { route: 2 },
      distance: { route: 2 },
    },
    q4: {
      basic: { basic: 2 },
      focus: { focus: 2 },
      route: { route: 2 },
    },
  };

  let currentQuestionIndex = 0;

  function clearError() {
    errorMessage.textContent = "";
    questions.forEach((question) => question.removeAttribute("aria-describedby"));
  }

  function updateProgress() {
    const currentNumber = currentQuestionIndex + 1;
    const percentage = (currentNumber / questions.length) * 100;

    progressCurrent.textContent = String(currentNumber).padStart(2, "0");
    progressTrack.setAttribute("aria-valuenow", String(currentNumber));
    progressValue.style.width = `${percentage}%`;
  }

  function showQuestion(index, moveFocus = false) {
    currentQuestionIndex = index;

    questions.forEach((question, questionIndex) => {
      question.hidden = questionIndex !== currentQuestionIndex;
    });

    previousButton.hidden = currentQuestionIndex === 0;
    nextButton.textContent = currentQuestionIndex === questions.length - 1 ? "結果を見る" : "次へ";
    updateProgress();
    clearError();

    if (moveFocus) {
      questions[currentQuestionIndex].querySelector("legend").focus();
    }
  }

  function calculateResult(currentAnswers) {
    const scores = {
      basic: 0,
      focus: 0,
      route: 0,
    };

    Object.entries(currentAnswers).forEach(([questionName, answerValue]) => {
      const additions = scoreRules[questionName][answerValue];

      Object.entries(additions).forEach(([type, score]) => {
        scores[type] += score;
      });
    });

    return ["basic", "focus", "route"].reduce((result, type) => {
      return scores[type] > scores[result] ? type : result;
    }, "basic");
  }

  function showResult(resultType) {
    form.hidden = true;
    resultRegion.hidden = false;

    resultItems.forEach((item) => {
      item.hidden = item.dataset.result !== resultType;
    });

    resultRegion.querySelector(`[data-result='${resultType}'] .driving-check__result-type`).focus();
  }

  function resetCheck() {
    form.reset();

    Object.keys(answers).forEach((questionName) => {
      answers[questionName] = null;
    });

    resultItems.forEach((item) => {
      item.hidden = true;
    });

    resultRegion.hidden = true;
    form.hidden = false;
    showQuestion(0, true);
  }

  form.addEventListener("change", (event) => {
    if (!event.target.matches(".driving-check__radio")) {
      return;
    }

    answers[event.target.name] = event.target.value;
    clearError();
  });

  nextButton.addEventListener("click", () => {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.querySelector(".driving-check__radio:checked");

    if (!selectedAnswer) {
      errorMessage.textContent = "選択肢を1つ選んでください。";
      currentQuestion.setAttribute("aria-describedby", "driving-check-error");
      currentQuestion.querySelector(".driving-check__radio").focus();
      return;
    }

    answers[selectedAnswer.name] = selectedAnswer.value;

    if (currentQuestionIndex < questions.length - 1) {
      showQuestion(currentQuestionIndex + 1, true);
      return;
    }

    showResult(calculateResult(answers));
  });

  previousButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      showQuestion(currentQuestionIndex - 1, true);
    }
  });

  resetButton.addEventListener("click", resetCheck);

  form.classList.add("is-enhanced");
  progress.hidden = false;
  controls.hidden = false;
  showQuestion(0);
})();
