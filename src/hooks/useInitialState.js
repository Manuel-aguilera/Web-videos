import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });
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

    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
