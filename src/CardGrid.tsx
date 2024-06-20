import './Styling/CardGrid.css'

import Card from './Card'


function CardGrid({cardsData}){
    return(
        <div className='grid-cont'>
            {cardsData.map((card, index) => (
                <Card key={index} title={card.title} text={card.text}/>
            ))}
        </div>
    )
}


export default CardGrid