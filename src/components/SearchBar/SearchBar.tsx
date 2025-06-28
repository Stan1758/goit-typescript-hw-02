import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast("Введи текст для пошуку зображень");
      return;
    }

    if (query.trim().length < 3) {
      toast("Введіть принаймні 3 символи для пошуку");
      return;
    }

    onSubmit(query.trim());
    setQuery("");
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.field}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
