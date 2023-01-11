import styled from "styled-components";
import CoverImage from "../../assets/images/breadcrumb.jpg";
export const BreadCrumb = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 30vh;
  overflow: hidden;
  background-image: url(${CoverImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vw auto;
`;
