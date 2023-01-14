const contactForm = document.getElementById("login-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      window.location.href = "form.html";
    })
    .catch((e) => alert("Error sent"));
});
