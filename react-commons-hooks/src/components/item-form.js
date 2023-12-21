import { useState, useId, useContext } from "react";
import AppContext from "../store/app-context";

const ItemForm = () => {
  const [item, setItem] = useState({ id: "", name: "", price: 0.0 });
  const ctx = useContext(AppContext);
  const id = useId();

  const onSaveItem = () => {
    item.id = id;
    ctx.add(item);
    setItem({ id: "", name: "", price: 0.0 });
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setItem((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={onChange}
          />
        </div>

        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={onChange}
          />
        </div>

        <button onClick={onSaveItem}>Save</button>
      </div>
    </>
  );
};

export default ItemForm;
