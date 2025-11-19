import Image from "next/image";

export default function AddWorkFlowCard() {

    function openAddWorkFlowModal() {
        console.log("open it");
    }

    return (
        <div className="add-workflow-content" onClick={openAddWorkFlowModal}>
            <Image
                className="add-workflow-image"
                src="/images/add.svg"
                alt="Next.js logo"
                width={24}
                height={24}
                priority
            />    
            <p>Add Registration Workflow</p>
        </div>
    );
}