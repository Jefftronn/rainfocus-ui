import Image from "next/image";
export default function DesignExperiences({steps}: any) {
    return (
        <div className="workflow-container">
            <p className="step-title">Step {steps?.stepName}: {steps?.stepTitle}</p>
            <div className="workflow-list-container">
                {
                    steps?.stepCards.map((card: any) => {
                        return (
                            <div className="workflow-content">
                                <div className="workflow-title">
                                    <Image
                                        className="workflow-icon"
                                        src="/images/computer.svg"
                                        alt="Next.js logo"
                                        width={24}
                                        height={24}
                                        priority
                                    />                                
                                <p>{card?.cardTitle}</p>
                                </div>
                                <p>{card?.cardDescription}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    ); 
}