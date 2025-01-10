import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ApiService from "../../services/ApiService";
import NotificationService from "../../components/NotificationService/NotificationService";

function InviteUser({ eventId }) {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const debouncedSearch = useCallback(
    debounce(async (searchTerm) => {
      if (searchTerm) {
        try {
          const results = await ApiService.get(
            `get-profile-by-username?username=${searchTerm}`,
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setSearchResults(results.data);
        } catch (error) {
          console.error("Error fetching profiles", error);
        }
      } else {
        setSearchResults([]);
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(username);
  }, [username, debouncedSearch]);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const userId = e.target.value;
    if (e.target.checked) {
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedUsers((prevSelected) =>
        prevSelected.filter((id) => id !== userId)
      );
    }
  };

  const inviteUser = async () => {
    try {
      if (selectedUsers) {
        const res = await ApiService.post(
          "events/invite-events",

          {
            eventId,
            userIds: selectedUsers,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        NotificationService.notifySuccess("users invite successfully");
        handleClose();
      }
    } catch (error) {}
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Invite
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invite</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="John doe"
                autoFocus
                value={username}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
          <div className="mb-5">
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <div
                  key={result._id}
                  className="d-flex align-items-center gap-2"
                >
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={result.profilePic}
                      alt="profile pic"
                      width={30}
                      height={30}
                      className="rounded-circle"
                    />
                    <span>{result.username}</span>
                  </div>
                  <input
                    type="checkbox"
                    value={result._id}
                    onChange={handleCheckboxChange} // Add the onChange handler
                    style={{ width: 20, height: 20 }}
                  />
                </div>
              ))
            ) : (
              <div>No results found</div>
            )}
          </div>
          <Modal.Footer>
            <button className="btn btn-dark" onClick={inviteUser}>
              Invite
            </button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InviteUser;
