const login_form = VGSCollect.create(
  "tntirirpxo5",
  "sandbox",
  function (state) {
    document.getElementById("login-preview").innerText = JSON.stringify(
      state,
      null,
      "  "
    );
    if (state) {
      for (let field in state) {
        if (
          state[field].errorMessages &&
          !state[field].isValid &&
          !state[field].isFocused &&
          state[field].isDirty
        ) {
          const error = state[field].errorMessages[0];
          document.querySelector(`[data-name='${field}']`).innerHTML = error;
        } else if (state[field].isValid || state[field].isFocused) {
          document.querySelector(`[data-name='${field}']`).innerHTML = "";
          const frame = document.querySelector(
            `[data-name='${field}']`
          ).previousElementSibling;
          frame.classList.remove("invalid-field");
        }
      }
    }
  }
);

const username = login_form.field("#username .form-control", {
  type: "text",
  name: "username",
  placeholder: "UserName",
  validations: ["required"],
  autoComplete: "user",
  css,
});

const ssn = login_form.field("#ssn .form-control", {
  type: "ssn",
  name: "ssn",
  validations: ["required"],
  autoComplete: "current-ssn",
  css,
});

login_form.on("enterPress", function () {
  const targetForm = document.getElementById("form-login-info");
  submitForm(login_form, targetForm);
});

Promise.all([username.promise, ssn.promise]).then(function () {
  const fields = document.querySelectorAll("#form-login-info .loading");
  for (var i = 0; i < fields.length; i++) {
    fields[i].classList.remove("loading");
  }
});

document.getElementById("form-login-info").addEventListener(
  "submit",
  function (e) {
    let targetForm = e.target;
    e.preventDefault();
    submitForm(login_form, targetForm);
  },
  false
);
