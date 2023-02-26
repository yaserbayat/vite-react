import React, {FC} from 'react';
import {Button, CloseButton, Modal} from "react-bootstrap";

interface IColorPallet {
  open: boolean;
  onClose?: () => void;
}
const ColorPallet: FC<IColorPallet> = (props) => {
  const { open, onClose } = props;
  const onSave = () => {
    onClose?.();
  };
  return (
    <Modal show={open} onHide={onClose} backdrop={"static"}>
      <Modal.Header>
      <Modal.Title>Change colors</Modal.Title>
        <CloseButton onClick={() => onClose?.()}>X</CloseButton>
      </Modal.Header>
  <Modal.Body>Body</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={onClose}>
      Close
    </Button>
    <Button variant="primary" onClick={onSave}>
      Save Changes
    </Button>
  </Modal.Footer>
    </Modal>
  );
};

export default ColorPallet;