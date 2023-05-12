import {Link} from 'react-router-dom'
import './nav.css';

function Nav() {
    return (
        <nav>
            <div className="image"></div>
            <div className="info">
                <h2>Ataisi Nathan</h2>
                <h4>Front-end Web Developer | Machine Learning Engineer</h4>
            </div>
            

            <div className="navigate">
                <Link to='/'>
                    <div className="item">
                    <h3>🏠</h3>
                    <p>Home</p>
                </div>
                </Link>
                <Link to='/project'>
                    <div className="item">
                    <h3>⚙️</h3>
                    <p>Projects</p>
                </div>
                </Link>
                <Link to='/experience'>
                    <div className="item">
                    <h3>⌚</h3>
                    <p>Experience</p>
                </div>
                </Link>
                <Link to='/contact'>
                    <div className="item">
                    <h3>☎️</h3>
                    <p>Contact</p>
                </div>
                </Link>
                
                
                
                
            </div>
        </nav>
    )
}
export default Nav;