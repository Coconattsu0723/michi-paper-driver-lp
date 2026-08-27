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

(() => {
  "use strict";

  const form = document.querySelector("#reservation-form");

  if (!form) {
    return;
  }

  const completion = document.querySelector("#reservation-completion");
  const completionTitle = completion.querySelector("#reservation-completion-title");
  const nameInput = form.querySelector("#reservation-name");
  const emailInput = form.querySelector("#reservation-email");
  const telInput = form.querySelector("#reservation-tel");
  const dateInputs = [
    form.querySelector("#reservation-date-1"),
    form.querySelector("#reservation-date-2"),
    form.querySelector("#reservation-date-3"),
  ];
  const areaInput = form.querySelector("#reservation-area");
  const vehicleInputs = [...form.querySelectorAll("[name='vehicle']")];
  const breakInputs = [...form.querySelectorAll("[name='driving_break']")];
  const privacyInput = form.querySelector("#reservation-privacy");

  function createTextRule(input, errorId, requiredMessage) {
    return {
      controls: [input],
      focusTarget: input,
      container: input.closest(".form-field"),
      error: form.querySelector(`#${errorId}`),
      getError: () => (input.value.trim() ? "" : requiredMessage),
    };
  }

  function createGroupRule(inputs, errorId, requiredMessage) {
    return {
      controls: inputs,
      focusTarget: inputs[0],
      container: inputs[0].closest(".form-group"),
      error: form.querySelector(`#${errorId}`),
      getError: () => (inputs.some((input) => input.checked) ? "" : requiredMessage),
    };
  }

  const rules = [
    createTextRule(nameInput, "reservation-name-error", "お名前を入力してください"),
    {
      controls: [emailInput],
      focusTarget: emailInput,
      container: emailInput.closest(".form-field"),
      error: form.querySelector("#reservation-email-error"),
      getError: () => {
        if (!emailInput.value.trim()) {
          return "メールアドレスを入力してください";
        }

        return emailInput.validity.typeMismatch ? "正しいメールアドレス形式で入力してください" : "";
      },
    },
    createTextRule(telInput, "reservation-tel-error", "電話番号を入力してください"),
    ...dateInputs.map((input, index) => {
      return createTextRule(input, `reservation-date-${index + 1}-error`, "希望日時を入力してください");
    }),
    createTextRule(areaInput, "reservation-area-error", "希望エリアを入力してください"),
    createGroupRule(vehicleInputs, "reservation-vehicle-error", "レッスン車両を選択してください"),
    createGroupRule(breakInputs, "reservation-break-error", "運転ブランクを選択してください"),
    {
      controls: [privacyInput],
      focusTarget: privacyInput,
      container: privacyInput.closest(".form-group"),
      error: form.querySelector("#reservation-privacy-error"),
      getError: () => (privacyInput.checked ? "" : "プライバシーポリシーへの同意が必要です"),
    },
  ];

  function showError(rule, message) {
    rule.container.classList.add("is-invalid");
    rule.error.textContent = message;
    rule.error.hidden = false;
    rule.controls.forEach((control) => control.setAttribute("aria-invalid", "true"));
  }

  function clearError(rule) {
    rule.container.classList.remove("is-invalid");
    rule.error.textContent = "";
    rule.error.hidden = true;
    rule.controls.forEach((control) => control.setAttribute("aria-invalid", "false"));
  }

  function updateVisibleError(event) {
    const rule = rules.find((currentRule) => currentRule.controls.includes(event.target));

    if (!rule || rule.error.hidden) {
      return;
    }

    const message = rule.getError();

    if (message) {
      showError(rule, message);
      return;
    }

    clearError(rule);
  }

  form.addEventListener("input", updateVisibleError);
  form.addEventListener("change", updateVisibleError);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalidRule = null;

    rules.forEach((rule) => {
      const message = rule.getError();

      if (message) {
        showError(rule, message);
        firstInvalidRule ??= rule;
        return;
      }

      clearError(rule);
    });

    if (firstInvalidRule) {
      firstInvalidRule.focusTarget.focus();
      return;
    }

    form.reset();
    rules.forEach(clearError);
    form.hidden = true;
    completion.hidden = false;
    completionTitle.focus();
  });
})();

(() => {
  "use strict";

  const faq = document.querySelector("#faq");

  if (!faq) {
    return;
  }

  const questions = [...faq.querySelectorAll(".faq__question")];

  questions.forEach((question) => {
    const answerId = question.getAttribute("aria-controls");
    const answer = document.querySelector(`#${answerId}`);

    if (!answer) {
      return;
    }

    question.setAttribute("aria-expanded", "false");
    answer.hidden = true;

    question.addEventListener("click", () => {
      const isExpanded = question.getAttribute("aria-expanded") === "true";

      question.setAttribute("aria-expanded", String(!isExpanded));
      answer.hidden = isExpanded;
    });
  });
})();
