export default function InputField({ value, onChange, placeholder }) {
  return (
    <input
      data-testid="input-field"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}