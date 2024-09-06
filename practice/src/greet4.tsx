export function Greet4(){
    const list=["Red","blue","green"]
    return (<ul>
        {list.map((x,id)=>{
            return <li key={id}>{x}</li>
        })}
    </ul>)
}