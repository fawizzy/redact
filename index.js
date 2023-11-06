document.getElementById("redactButton").addEventListener("click", function () {
  const originalText = document.getElementById("originalText").value;
  const wordsToRedact = document
    .getElementById("wordsToRedact")
    .value.split(" ");

  // Split the original text into an array of words
  const words = originalText.split(" ");

  // Iterate through the words and replace specified words with asterisks
  for (let i = 0; i < words.length; i++) {
    if (wordsToRedact.includes(words[i])) {
      words[i] = "****";
    }
  }

  // Reconstruct the redacted text
  const redactedText = words.join(" ");

  document.getElementById("redactedText").textContent = redactedText;
});
