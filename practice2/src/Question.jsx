
export default function Question(props) {
    var array = Array.of(20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);
   
    return (
        <div>
            <h1>Values of array before performing any operation</h1><br />
            {array}
            <h1>Values of array after performing some operation</h1><br />
            {array.join(", ")}
            <h1>My name is {props.name} and my Age is {props.age}</h1>
        </div>
    );
}