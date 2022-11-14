import { useEffect } from "react";
import { useState } from "react";

const TotalMoney = ({ listTransactions }) => {
  const [valorTotal, setValorTotal] = useState("");
  useEffect(() => {
    setValorTotal(
      listTransactions.reduce(
        (acc, transaction) =>
          transaction.type === "Entrada"
            ? acc + +transaction.value
            : acc - +transaction.value,
        0
      )
    );
  }, [listTransactions]);

  return (
    <div className="div-valorTotal">
      <p>Valor total:</p>
      <span className="valorTotal">R$ {valorTotal},00</span>
    </div>
  );
};

export default TotalMoney;
