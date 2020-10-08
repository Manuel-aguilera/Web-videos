import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    //con async await
    // const fetchVideos = async () => {
    //   try {
    //     const response = await fetch('http://localhost:3000/initialState');
    //     const data = await response.json();
    //     return setVideos(data);
    //   } catch {
    //     console.log(error.message);
    //   }
    // };
    // fetchVideos();

    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setVideos(data));

  }, []);

  console.log(videos);

  return (
    <div className='App'>
      <Header />
      <Search />

      <Categories title='Mi lista'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='Tendencias'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='Originales de platzi video'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
