import { useEffect, useState } from 'react';
import UserData from './components/UserData';
import './App.css';

function Skeleton() {
  return (
    <div className="animate-pulse flex p-6 m-4 justify-center shadow-lg items-center flex-col min-w-[300px] max-w-[400px] transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="h-20 w-20 bg-gray-300 flex justify-center items-center rounded-full mb-2"></div>
      <div className="h-6 bg-gray-300 rounded mb-2 w-full"></div>
      <div className="h-6 bg-gray-300 rounded mb-2 w-full"></div>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sort === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <>
      <h1 className="text-2xl text-blue-600">UseEffect Fetching</h1>
      <input
        type="text"
        placeholder="Search by name or username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 m-4 border rounded w-60"
      />
      <select
        value={sort}
        onChange={handleSortChange}
        className="p-2 m-4 border rounded w-60"
      >
        <option value="asc">Sort by Name (A-Z)</option>
        <option value="desc">Sort by Name (Z-A)</option>
      </select>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div className='m-4' key={index}>
              <Skeleton />
            </div>
          ))
        ) : (
          sortedUsers.length > 0 ? (
            sortedUsers.map((user, ind) => (
              <div className='m-4' key={ind}>
                <UserData user={user} />
              </div>
            ))
          ) : (
            <div className="text-2xl text-center col-span-full text-red-500 mt-12">
              No users found
            </div>
          )
        )}
      </div>
    </>
  );
}

export default App;
