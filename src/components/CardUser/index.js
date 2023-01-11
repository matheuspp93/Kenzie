import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// ACTIONS
import { addUser } from "../../store/Modules/User/actions";

//IMAGE
import imageNotFound from "../../assets/images/image-not-found.jpg";

// STYLE
import {
  List,
  CardHeader,
  CardBody,
  CardImage,
  CardDescription,
  Button,
  Card,
} from "./styles";

const CardUser = ({ findUser }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const hasImage = (image) =>
    image ? (
      <CardImage src={image} alt="avatar" />
    ) : (
      <CardImage src={imageNotFound} alt="avatar not found" />
    );

  const chosenUser = (user) => {
    dispatch(addUser(""));
    history.push(`/users/profile/${user.id}`);
  };

  return (
    <List>
      {findUser.map((user, index) => (
        <li key={index}>
          <Card>
            <CardHeader>
              {hasImage(user.avatar_url)}
              <span>{user.name}</span>
            </CardHeader>

            <CardBody>
              {hasImage(user.avatar_url)}

              <CardDescription>
                <p>{user.course_module}</p>
                <Button onClick={() => chosenUser(user)}>See More</Button>
              </CardDescription>
            </CardBody>
          </Card>
        </li>
      ))}
    </List>
  );
};

export default CardUser;
