const CurrencyInput = ({ name, value, onChange }) => {
  return (
    <div>
      <span>{name}:</span>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          onChange(name, e.target.value);
        }}
      />
    </div>
  );
};

export default CurrencyInput;
