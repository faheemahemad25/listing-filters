import React from 'react';
import { Link, useParams } from 'react-router';
import { users } from './Users'

function User() {
    // const { id } = useParams();   // get dynamic value

    const paramData = useParams()

    console.log(paramData); // jis pr bhi click kra vo like this {id: '1'}  or jo bhi url me parameter h usko utha leta h and obj me id property pr rakhdeta h.
    console.log("paramData.id ----", paramData.id);

    const selectedUser = users.filter(user => {
        if (paramData.id == user.id) {
            return true
        } else {
            return false
        }
    })

    console.log("selectedUser", selectedUser);


    return (
        <>
            <h1>User Details page</h1> <br />
            
            <Link to="/users">Back</Link>  <br /> <br />


            <h2>User id is : {paramData.id}</h2> <br />

                 {
                    selectedUser.map(selectedUser => (
                        <div key={selectedUser.id}>
                            <div  style={{
                                maxWidth: '500px',
                                margin: '20px auto',
                                padding: '24px',
                                backgroundColor: '#ffffff',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                fontFamily: 'Arial, sans-serif'
                            }}>
                                <p style={{ marginBottom: '12px', fontSize: '16px' }}>
                                    <strong>Name:</strong> {selectedUser.name}
                                </p>
                                <p style={{ marginBottom: '12px', fontSize: '16px' }}>
                                    <strong>Email:</strong> {selectedUser.email}
                                </p>
                                <p style={{ marginBottom: '12px', fontSize: '16px' }}>
                                    <strong>Phone:</strong> {selectedUser.phone}
                                </p>
                                <p style={{ marginBottom: '12px', fontSize: '16px' }}>
                                    <strong>Address:</strong> {selectedUser.address}
                                </p>
                            </div>

                            <br />
                            <hr />

                            <div style={{
                                maxWidth: '600px',
                                margin: '30px auto',
                                padding: '30px',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                borderRadius: '12px',
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                            }}>
                                <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>{selectedUser.name}</h2>
                                <p style={{ marginBottom: '15px', fontSize: '16px', opacity: '0.95' }}>
                                    📧 {selectedUser.email}
                                </p>
                                <p style={{ marginBottom: '15px', fontSize: '16px', opacity: '0.95' }}>
                                    📱 {selectedUser.phone}
                                </p>
                                <p style={{ fontSize: '16px', opacity: '0.95' }}>
                                    📍 {selectedUser.address}
                                </p>
                            </div>

                        </div>
                    ))
                } 

           

        </> 
    );
}
export default User;