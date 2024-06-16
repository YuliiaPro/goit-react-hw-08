import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import css from "./SearchBox.module.css";

import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <>
      <label htmlFor={id} className={css.container}>
        Find contacts by name or number
        <input
          type="text"
          id={id}
          value={filter}
          placeholder="
search query"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </>
  );
}
