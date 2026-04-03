export function getPasswordStrength(password) {
  let score = 0;

  if (!password) return { score: 0, label: "", color: "" };

  // rules
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  // normalize (0–5 → 0–4)
  const normalizedScore = Math.min(score, 4);

  const strengthMap = [
    { label: "Very Weak", color: "#ff4d4f" },
    { label: "Weak", color: "#ff7a45" },
    { label: "Medium", color: "#ffa940" },
    { label: "Strong", color: "#52c41a" },
    { label: "Very Strong", color: "#237804" },
  ];

  return {
    score: normalizedScore,
    ...strengthMap[normalizedScore],
  };
}