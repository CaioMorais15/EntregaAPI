import { useState } from "react";


const Clientes = () => {
  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/Clientes", cliente);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Clientes</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={cliente.cpf}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Telefone:</label>
          <input
            type="tel"
            name="telefone"
            value={cliente.telefone}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Salvar Cliente
        </button>
      </form>
    </div>
  );
};

export default Clientes;
