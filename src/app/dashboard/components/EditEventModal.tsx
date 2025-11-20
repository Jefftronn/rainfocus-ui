import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditEventModal({eventInfo, onClose, onSubmit}:any) {
    const [name, setName] = useState(eventInfo.name);
    const [date, setDate] = useState(eventInfo.date);
    const [city, setCity] = useState(eventInfo.city);
    const [state, setState] = useState(eventInfo.state);

    function handleSubmit() {
        onSubmit({
            name,
            date,
            city,
            state
        })
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container md-modal">
                <div className="modal-title">
                    <div>
                        <p>Edit Your Event</p>
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
                    <div className="double-column">
                        <div className="modal-input-container">
                        <h4 className="modal-input-label">Event Title</h4>
                        <input 
                            className="modal-input" 
                            type="text" 
                            placeholder="Write your title"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                        <div className="modal-input-container">
                            <h4 className="modal-input-label">Event Date</h4>
                            <DatePicker selected={date} onChange={(date) => setDate(date)} />
                        </div>
                    </div>
                    <div className="double-column">
                        <div className="modal-input-container">
                        <h4 className="modal-input-label">Event City</h4>
                        <input 
                            className="modal-input" 
                            type="text" 
                            placeholder="City..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        </div>
                        <div className="modal-input-container">
                            <h4 className="modal-input-label">Event State</h4>
                                <select className="select-input" id="my-select" value={state} onChange={(e)=> setState(e.target.value)}>
                                    <option value="Nevada">Nevada</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Utah">Utah</option>
                                </select>
                        </div>
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