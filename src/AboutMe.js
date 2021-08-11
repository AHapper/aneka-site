import Footer from './Footer';
import pic from './pic.png'

const AboutMe = () => {
    return ( 

        <div className="about-me">
            <div className="about-me-content">
                <img src={pic} style={{maxWidth: 500, maxHeight: 500, float: 'left', paddingLeft: 120, paddingRight: 120}}/>
            </div>
            
        </div>
     );
}
 
export default AboutMe;