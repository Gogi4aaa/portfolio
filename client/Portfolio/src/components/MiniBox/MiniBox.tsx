import "../MiniBox.css"
import { ReactTyped } from "react-typed"

export const MiniBox = () => {
    return (
        <>
            <div className="border p-3" style={{width: "340px"}}>
                <div className="border-style mb-4 pb-4">
                        <img src="https://res.cloudinary.com/dzrp3c1cv/image/upload/v1728499360/km7va9384fuk6furyr1d.jpg" className="border rounded-circle" alt="" style={{width: "170px", height: "170px"}}/>
                    <h4 className="text-white mt-3">Georgi Dimitrov</h4>
                    <ReactTyped strings={[
                        "Web Developer",
                        "App Developer",
                        "Entrepreneur"
                    ]}
                        className="main-color"
                        typeSpeed={40}
                        backSpeed={40}
                        backDelay={2000}
                        loop
                    />
                </div>
                <div className="p-3">
                    <div className="d-flex justify-content-between text-white">
                        <h6>Residence:</h6>
                        <h6 className="text-secondary">Bulgaria</h6>
                    </div>
                    <div className="d-flex justify-content-between text-white">
                        <h6>City:</h6>
                        <h6 className="text-secondary">Dryanovo</h6>
                    </div>
                    <div className="d-flex justify-content-between text-white">
                        <h6>Age:</h6>
                        <h6 className="text-secondary">17</h6>
                    </div>
                    <div>
                        <i className="facebook"></i><i className="linkedin"></i><i className="twiter"></i><i className="instagram"></i><i className="googleplay"></i>
                    </div>
                </div>
                <div className="mt-3">
                    <button className="main-button rounded-pill w-100">DOWNLOAD CV <span><img src="/public/output-onlinegiftools.gif" alt="" style={{width: "40px", height: "30px"}} /></span></button>
                </div>
            </div>
        </>
    )
}