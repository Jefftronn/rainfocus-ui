import Image from "next/image"

export default function SideNav() {
    return (
        <div className="side-nav-container">
            <div className="rainfocus-logo">
                <Image
                    className=""
                    src="/images/rainfocus-small-logo.png"
                    alt="Next.js logo"
                    width={32}
                    height={32}
                    priority
                /> 
            </div>
            <div className="side-nav-items-container">
                <Image
                    className=""
                    src="/images/summit-icon.png"
                    alt="Next.js logo"
                    width={32}
                    height={32}
                    priority
                /> 
            </div>
            <div className="side-nav-user-container">
                <p>JG</p>
            </div>
        </div>
    )
}