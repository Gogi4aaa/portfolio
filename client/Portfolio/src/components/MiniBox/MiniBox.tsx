import { ReactTyped } from "react-typed"

export const MiniBox = () => {
    return (
        <>
            <div>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
            <ReactTyped strings={[
                "Web Developer",
                "App Developer",
                "Entrepreneur"
            ]}
                className="text-danger"
                typeSpeed={40}
                backSpeed={40}
                backDelay={2000}
                loop
            />
                </div>
                <div>

                </div>
            </div>
        </>
    )
}