import styled from "styled-components";

export const TableContainer = styled.table`
  width: 90vw;
  max-width: 1200px;
  border: 1px solid #ddd;
  border-collapse: collapse;

  th,
  tr,
  td {
    border: 1px solid #ddd;
  }
  th,
  td {
    padding: 20px;
  }
  .tag {
    display: none;
  }

  #title {
    width: 20%;
  }

  #actions {
    width: 30%;
  }
  #status {
    width: 50%;
  }

  td {
    padding: 10px;
    text-align: center;
  }

  .buttons {
    border: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;
  }

  @media only screen and (max-width: 480px) {
    /* th {
      display: none;
    }
    .tag {
      display: inline;
      font-weight: 700;
    }
    td {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }
    .buttons {
      flex-direction: row;
    } */
  }
`;
