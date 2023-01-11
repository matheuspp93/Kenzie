import TableData from "../TableData";
import { TableContainer } from "./styles";

const Table = ({ title, data }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const titleCapitalized = capitalizeFirstLetter(title);
  return (
    <TableContainer>
      <thead>
        <tr>
          <th id="title">Title</th>

          <th id="Status">{titleCapitalized}</th>
          <th id="actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        <TableData
          stack={title}
          data={data}
          titleCapitalized={titleCapitalized}
        />
      </tbody>
    </TableContainer>
  );
};

export default Table;
