import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const id = useId();

  const StatusFilter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchbox}>
      <label htmlFor={id} className={s.label}>
        Find contacts by name
        <input
          id={id}
          type="text"
          value={StatusFilter}
          onChange={handleSearch}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
