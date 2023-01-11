import Modal from "../Modal";
import RatingReadOnly from "../RatingReadOnly";

const TableData = ({ stack, data, titleCapitalized }) => {
  let targetPage = stack === "description" ? "works" : "techs";

  return (
    <>
      {data.length >= 1 ? (
        data.map(({ id, title, description, status }) => {
          return (
            <tr key={id}>
              <td>
                <span className="tag">Title: </span>
                {title}
              </td>
              <td>
                <span className="tag">{titleCapitalized}</span>
                {stack === "status" ? (
                  <RatingReadOnly element={status} />
                ) : (
                  description
                )}
              </td>
              <td className="buttons">
                <Modal type="edit" page={targetPage} id={id}>
                  EDIT
                </Modal>
                <Modal type="delete" page={targetPage} id={id}>
                  DELETE
                </Modal>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={4}>Nenhum trabalho cadastrado</td>
        </tr>
      )}
    </>
  );
};

export default TableData;
