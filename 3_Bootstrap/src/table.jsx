import React from 'react';
import {Table} from 'react-bootstrap/Table';
const Tablu = () => {
    return (
        <Table className="table striped-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>jane.smith@example.com</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Bob Johnson</td>
                    <td>bob.johnson@example.com</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default Tablu;