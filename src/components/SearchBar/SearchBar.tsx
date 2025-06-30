import { useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps): JSX.Element => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const trimmedQuery = query.trim();

    if (trimmedQuery === "") {
      toast("Введи текст для пошуку зображень");
      return;
    }

    if (trimmedQuery.length < 3) {
      toast("Введіть принаймні 3 символи для пошуку");
      return;
    }

    onSubmit(trimmedQuery);
    setQuery("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
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
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
