import Bloglist from './Bloglist';
import useFetch from './useFetch';
import backgroundVid from './falling2.mp4'

const Home = () => {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="Home">
            <div>
                <h1>Home</h1>
                <video autoPlay muted id="video"
                style={{
                    margin: "40px auto",
                    position: "absolute",
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(0%, -50%)",
                    zIndex: "-1"}}>
                    <source src={backgroundVid} type='video/mp4'/>
                </video>
            </div>
            <div className="home-lower" />
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
        </div>
    );
}

export default Home;