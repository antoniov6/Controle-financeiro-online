import "./App.css";
import "./components/style.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import { useState } from "react";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <>
      <div className="main">
        <div className="aside">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="listaTarefas">
          <List listTransactions={listTransactions} />
        </div>
      </div>
    </>
  );
}

export default App;
