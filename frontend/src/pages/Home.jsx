
import BackgroundImage from "../images/background/background.jpg";
import ShowCar from "../components/ShowCar.jsx";

function Home() {
    return (
        <div style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
        }}>
            <ShowCar/>
        </div>
    );
}

export default Home;