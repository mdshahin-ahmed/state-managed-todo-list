import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <Menu inverted>
        <Menu.Item
          onClick={() => navigate("/")}
          active={pathname === "/"}
          name="todo"
        ></Menu.Item>
        <Menu.Item
          onClick={() => navigate("/form")}
          active={pathname === "/form"}
          name="form"
        ></Menu.Item>
      </Menu>
    </Container>
  );
};

export default Header;
