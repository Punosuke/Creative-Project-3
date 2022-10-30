import './styles.css';
import ruston from './images/rustin.png';
import cactus from './images/cactus.jpg';
import croagunk from './images/croagunk.png';
const Gallery = () => {
  return ( 
<div className='page'>
  
  <div className='section content'>
      <h1> A Small Gallery</h1>
<div className="photo-grid">
      <div className="photo-grid-item">
        <a href="ruston.html" target="_blank">
          <img src={ruston} alt="Bunk"/>
          <div className="caption">
            <p>Ruston in all his glory</p>
          </div>
        </a>
        </div>
    
      <div className="photo-grid-item">
        <a href="cactus.html" target="_blank">
          <img src={cactus} alt="saboten" />
          <div className="caption">
            <p>Sacred rain falls upon the cactus people.</p>
          </div>
        </a>
      </div>
    

      <div className="photo-grid-item">
        <a href="croag.html" target="_blank">
          <img src={croagunk} alt="frog" />
          <div className="caption">
            <p>A very toxic frog, beware.</p>
          </div>
        </a>
      </div>

  </div>
</div>
        <footer>
  <h1>Link to Github:</h1>
  <h1><a href="https://github.com/Punosuke/Creative-Project-3">HERE</a></h1>
</footer>
</div>



  )
};

export default Gallery;