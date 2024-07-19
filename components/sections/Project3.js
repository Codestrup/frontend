
import VideoPopup from '../elements/VideoPopup'
import ProjectSlider3 from '../slider/ProjectSlider3'

export default function Project3() {
    return (
        <>
            <section className="project-section-3 section-padding pb-0 fix bg-cover" id="project" style={{ backgroundImage: 'url("assets/img/testimonial/bg.jpg")' }}>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="text-white">Our Projects</span>
                            <h2 className="text-white">
                            Code the World with Us  <br/> at Codestrup Infotech
                            </h2>
                        </div>
                        <VideoPopup style={1} />
                    </div>
                    <div className="project-wrapper style-2">
                        <ProjectSlider3 />
                    </div>
                    <div className="swiper-dot-2 mr-left">
                        <div className="dot-2" />
                    </div>
                </div>
            </section>
        </>
    )
}
