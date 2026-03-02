import PropTypes from 'prop-types';
const MovieList = ({ title }) => {
    return (
        <div className='text-white p-10'>
            <h1 className='text-2xl font-bold'>{title}</h1>
        </div>
    );
};
MovieList.propTypes = {
    title: PropTypes.string.isRequired,
};
export default MovieList;
