// public/script.js
async function loadText() {
  const response = await fetch("/api/text");
  const text = await response.text();
  document.getElementById("content").innerHTML = text;
}

loadText();
