import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../Team/Team.module.css";
import StarsBg from "../../Components/StarsBg/index";
import { getList } from "services";
import TeamMemberCard from "Components/TeamTiles/TeamMemberCard";

function Developers() {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    getList("developers").then((data) => {
      setMembersData(data[0].devs);
    });
  }, []);

  return (
    <div className={`vw-100 vh-100 d-flex flex-column`}>
      <StarsBg />
      <Container
        fluid
        className={`d-flex flex-column overflow-hidden ${styles.main_container}`}
      >
        <div className={`d-flex flex-column flex-grow-1 ${styles.container}`}>
          <Row className={`d-flex justify-content-center ${styles.pageheader}`}>
            DEVELOPERS
          </Row>
          <Row className="d-flex flex-row justify-content-center">
            {membersData.map((item, index) => {
              return (
                <TeamMemberCard key={item.name} member={item} index={index} isDeveloper={true} />
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Developers;
