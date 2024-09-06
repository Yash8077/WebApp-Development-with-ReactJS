export function Greet3(){
    const name="Yash"
    const place="Dehradun"
    const age=21

    var style={
        backgroundColor:"red",
        padding:"2px"
    }
    return <><h1 style={{...style}}>My name is {name}</h1>
    <p>I am from {place} and I am {age} years old </p></>
}