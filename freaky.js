const inputText = document.getElementById("inputText");
const freakyText = document.getElementById("freakyText");

inputText.addEventListener("keyup", () => {
  const text = inputText.value;
  // Simulate a basic transformation (replace some letters with similar looking characters)
  const freakyString = text.replace(/r/g, "ŕ")
                            .replace(/a/g, "á")
                            .replace(/e/g, "ë");
  freakyText.textContent = freakyString;
});
