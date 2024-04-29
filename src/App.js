
import { useState } from 'react';
import './App.css';
import { questions } from './Data/faqQuestion';

function App() {
  let [showAns, setShowAns] = useState(questions[0].id)
  return (
    <div className="App">
      <div>
        <h1>Frequentyly Asked Questions (FAQs)</h1>
        <div className='faqouter'>
          {questions.map((faqItems, i)=>{
            return(
            <div className='faqItems'>
            <h2>{faqItems.question}</h2>
              <p className={showAns===faqItems.id ? 'activeAns': ''}>{faqItems.answer}
              </p>
          </div>
        )
      }
      )
      }
          
          
        </div>
      </div>

    </div>
  );
}

export default App;
