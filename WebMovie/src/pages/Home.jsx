import React from 'react';
import Banner from '../components/Banner';
import MovieList from '../components/MovieList';

const Home = () => {
    return (
        <div className="bg-black">
            <Banner />
            <MovieList title="Phim Hot" />
            <MovieList title="Phim Đề Cử" />
        </div>
    );
};

export default Home;
