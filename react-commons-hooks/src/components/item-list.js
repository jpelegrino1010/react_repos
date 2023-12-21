import Item from "./item";
import AppContext from "../store/app-context";
import { useContext } from "react";
import ItemForm from "./item-form";

const ItemList = () => {
  const ctx = useContext(AppContext);
  const listItem = ctx.items.map((item) => <Item item={item} />);
  return (
    <>
      <ItemForm />
      <table border="1">
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Price</td>
          <td colSpan="2" align="center">
            Action
          </td>
        </tr>
        {listItem}
      </table>
    </>
  );
};

export default ItemList;
