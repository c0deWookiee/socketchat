import React from "react";

const Form = props => {
  return (
    <div>
      <form action="">
        <input
          id="m"
          autoComplete="off"
          onChange={e => props.handleChange(e)}
          value={props.text}
        />
        <button onClick={e => props.handleSubmit(e)}>Send</button>
      </form>
    </div>
  );
};

export default Form;
