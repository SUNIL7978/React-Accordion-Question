import { useState } from 'react';
import data from './data';
import Questions from './Questions';

function App() {
  const [questions, setQuestion] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const questionToggle = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        questionToggle={questionToggle}
      />
    </main>
  );
}

export default App;
