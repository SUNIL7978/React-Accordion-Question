import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const AlterNativeQuestion = ({ title, Ans, activeId, questionToggle, id }) => {
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          type="button"
          onClick={() => questionToggle(id)}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{Ans}</p>}
    </article>
  );
};

export default AlterNativeQuestion;
