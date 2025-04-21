import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../Redux/Actions";
import { RootState } from "../Redux/Store";

const FilterButtons: React.FC = () => {
  const dispatch = useDispatch();
  const filters = ["all", "completed", "pending"];
  const selectedFilter = useSelector((state: RootState) => {
    return state.filter;
  });

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => dispatch(setFilter(filter))}
          className={`filter-button ${
            filter == selectedFilter ? "active" : ""
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
