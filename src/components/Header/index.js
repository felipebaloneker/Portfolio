import './styles.css'
import NavBar from '../NavBar';
import { useState } from 'react';
function Header(){
    const [colorChange,setColorchange] = useState(false)
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
          setColorchange(true);
        }
        else{
          setColorchange(false);
        }
     };
     window.addEventListener('scroll', changeNavbarColor);
    return(
        <header className={colorChange? 'header not-transparent':'header'}
        >
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