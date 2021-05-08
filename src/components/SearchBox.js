import React from "react";

const searchBox = (props) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={props.filter}
      />
    </div>
  );
};

export default searchBox;
