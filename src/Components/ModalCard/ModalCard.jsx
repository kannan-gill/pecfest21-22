import React from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import styles from "./ModalCard.module.css";

const ModalCard = ({
  title,
  content,
  isLoading,
  buttonTitle,
  buttonHandler,
  show,
  setModalShow,
  disabled = false
}) => {

  return (
    <Modal
      centered
      show={show}
      contentClassName="bg-dark text-white"
      onHide={() => setModalShow(false)}
      backdropClassName="text-white"
    >
      <Modal.Header className={styles.no_border} closeVariant="white" closeButton>
        <Modal.Title className={`${styles.title} main_font`}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="main_font">
        {content}
      </Modal.Body>
      <Modal.Footer className={styles.no_border}>
        <Button variant="secondary" className="main_font" onClick={() => setModalShow(false)}>
          Close
        </Button>
        <Button variant="warning" className="main_font" onClick={buttonHandler} disabled={isLoading || disabled}>
          {isLoading ? (
            <Spinner
              animation="border"
              variant="dark"
              size="sm"
              className="mx-4"
            />
          ) : (
            <>{buttonTitle}</>
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCard;
