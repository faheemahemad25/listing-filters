import React from 'react';
import Table from 'react-bootstrap/Table';


function Students() {
    return (
        <div style={{border:"2px solid green", padding:"5px"}}>
            <h1>Student page</h1> <br />

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Abhee </td>
                        <td>Singh</td>
                        <td>@AbheSingh52</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Daksh</td>
                        <td>tyagi</td>
                        <td>@dakshtyagi782</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Govind</td>
                        <td>Bhardewaj</td>
                        <td>@govpandit87ji</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
}

export default Students;