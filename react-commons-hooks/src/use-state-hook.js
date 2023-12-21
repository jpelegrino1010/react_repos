import { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, customer: action.customer, show: action.show };
  }

  return state;
};

const UseStateHook = () => {
  const [person, setPerson] = useState({ firstname: "", lastname: "" });

  const [state, dispatch] = useReducer(reducer, {
    customer: { firstname: "", lastname: "" },
    show: false,
  });

  const onChange = (event) => {
    const { value, name } = event.target;

    setPerson((input) => {
      return { ...input, [name]: value };
    });
  };

  const onShowText = () => {
    console.log(person);
    dispatch({ type: "ADD", customer: person, show: true });
  };

  return (
    <div>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={person.firstname}
          onChange={onChange}
        />
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={person.lastname}
          onChange={onChange}
        />
      </div>

      <button onClick={onShowText}>Show Text</button>

      {state.show && state.customer.firstname + " " + state.customer.lastname}
    </div>
  );
};

export default UseStateHook;
