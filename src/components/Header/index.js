import './styles.css'
import NavBar from '../NavBar';
function Header(){
    return(
        <header className="header">
            <div className="logo">
                <p>
                    Felipe <span>Baloneker</span>
                </p>
            </div>
            <NavBar/>
        </header>
    )
}
export default Header;