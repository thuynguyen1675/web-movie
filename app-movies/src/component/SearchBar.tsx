import React, { useRef, useState } from "react";
import "./styles.css";

// interface Props {
//   todo: string;
//   setTodo: React.Dispatch<React.SetStateAction<string>>;
//   handleAdd: (e: React.FormEvent) => void;
// }

const SearchBar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  return (
    <form
      className="input"
      onSubmit={(e) => {
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Search..."
        className="input__box"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="input_submit">
        Go{" "}
      </button>
    </form>
  );
};

export default SearchBar;
