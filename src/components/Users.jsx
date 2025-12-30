import { Link } from 'react-router';

export const users = [
    {
        "id": 1,
        "name": "Aarav Sharma",
        "email": "aarav.sharma@gmail.com",
        "address": "123, MG Road, Bengaluru, Karnataka 560001",
        "phone": "+91-9876543210"
    },
    {
        "id": 2,
        "name": "Priya Patel",
        "email": "priya.patel@yahoo.com",
        "address": "45, Civil Lines, Jaipur, Rajasthan 302006",
        "phone": "+91-8765432109"
    },
    {
        "id": 3,
        "name": "Vikram Singh",
        "email": "vikram.singh@outlook.com",
        "address": "78, Sector 15, Chandigarh, Punjab 160015",
        "phone": "+91-7654321098"
    },
    {
        "id": 4,
        "name": "Ananya Gupta",
        "email": "ananya.gupta@gmail.com",
        "address": "12, Anna Nagar, Chennai, Tamil Nadu 600040",
        "phone": "+91-6543210987"
    },
    {
        "id": 5,
        "name": "Rohan Kumar",
        "email": "rohan.kumar@hotmail.com",
        "address": "56, Vasant Vihar, New Delhi, Delhi 110057",
        "phone": "+91-5432109876"
    },
    {
        "id": 6,
        "name": "Sneha Reddy",
        "email": "sneha.reddy@gmail.com",
        "address": "89, Banjara Hills, Hyderabad, Telangana 500034",
        "phone": "+91-4321098765"
    },
    {
        "id": 7,
        "name": "Arjun Nair",
        "email": "arjun.nair@yahoo.com",
        "address": "34, MG Road, Kochi, Kerala 682016",
        "phone": "+91-3210987654"
    },
    {
        "id": 8,
        "name": "Kavya Joshi",
        "email": "kavya.joshi@outlook.com",
        "address": "101, Sector 5, Pune, Maharashtra 411005",
        "phone": "+91-2109876543"
    },
    {
        "id": 9,
        "name": "Aditya Verma",
        "email": "aditya.verma@gmail.com",
        "address": "23, Salt Lake, Kolkata, West Bengal 700064",
        "phone": "+91-1098765432"
    },
    {
        "id": 10,
        "name": "Meera Iyer",
        "email": "meera.iyer@hotmail.com",
        "address": "67, Adarsh Nagar, Ahmedabad, Gujarat 380013",
        "phone": "+91-9988776655"
    }
]


function Users() {

    return (
        <>
            <h1>Users List page</h1> <br />

            {
                users.map(user => (
                    <div key={user.id} style={{ marginLeft: "20px", marginBlock: "10px" }}>
                        {/* <Link to={"/user/"+user.id}><h3>{user.name}</h3></Link> */}
                        <Link to={`/user/${user.id}`}>
                            <h3>{user.name}</h3>
                        </Link>
                    </div>
                ))
            }
        </>
    );
}
export default Users;