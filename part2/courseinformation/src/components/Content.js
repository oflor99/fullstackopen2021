import Part from "./Part"

const Content = ({courseContent}) => {
    return(
        <div>
            {courseContent.map(p => 
                <Part key = {p.id} partName = {p.name} exercises = {p.exercises}/> 
            )}
        </div>
    )
}

export default Content;