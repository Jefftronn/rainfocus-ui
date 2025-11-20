import Image from "next/image";
export default function DesignExperiences({steps}: any) {
    return (
        <div className="workflow-container">
            <p className="step-title step-title-bold">Step {steps?.stepName}: <span className="step-title-text">{steps?.stepTitle}</span></p>
            <div className="workflow-list-container">
                {
                    steps?.stepCards.map((card: any, index: number) => {
                        return (
                            <div key={index} className="workflow-content">
                                <div className="workflow-title">
                                    <Image
                                        className="workflow-icon"
                                        src="/images/computer.svg"
                                        alt="Next.js logo"
                                        width={24}
                                        height={24}
                                        priority
                                    />                                
                                <p className="primary-title-color base-title-text">{card?.cardTitle}</p>
                                </div>
                                <p className="primary-color base-text">{card?.cardDescription}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    ); 
}