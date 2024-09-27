import React from 'react';
import { Table } from 'react-bootstrap';

export default function Tablu(props) {
    const names = props.name;
    const companies = props.company;
    return (
        <>
            <h1>Table using Bootstrap and props</h1>
            <p>Details</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
               
                <tbody>
                    {names.map((name, index) => (
                        <tr key={index}>
                            <td>{companies[index]}</td>
                            <td>{name}</td>
                            <td>India</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}
