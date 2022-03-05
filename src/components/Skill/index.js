import './styles.css';

function Skill({name,progress}){
    return(
        <div className="skill">
        <p>{name}</p>
        <span className="progress">
            <span className="progress-bar"
            style={{width:`${progress}`}}
            ></span>
        </span>
    </div>
    )
}
export default Skill;