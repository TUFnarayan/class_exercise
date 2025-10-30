import './InputField.css';

export default function InputField({ value, onChange, placeholder, label, type = "text", error }) {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        data-testid="input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-box"
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
