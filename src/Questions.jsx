import AlterNativeQuestion from './AlterNativeQuestion';
// import SingleQuestion from './SingleQuestion';

const Questions = ({ questions, activeId, questionToggle }) => {
  return (
    <section className="container">
      <h1>React Questions</h1>
      {questions.map((question) => {
        return (
          <AlterNativeQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            questionToggle={questionToggle}
          />
        );
      })}
    </section>
  );
};

export default Questions;
