import { getPasswordStrength } from "../utilities/passwordStrength";

export default function PasswordStrengthMeter({ password }) {
  const { score, label, color } = getPasswordStrength(password);

  return (
    <div style={{ marginTop: "6px" }}>
      {/* Bars */}
      <div style={{ display: "flex", gap: "4px" }}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              height: "6px",
              flex: 1,
              backgroundColor: i <= score ? color : "#0A192F",
              borderRadius: "2px",
              transition: "0.3s",
            }}
          />
        ))}
      </div>

      {/* Label */}
      {password && (
        <p style={{ fontSize: "12px", marginTop: "4px", color }}>
          {label}
        </p>
      )}
    </div>
  );
}