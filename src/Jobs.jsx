export const Job = (props) => {
    return (
        <div className="userJob">
            <h2>salary: {props.salary}</h2>
            <h3>position: {props.position}</h3>
            <h4>company: {props.company}</h4>
        </div>
    );
};

