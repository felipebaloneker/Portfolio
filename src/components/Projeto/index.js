import './styles.css'
function Projeto({link,image,title,text}){
    return(
        <div className="box-wrp" animation='left'>
            <div className='img-wrp'>
                <a className='modal-btn' href={link}>
                    <img src={image} alt="projeto imagem" />
                </a>
            </div>
            <div className="text-wrp">
                <div className="text-area">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
export default Projeto