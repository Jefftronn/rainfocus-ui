import Image from "next/image";

export default function AddWorkFlowCard({openAddModal}: any) {
    return (
        <div className="add-workflow-content" onClick={openAddModal}>
            <Image
                className="add-workflow-image"
                src="/images/add.svg"
                alt="Next.js logo"
                width={24}
                height={24}
                priority
            />    
            <p className="primary-title-color base-text">Add Registration Workflow</p>
        </div>
    );
}