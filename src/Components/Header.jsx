
import img from '../img/cubes.jpg'
function Header() {
  return (
    <div className="bg">
        <div className="row header">
          <div className="col ">
           <img  className="headerimg" src={img} alt="bhu" />
          </div>
          <div className="col headerContent ">
              <h1>Content</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus ex quasi quidem iure laudantium nihil adipisci. Repudiandae, reiciendis, natus eius non exercitationem quas earum quod id adipisci omnis fugiat.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus ex quasi quidem iure laudantium nihil adipisci. Repudiandae, reiciendis, natus eius non exercitationem quas earum quod id adipisci omnis fugiat.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus ex quasi quidem iure laudantium nihil adipisci. Repudiandae, reiciendis, natus eius non exercitationem quas earum quod id adipisci omnis fugiat.</p>
              </div>
        </div>
     
    </div>
  );
}

export default Header;
