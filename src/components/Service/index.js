import './styles.css'

function Service({image,title,text}){
    return(
        <div className="service" animation='left'>
            <img src={image} alt="Paginas imagem" />
            <h2><span>{title}</span></h2>
            <p>{text}</p>
        </div>
    )
}
export default Service;