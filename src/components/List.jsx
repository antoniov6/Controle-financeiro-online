const List = ({ listTransactions }) => {
  return (
    <>
      <h3>Resumo Financeiro</h3>
      <ul>
        {listTransactions.map((transaction, index) => {
          return (
            <li key={index}>
              <div className="descricaoETipo">
                <p className="descricao1">{transaction.description}</p>
                <p>{transaction.type}</p>
              </div>
              <p>R$ {transaction.value},00</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
