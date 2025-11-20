'use client'

export default function BaseSettings({steps}:any) {
    return (
        <div className="base-setting-content">
            <p className="step-title step-title-bold">Step {steps?.stepName}: <span className="step-title-text">{steps?.stepTitle}</span></p>
            <div className="base-setting-list-container">
                {
                    steps?.stepCards?.map((card: any, index: number) => {
                        return (
                            <div key={index} className="base-setting">
                                <p className="base-title primary-title-color base-title-text">{card?.cardTitle}</p>
                                <p className="primary-color base-text">{card?.cardDescription}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}