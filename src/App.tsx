import CardGrid from './CardGrid'

import './Styling/App.css'

function App() {

      const cardsData = [
        { title: "", text: '' },
        { title: "", text: '' },
        { title: "", text: '' },
        { title: "", text: '' },
        { title: "", text: '' },
        { title: "", text: '' },
      
    ];
 return(
  <div>
   <CardGrid cardsData={cardsData} />
  </div>
 ) 
 }
export default App
