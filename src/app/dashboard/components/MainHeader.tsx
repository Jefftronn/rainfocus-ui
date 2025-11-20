'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import EditEventModal from "./EditEventModal";

export default function MainHeader() {
    const [eventInfo, setEventInfo] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [openAddModal, setOpenAddModal] = useState(false);

    function editEventDetails(details: any) {
        setEventInfo(details);
        setOpenAddModal(false);
    }

    useEffect(() => {
        setLoading(true);
        async function fetchEventInfo() {
            try {
                const res = await fetch("/mock-data/mock-event.json");
                if (!res.ok) throw new Error("Failed to fetch JSON");
                const data = await res.json();
                setEventInfo(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchEventInfo();
    }, []);

    const eventDate = new Date(eventInfo?.date)
    const formattedDate = eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="main-header-container">
            <div className="event-header-info">
                <Image
                    className="event-logo"
                    src="/images/summit-logo.png"
                    alt="Next.js logo"
                    width={95}
                    height={95}
                    priority
                />                
                <div className="event-info">
                    <h1 className="main-event-header">{eventInfo?.name}</h1>
                    <div className="event-details">
                        <p className="primary-color main-event-text">{formattedDate}</p>
                        <p className="primary-color main-event-text">{eventInfo?.city} {eventInfo?.state}</p>
                    </div>
                </div>
            </div>
            <div className="edit-event-conatiner">
                <button onClick={() => setOpenAddModal(true)} className="edit-event-button">Edit Event</button>
            </div>
            {openAddModal && (
                <EditEventModal 
                    eventInfo={eventInfo}
                    onClose={()=> setOpenAddModal(false)}
                    onSubmit={editEventDetails}/>
                )
            }
        </div>
    )
}