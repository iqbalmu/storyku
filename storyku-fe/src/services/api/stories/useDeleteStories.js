import axios from "axios"
import { useState } from "react"

const BASE_API = import.meta.env.VITE_APP_BASE_API

const useDeleteStories = () => {
  const [items, setItems] = useState([]);
  
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${BASE_API}/stories/${id}`);
      setItems(prevItems => prevItems.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return { items, deleteItem };
}

export default useDeleteStories