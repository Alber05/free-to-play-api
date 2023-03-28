import Table from "react-bootstrap/Table";

export default function RequisitosMinimos({ details }) {
  return (
    <Table striped hover variant="dark">
      <thead>
        <tr>
          <th colSpan={2}>Requisitos Minimos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Gráficos</th>
          <td>{details?.graphics || "No disponible"}</td>
        </tr>
        <tr>
          <th>Memoria</th>
          <td>{details?.memory || "No disponible"}</td>
        </tr>
        <tr>
          <th>Sistema operativo</th>
          <td>{details?.os || "No disponible"}</td>
        </tr>
        <tr>
          <th>Procesador</th>
          <td>{details?.processor || "No disponible"}</td>
        </tr>
        <tr>
          <th>Almacenamiento</th>
          <td>{details?.storage || "No disponible"}</td>
        </tr>
      </tbody>
    </Table>
  );
}
