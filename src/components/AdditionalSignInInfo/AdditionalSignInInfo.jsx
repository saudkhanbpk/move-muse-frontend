import React, { useState, useEffect, useContext, useRef, useMemo } from "react";
import { UserContext } from "../../context/UserContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";

const AdditionalSignInInfo = () => {
  const {
    setUserLoggedIn,
    showAdditionalSignInInfo,
    setShowAdditionalSignInInfo,
  } = useContext(UserContext);
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [ethnicity, setEthnicity] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setUserLoggedIn(true)
    setShow(false);
    setShowAdditionalSignInInfo(false);
  };

  const handleShow = () => setShow(true);

  const handleSave = async () => {
    const userData = { ethnicity, gender, dateOfBirth };
    try {
      const resp = await ApiService.post(
        "auth/additional-signIn-info",
        userData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json"  },
        }
      );
      const json = await resp.data;
      toast.success("Initial sign-in info stored");
      handleClose();
    } catch (error) {
      setShowAdditionalSignInInfo(false);
      toast.error("Initial sign-in info not saved");
    }
  };

  useEffect(() => {
    if (showAdditionalSignInInfo) {
      ref?.current?.click();
    }
  }, [showAdditionalSignInInfo]);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        ref={ref}
        className="d-none"
      >
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Initial Sign-In Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEthnicity">
              <Form.Label>Ethnicity</Form.Label>
              <Form.Control
                type="text"
                value={ethnicity}
                onChange={(e) => setEthnicity(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Non-Binary">Non-Binary</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBirthDate">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdditionalSignInInfo;
