import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../slice/CocktailsSlice";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const refCont = useRef("");

  useEffect(() => {
    refCont.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCocktails(search));
    setSearch("");
  };
  useEffect(() => {
    dispatch(getCocktails(search));
  }, [search]);

  return (
    <section className=" search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Your Cocktails</label>
          <input
            ref={refCont}
            type="text"
            id="name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
