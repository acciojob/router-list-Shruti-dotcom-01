import { BrowserRouter , Routes , Route } from 'react-router-dom';
import React from "react";
import './../styles/App.css';
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes >
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
