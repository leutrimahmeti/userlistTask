import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="px-2 py-1 border-2 rounded-md mx-1"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
