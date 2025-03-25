import React, { useState } from "react";
import NavBar from "./Componants/NavBar";
import NewsBoard from "./Componants/NewsBoard";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
}

export default App;
