// COMPONENTS
import Rating from "@material-ui/lab/Rating";

const Rate = ({ element }) => {
  switch (element) {
    case "Avançado":
      return <Rating value={3} max={3} readOnly />;
    case "Intermediário":
      return <Rating value={2} max={3} readOnly />;
    case "Iniciante":
      return <Rating value={1} max={3} readOnly />;
    default:
      return <Rating value={0} max={3} readOnly />;
  }
};

export default Rate;
