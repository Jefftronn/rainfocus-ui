import { useState } from "react";
import Image from "next/image";

export default function AddWorkFlowModal({onClose, onSubmit}:any) {
    const [cardTitle, setCardTitle] = useState('');
    const [cardDescription, setCardDescription] = useState('');

    function handleSubmit() {
        onSubmit({
            cardTitle,
            cardDescription
        })
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container sm-modal">
                <div className="modal-title">
                    <div>
                        <p>Create a Workflow</p>
                    </div>
                    <div onClick={onClose}>
                        <Image
                            className="modal-close-icon"
                            src="/images/close.svg"
                            alt="Next.js logo"
                            width={24}
                            height={24}
                            priority
                        />       
                    </div>
                </div>
                <div className="modal-content">
                    <div className="modal-input-container">
                        <h4 className="modal-input-label">Workflow Title</h4>
                        <input 
                            className="modal-input" 
                            type="text" 
                            placeholder="Write your title"
                            value={cardTitle}
                            onChange={(e) => setCardTitle(e.target.value)}
                            />
                    </div>
                    <div className="modal-input-container">
                        <h4 className="modal-input-label">Workflow Description</h4>
                        <textarea 
                            className="modal-textarea" 
                            name="" 
                            id="" 
                            placeholder="Write your description"
                            value={cardDescription}
                            onChange={(e) => setCardDescription(e.target.value)}     
                        ></textarea>
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="modal-buttons button-cancel">Cancel</button>
                    <button onClick={handleSubmit} className="modal-buttons button-base">Submit</button>
                </div>
            </div>
        </div>
    );
}