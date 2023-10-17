import React from "react";
import Accordion from "./component/Accordion";
function App() {
  const propsItems = [
    {
      id: 1,
      label: "Section 1",
      content: "Content for section 1 goes here.",
    },
    {
      id: 2,
      label: "Section 2",
      content: "Content for section 2 goes here.",
    },
    {
      id: 3,
      label: "Section 3",
      content: "Content for section 3 goes here.",
    },
    {
      id: 4,
      label: "Section 4",
      content: "Content for section 4 goes here.",
    },
    {
      id: 5,
      label: "Section 5",
      content: "Content for section 5 goes here.",
    },
  ];
  
  return (
  
    <div>
      <Accordion propsItems={propsItems}/>
    </div>
  );
}

export default App;
