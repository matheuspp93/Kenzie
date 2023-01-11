//ICONS
import { VscMail } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa";
import { GrPhone } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";

//STYLE
import { Container } from "./style";

const ProfileInfo = ({ data }) => {
  const { email, course_module, bio, contact } = data;
  return (
    <Container>
      <ul>
        <li>
          <VscMail />
          <span>{email}</span>
        </li>
        <li>
          <FaGraduationCap />
          <span>{course_module}</span>
        </li>
        <li>
          <CgNotes />
          <span>{bio}</span>
        </li>
        <li>
          <GrPhone />
          <span>{contact}</span>
        </li>
      </ul>
    </Container>
  );
};

export default ProfileInfo;
