import '../assets/style/home.css'
import Django from '../assets/django.png'
import NodeJS from '../assets/nodeJS.png'
import Python from '../assets/python.png'
import ReactLogo from '../assets/react.png'
import Ruby from '../assets/ruby-on-rails.png'
import Jules from '../assets/julesTech.png'
import NewTechnologies from '../assets/newTech.jpg'

function Home() {
    return (
        <div className='home'>
            <div className="gate overlay">
                <div className='left'>
                    <p>Ataisi </p>
                </div>
                <div className='right'>
                    <p> Nathan</p>
                </div>
            </div>
            <div className="home-main">
                <h2>Technologies</h2>
                <p>I make use of these technologies</p>
                <div className="home-tech">
                    <div className="card">
                        <img src={ReactLogo} alt="React Logo" />
                        <h3>React JS</h3>
                    </div>
                    <div className="card">
                        <img src={Django} alt="Django Logo" />
                        <h3>Django</h3>
                    </div>
                    <div className="card">
                        <img src={Python} alt="Python Logo" />
                        <h3>Python</h3>
                    </div>
                    <div className="card">
                        <img src={NodeJS} alt="Node Logo" />
                        <h3>Node JS</h3>
                    </div>
                    <div className="card">
                        <img src={Ruby} alt="Ruby on Rails Logo" />
                        <h3>Ruby on Rails</h3>
                    </div>
                </div>
                <h2>Categories</h2>
                <p>I build different categories of websites which includes but are not restricted to:</p>
                <div className="home-categories">
                    <ul>
                        <li>E-Commerce</li>
                        <li>Blogs</li>
                        <li>School Websites</li>
                        <li>Social Media Platform</li>
                        <li>Business Websites</li>
                        <li>Company Website</li>
                    </ul>
                </div>
                <h2>Clients</h2>
                <div className="home-clients">
                    <div className="card">
                        <img src={Jules} alt="Client image" />
                        <h3>Jules</h3>
                    </div>
                    <div className="card">
                        <img src={NewTechnologies} alt="Client image" />
                        <h3>New Technologies</h3>
                    </div>
                    <div className="card">
                        <img src={Jules} alt="Client image" />
                        <h3>Jules</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;