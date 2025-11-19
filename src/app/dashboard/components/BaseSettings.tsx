'use client'

export default function BaseSettings({steps}:any) {
    return (
        <div className="base-setting-content">
            <p className="step-title">Step {steps?.stepName}: {steps?.stepTitle}</p>
            <div className="base-setting-list-container">
                {
                    steps?.stepCards?.map((card: any) => {
                        return (
                            <div className="base-setting">
                                <p className="base-title">{card?.cardTitle}</p>
                                <p>{card?.cardDescription}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}