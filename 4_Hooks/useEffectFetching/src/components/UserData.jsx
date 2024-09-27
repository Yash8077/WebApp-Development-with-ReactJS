import PropTypes from 'prop-types';

export default function UserData(props) {
    UserData.propTypes = {
        user: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            username: PropTypes.string
        })
    };
    return (
        <div className='flex p-6 m-4 justify-center shadow-lg items-center flex-col min-w-[300px] max-w-[400px] transition-transform transform hover:scale-105 hover:shadow-2xl'>
            <div className='rounded-full p-2 mb-4 w-24 h-24 flex justify-center items-center'>
                <img src={`https://robohash.org/${props.user.id}`} alt='robot' className='w-20 h-20 rounded-full' />
            </div>
            <h2 className='text-xl text-blue-600'>{props.user.name}</h2>
            <h6 className='text-sm text-gray-600'>@{props.user.username}</h6>
        </div>
    )
}