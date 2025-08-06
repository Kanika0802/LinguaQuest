function showLogin() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function showSignup() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

function loginUser() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}

function signupUser() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}

function showQuiz(num) {
  const quiz = document.getElementById(`quiz${num}`);
  quiz.style.display = quiz.style.display === "none" ? "block" : "none";
}

function toggleProfile() {
  const profile = document.getElementById("profileSection");
  profile.style.display = profile.style.display === "none" ? "block" : "none";
}