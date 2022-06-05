import lightbulb from "../img/microsoft_pen.jpg";

function Aboutus() {
  return (
    <div className="bg aboutus">
        <div className="aboutusContent_left">
          <h1>About US</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis velit maxime porro provident alias consequuntur modi eius.</p>
          <button  >Know more</button>
        </div>
        <div className="aboutusContent_center">
          <img src={lightbulb} alt="lightbulb" height="100%" width="100%"/>
        </div>
        <div className="aboutusContent_right">
          <h1>Our History </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum numquam voluptates, magnam commodi soluta iusto veniam iure officia incidunt vel.</p>
          <button  >Know more about History</button>
       
      </div>
    </div>
  );
}

export default Aboutus;
