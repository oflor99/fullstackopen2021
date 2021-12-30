import Part from "./Part";
import Total from "./Total";

const Content = ({ courseContent }) => {
  return (
    <div>
      {courseContent.map((p) => (
        <Part key={p.id} partName={p.name} exercises={p.exercises} />
      ))}
      <Total parts={courseContent} />
    </div>
  );
};

export default Content;
