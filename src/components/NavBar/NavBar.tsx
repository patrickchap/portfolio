import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import profilePicture from "../../images/profilePicture.jpg";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";

import { useHistory } from "react-router-dom";

interface SpyItem {
  inView: boolean;
  element: HTMLElement;
  id: string;
}

const NavBar: React.FC = () => {
  const [responsive, setResponsive] = useState("");
  const [page, setPage] = useState("About");
  let history = useHistory();

  const myFunction = () => {
    responsive === "" ? setResponsive("responsive") : setResponsive("");
  };

  const isInView = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    if (element.id === "About") {
      if (rect.y > 200) return true;
    }
    return rect.y >= 0 - 100 && rect.y <= 0 + 100;
  };

  const spy = () => {
    const items = ["About", "Skills", "Project", "Contact"].map((id) => {
      const element = document.getElementById(id);
      if (element) {
        return {
          inView: isInView(element),
          element,
          id,
        } as SpyItem;
      } else {
        return null;
      }
    });

    let item = items.filter((item) => item?.inView === true);
    item[0]?.id && setPage(item[0]?.id);
    item[0]?.id && history.push(`/${item[0]?.id}`);
  };

  useEffect(() => {
    let timer: number;
    timer = window.setInterval(() => spy(), 50);

    return function () {
      window.clearInterval(timer);
    };
  });

  return (
    <section className="navBar">
      <div className="navBar__container">
        <List component="nav">
          <ListItem>
            <img className="navBar__img" src={profilePicture} alt="" />
          </ListItem>
          <ListItem>
            <h3 className="navBar__listItem" id="navBar__userName">
              Patrick Chapple
            </h3>
          </ListItem>
          <ListItem>
            <h5 className="navBar__listItem" id="navBar__status">
              Open To Work
            </h5>
          </ListItem>
          <br />
          <ListItem>
            <div className="navBar__listItem" id="HamBurger">
              <MenuIcon onClick={myFunction} />
            </div>
          </ListItem>
          <div className={`navBar__collapse ${responsive}`} id="nav">
            <Scrollspy
              className="scrollspy"
              items={["About", "Skills", "Project", "Contact"]}
              currentClassName="isCurrent"
            >
              <ListItem>
                <a href="#About" onClick={() => setPage("About Me")}>
                  <h4
                    className={`navBar__listItem ${
                      page === "About" ? "isCurrent" : ""
                    }`}
                  >
                    About Me
                  </h4>
                </a>
              </ListItem>
              <ListItem>
                <a href="#Skills" onClick={() => setPage("Skills")}>
                  <h4
                    className={`navBar__listItem ${
                      page === "Skills" ? "isCurrent" : ""
                    }`}
                  >
                    Skills
                  </h4>
                </a>
              </ListItem>

              <ListItem>
                <a href="#Project" onClick={() => setPage("Project")}>
                  <h4
                    className={`navBar__listItem ${
                      page === "Project" ? "isCurrent" : ""
                    }`}
                  >
                    Projects
                  </h4>
                </a>
              </ListItem>
              <ListItem>
                <a href="#Contact" onClick={() => setPage("Contact")}>
                  <h4
                    className={`navBar__listItem ${
                      page === "Contact" ? "isCurrent" : ""
                    }`}
                  >
                    Contact
                  </h4>
                </a>
              </ListItem>
            </Scrollspy>
          </div>
        </List>
      </div>
    </section>
  );
};

export default NavBar;
