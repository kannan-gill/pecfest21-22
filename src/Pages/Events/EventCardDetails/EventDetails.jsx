import React from 'react'
import { Modal } from 'react-bootstrap';
import EventRegister from '../EventRegister/EventRegister';
import styles from './EventDetails.module.scss';
const EventDetails = ({show, setShow, event}) => {

  
    return (
      <>
        <Modal
          scrollable
          show={show}
          onHide={() => setShow(false)}
          dialogClassName={`${styles.modal_sizing}`}
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
              commodi aspernatur enim, consectetur. Cumque deleniti temporibus
              ipsam atque a dolores quisquam quisquam adipisci possimus
              laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
              accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
              reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
              deleniti rem!
            </p>
            <EventRegister event={event} />
          </Modal.Body>
        </Modal>
      </>
    );
  }

export default EventDetails