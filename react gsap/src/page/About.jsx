import React, { useEffect, useState } from "react";

const About = () => {
  const [state, setState] = useState(["apple", "papaya"]);
  let b = "banana";
  // state.push(b);

  useEffect(() => {
    console.log(state);
  });

  return (
    <div>
      {state.map((s, index) => (
        <li key={index}>{s}</li>
      ))}
      <input
        type="text"
        name="fruit"
        onKeyUp={(e) => {
          if (e.key == "Enter") {
            console.log('LOL')
            setState(prev => ([...prev, e.target.value]))
          }
        }}
      />
    </div>
  );
};

export default About;
