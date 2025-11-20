import Image from "next/image";
import AddWorkFlowCard from "./AddWorkFlowCard";
import { useState } from "react";
import AddWorkFlowModal from "./AddWorkFlowModal";

export default function WorkFlowCards({steps}: any) {
    const [workFlowSteps, setWorkFlowSteps] = useState(steps.stepCards);
    const [openAddModal, setOpenAddModal] = useState(false);

    function addNewWorkFlowCard(card: any) {
        setWorkFlowSteps((currentCards: any) => [...currentCards, card])
        setOpenAddModal(false);
    }

    return (
        <div className="workflow-container">
            <p className="step-title step-title-bold">Step {steps?.stepName}: <span className="step-title-text">{steps?.stepTitle}</span></p>
            <div className="workflow-list-container">
                {
                    workFlowSteps.map((workFlowSteps: any, index: number) => {
                        return (
                            <div key={index} className="workflow-content">
                                <div className="workflow-title">
                                    <Image
                                        className="workflow-icon"
                                        src="/images/back-arrow.svg"
                                        alt="Next.js logo"
                                        width={24}
                                        height={24}
                                        priority
                                    /> 
                                <p className="primary-title-color base-title-text">{workFlowSteps?.cardTitle}</p>
                                </div>
                                <p className="primary-color base-text">{workFlowSteps?.cardDescription}</p>
                            </div>
                        );
                    })
                }
                <AddWorkFlowCard openAddModal={() => setOpenAddModal(true)}/>
            </div>
            {
                openAddModal && (
                    <AddWorkFlowModal
                        onClose={()=> setOpenAddModal(false)}
                        onSubmit={addNewWorkFlowCard}
                    />
                )
            }
        </div>
    );
}