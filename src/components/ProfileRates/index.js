//COMPONENT
import RatingReadOnly from "../RatingReadOnly";

//STYLE
import { Container } from "./style";

const ProfileRates = ({ list }) => {
  return (
    <Container>
      <ul>
        {list.map(({ title, status }, index) => (
          <li key={index}>
            {title} - <RatingReadOnly element={status} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ProfileRates;
