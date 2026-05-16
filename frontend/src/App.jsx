import { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/test")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
    </div>
  );
}

export default App;