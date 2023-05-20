export const User = (props) => {
    return (
        <div className="userCompo">
            <h2>name: {props.name}</h2>
            <h3>age: {props.age}</h3>
            <h4>email: {props.email}</h4>
        </div>
    );
};
