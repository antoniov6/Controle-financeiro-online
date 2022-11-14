import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("Entrada");

  const HandleSubmit = (event) => {
    event.preventDefault();
    setListTransactions([...listTransactions, { description, value, type }]);
  };
  return (
    <aside>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="descricao">Descrição</label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          name="descricao"
          className="inputDescricao"
          placeholder="Digite aqui sua descrição"
        />
        <div className="valorETipo">
          <label htmlFor="valor">Valor</label>
          <label htmlFor="tipoDeValor">Tipo de valor</label>
        </div>
        <div className="divTipoEValor">
          <input
            className="valor"
            onChange={(event) => {
              console.log(event.target.value);
              setValue(event.target.value);
            }}
            type="text"
            placeholder="R$"
            name="valor"
          />

          <select
            onChange={(event) => setType(event.target.value)}
            name=""
            id="options"
          >
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saída</option>
          </select>
        </div>
        <button className="inserirValor" type="submit">
          Inserir valor
        </button>
      </form>
    </aside>
  );
};

export default Form;
