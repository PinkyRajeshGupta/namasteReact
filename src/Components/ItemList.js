import { useDispatch } from "react-redux";
import { addItem } from "../reduxFolder/cartSlice";

const ItemList = (props) => {
  // console.log(props.index, "itemlist");
  const dispatch = useDispatch();
  const handeladditem = (item) => {
    //dispatcha action
    dispatch(addItem(item));
  };
  return (
    <div>
      Category item{props.index}
      <button
        className=" m-4 bg-slate-60 from-neutral-50"
        onClick={() => handeladditem(props.index)}
      >
        Add
      </button>
    </div>
  );
};

export default ItemList;
