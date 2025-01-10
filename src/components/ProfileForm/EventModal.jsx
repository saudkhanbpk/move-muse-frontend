import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventModal = ({ isOpen, onClose, onSubmit }) => {
    const [link, setLink] = useState('');

    const handleInputChange = (e) => {
        setLink(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(link); // Pass the link back to the parent or handler function
        setLink(''); // Clear the input field after submission
        onClose(); // Close the modal
    };

    if (!isOpen) return null; // Render nothing if modal is not open

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50"
            tabIndex="-1"
            role="dialog"
            style={{ transition: 'opacity 0.3s ease' }} // Smooth transition effect
        >
            <div className="modal-dialog modal-dialog-centered shadow-lg border-1 rounded" role="document" style={{
                maxWidth: '350px',
                width: '100%',
                padding: '2rem',
                backgroundColor: 'white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Smooth shadow effect
            }}>
                <div className="modal-content rounded-4 border-0" >
                    <div className="modal-header border-bottom-0">
                        <h5 className="modal-title text-primary">Paste Your Link</h5>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={onClose}
                            style={{ fontSize: '1rem' }}
                        ></button>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="modal-body my-4">
                            <input
                                type="url"
                                value={link}
                                onChange={handleInputChange}
                                placeholder="Enter link here"
                                className="form-control p-3 rounded-3 border-primary"
                                style={{ fontSize: '1rem' }}
                                required
                            />
                        </div>
                        <div className="modal-footer border-top-0 d-flex justify-content-end">
                            <button
                                type="button"
                                className="btn btn-outline-secondary rounded-3 px-4 me-2"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary rounded-3 px-4"
                                style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventModal;



