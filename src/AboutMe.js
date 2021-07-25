import pic from './pic.png'

const AboutMe = () => {
    return ( 

        <div className="about-me">
            <h1>About</h1>
            <img src={pic} style={{maxWidth: 500, maxHeight: 500, float: 'left', paddingRight: 70}}/>
            <p> 
                Hi! My name is Aneka Happer, I am a computer science and math student at the University of North Carolina Chapel Hill. I like all kinds of stuff
                so I made this website to show some of it in one place (check out the projects tab for all that). If you want to contact me (maybe you have a 
                coupon for free ice cream you need to get rid of?) the links are below! 
            </p>
            <button variant="outlined">Email</button>
           
            
        </div>
     );
}
 
export default AboutMe;