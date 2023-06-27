import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { decrement, increment } from "../store/slices/counter.slice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
