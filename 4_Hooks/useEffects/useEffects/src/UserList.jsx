import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function API() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);      
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        // Start fetching data
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(result => {
                setData(result);       
                setLoading(false);     
            })
            .catch(error => {
                setError(error);        
                setLoading(false);      
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const filteredUsers = data.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortOrder === "asc") {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    return (
        <div className="container">
            <h1>Fetched Data</h1>
            <input 
                type="text" 
                name="Enter" 
                placeholder='enter text' 
                onInput={(e) => setSearchTerm(e.target.value)}
                className="form-control mb-3"
            />
            <select 
                className="form-select mb-3" 
                onChange={(e) => setSortOrder(e.target.value)}
                value={sortOrder}
            >
                <option value="asc">Sort by Name (A-Z)</option>
                <option value="desc">Sort by Name (Z-A)</option>
            </select>
            <div className="row">
                {sortedUsers.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Email: {item.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
