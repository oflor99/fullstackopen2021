const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <h4>Total exercises: {total}</h4>
    </div>
  );
};

export default Total;
