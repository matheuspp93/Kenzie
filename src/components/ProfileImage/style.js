import styled from "styled-components";

export const Box = styled.div`
  > div > div {
    position: relative;
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 110px;
    height: 110px;
    @media (max-width: 945px) {
      width: 80px;
      height: 80px;
    }

    @media (max-width: 455px) {
      width: 50px;
      height: 50px;
    }
    margin-right: 30px;
    border-radius: 50%;
    transition: all 0.3s;
    cursor: ${({ verified }) => (verified ? "pointer" : "default")};

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      transition: all 0.3s;
    }

    &:hover {
      &:before {
        background-color: ${({ verified }) =>
          verified ? "rgba(0, 0, 0, 0.6)" : "transparent"};
      }

      > svg {
        display: ${({ verified }) => verified && "block !important"};
      }
    }
  }

  > div svg {
    display: none !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: #fff;
    font-size: 2rem;

    &:focus {
      outline: none;
    }
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
