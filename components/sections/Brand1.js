import BrandSlider1 from "../slider/BrandSlider1"


export default function Brand1() {
    return (
        <>
            <div className="brand-section fix " style={{paddingBottom:'60px'}}>
                <div className="container">
                    <div className="brand-wrapper">
                        <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">Master The Technologies</h6>
                        <BrandSlider1 />
                    </div>
                </div>
            </div>
        </>
    )
}
