import React from "react";
import SearchInput from "../common/SarchInput";

interface SearchSectionProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center justify-end mb-4">
      <SearchInput value={value} onChange={onChange} />
    </div>
  );
};

export default SearchSection;
