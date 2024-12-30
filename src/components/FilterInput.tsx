import React from "react";

interface FilterInputProps {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void; 
}

const FilterInput: React.FC<FilterInputProps> = ({
  label = "Population",
  placeholder = "Enter a number",
  onChange,
}) => {
  return (
    <div className="card">
      <label className="text-lg font-semibold text-gray-700">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="input"
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
