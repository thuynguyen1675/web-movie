import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  const handleSearch = (e: React.ChangeEvent<unknown>, query: string) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      //   behavior: "smooth",
    });
    navigate(`/search?query=${query}`);
  };
  useEffect(() => {}, [value]);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        inputRef.current?.blur();
        handleSearch(e, value);
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a keyword"
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
