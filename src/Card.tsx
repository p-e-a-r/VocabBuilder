import './Styling/Card.css'

function Card(){
    return(
        <div className="card-container">
            <button className="open-card-btn"></button>
            <h2 className="card-title"> {/*fetch title here*/}</h2>
            <div className="line"></div>
            <p className="card-text"> {/*fetch text here*/}</p>
        </div>
    )
}
export default Card