import React from 'react'

export default function TableComp(props) {
    var teamlist=props.teams;
    function alerton(){
        alert("This button is pressedd");
        }
  return (
    <>
    <h1>Hockey Match</h1>
    <table  className="table table-striped table-bordered hover">
        <tr>
            <th>Player</th>
            <th>Team</th>
            <th>Goals</th>
            <th>Assists</th>
        </tr>
        {teamlist.map((data,index)=>{
            return(
            <tr>
                <td>{data.name}</td>
                <td>{data.team}</td>
                <td>{data.goals}</td>
                <td>{data.assists}</td>
            </tr>);
        })}
        <ul style={{listStyle:"circle"}}>
        {teamlist.map((data,index)=>{
            return(<li>{data.team}</li>);
        })}
        </ul>
    </table>
    <button onClick={alerton}>Click ME</button>
    </>
  )
}
