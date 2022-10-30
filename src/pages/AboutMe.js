import './styles.css';

import karasu from './images/karasu.png';
const AboutMe = () => {
  return (
<div className='page'>
  
  <div className='section content'>
    <h1>About Me</h1>
    
    <p> I don't remember when I started drawing. I don't draw seriously very much
    but I will draw pictures for my friends for fun. I took art classes, but I didn't like them
    very much. I grew up in a half Japanese half American home, so I came in contact with
    a lot of weird Japanese art from which my art is heavily influenced.<br/> Below is a picture of a 
    crow that I drew. Crows remind me a lot of Japan.</p>
    
    <img src={karasu} alt="karasu" width="500" height="500"/>
    
    
</div>

</div>


  )
};

export default AboutMe;