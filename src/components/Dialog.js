import React from 'react';



function UrlExistsModal({ existingUrlData, handleClose, saveData }) {
    return (
        <div className="modal show d-block m-2" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="bg-white rounded p-0 m -2 w-100 h-100">
                    <div className="modal-content bg-black rounded">
                        <div className="modal-header">
                            <h5 className="modal-title text-white">URL Already Exists</h5>
                            <button type="button" className="close text-white bg-black m-1" aria-label="Close" onClick={handleClose}>
                                <span >&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-white">
                            <p><strong>Created At:</strong> {existingUrlData?.created_at}</p>
                            <p><strong>Created By:</strong> {(existingUrlData?.created_by ?? "Random").toUpperCase()}</p>
                            <p><strong>Created By IP:</strong> {existingUrlData?.created_by_ip}</p>
                        </div>
                        <div className="modal-footer d-flex justify-content-between w-100">
                            <button type="button" className="btn btn-primary" onClick={saveData}>Update Url Data</button>
                            
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UrlExistsModal;