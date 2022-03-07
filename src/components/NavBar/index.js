import './styles.css'
import {AiOutlineMenu} from "react-icons/ai";
import {useState} from 'react';

function NavBar(){
    const [openMenu,setOpenMenu] = useState();
    const scrollToId = (event)=>{
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const to = document.querySelector(id).offsetTop;
        window.scroll({top: to - 90 , left: 0, behavior: 'auto'});
    }

    const openMenuClick = ()=>{
        return openMenu ? setOpenMenu(false):setOpenMenu(true)
    }

    return(
        <nav className='menu' >
            <ul
            className={openMenu ? 'active':''}
            >
                <li><a href="#home" onClick={event => scrollToId(event)}>Home</a></li>
                <li><a href="#about" onClick={event => scrollToId(event)} >Sobre Mim</a></li>
                <li><a href="#servicos" onClick={event => scrollToId(event)} >Serviços</a></li>
                <li><a href="#portfolio" onClick={event => scrollToId(event)} >Portfolio</a></li>
                <li><a href="#contato"  onClick={event => scrollToId(event)}>Contato</a></li>
            </ul>
            <div className="mobile-menu">
                <AiOutlineMenu size={25}
                onClick={()=>openMenuClick()}
                />
            </div>
        </nav>
    )
}
export default NavBar;