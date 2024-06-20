import './Styling/Card.css'

function Card({title, text}){
    return(
        <div className="card-container">
            <button className="open-card-btn"></button>
            <h2 className="card-title"> {title}</h2>
            <div className="line"></div>
            <p className="card-text"> {text}</p>
        </div>
    )
}
export default Card