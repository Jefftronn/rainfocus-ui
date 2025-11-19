'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import BaseSettings from "./BaseSettings"
import DesignExperiences from "./DesignExperiences";
import WorkFlowCards from "./WorkFlowCards";

export default function ModuleList() {
    const [moduleList, setModuleList] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true);
        async function fetchModules() {
            try {
                const res = await fetch("/mock-data/mock-module-list.json");
                if (!res.ok) throw new Error("Failed to fetch JSON");
                const data = await res.json();
                setModuleList(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
    fetchModules();
  }, []);

    return (
        <div>
            { moduleList.map((module) => {
                return (
                    <div className="module-list-container">
                    <div className="module-list-title"> 
                        <Image
                            className="module-icon"
                            src="/images/person-portal.png"
                            alt="Next.js logo"
                            width={35}
                            height={35}
                            priority
                        />
                        <h3>{module?.moduleTitle}</h3>
                    </div>
                        <BaseSettings steps={module?.steps[0]} />
                        <WorkFlowCards steps={module?.steps[1]} />
                        <DesignExperiences steps={module?.steps[2]} />
                    </div>
                );
                })
            }
        </div>
    );
}