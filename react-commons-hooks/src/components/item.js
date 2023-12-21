const Item = (props) => {
  const { id, name, price } = props.item;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>Update</td>
      <td>Delete</td>
    </tr>
  );
};

export default Item;
