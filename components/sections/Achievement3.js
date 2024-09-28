import CounterUp from "../elements/CounterUp";

export default function Achievement3() {
  return (
    <>
      <section className="achievement-section-3 fix "
        style={{
          backgroundImage: 'url(/assets/img/faq/shape.png)',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover',
        }}
      >
        <div className="shape-image">
          <img src="/assets/img/achiv-shape.png" alt="shape-img" />
        </div>

        <div className="container">

          <div className="achievement-wrapper style-2">
            <div className="section-title mb-0">
              <span className="text-white wow faEdeInUp">achievement</span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Celebrate Major Wins
              </h2>
            </div>
            <div className="counter-area" 
            
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}
            >
              <div className="counter-items wow fadeInUp" data-wow-delay=".3s"
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className="icon">
                  <img src="/assets/img/achievement-icon/01.svg" alt="icon-img" />
                </div>
                <div className="content">
                  <h2><CounterUp count={6561} />+</h2>
                  <p>Students</p>
                </div>
              </div>

              <div className="counter-items wow fadeInUp" data-wow-delay=".5s"
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className="icon">
                  <img src="/assets/img/achievement-icon/02.svg" alt="icon-img" />
                </div>
                <div className="content">
                  <h2><CounterUp count={600} />+</h2>
                  <p>Projects</p>
                </div>
              </div>

              <div className="counter-items wow fadeInUp" data-wow-delay=".7s"
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className="icon">
                  <img src="/assets/img/achievement-icon/03.svg" alt="icon-img" />
                </div>
                <div className="content">
                  <h2><CounterUp count={250} />+</h2>
                  <p>Skilled Mentors</p>
                </div>
              </div>

              <div className="counter-items wow fadeInUp" data-wow-delay=".9s"
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className="icon">
                  <img src="/assets/img/achievement-icon/04.svg" alt="icon-img" />
                </div>
                <div className="content">
                  <h2><CounterUp count={6561} />+</h2>
                  <p>Certified Students</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}
