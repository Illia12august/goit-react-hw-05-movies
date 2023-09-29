import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODNhOGJlZjFhMmU4ODczYTFiZjQ5ZTBiOTI3OTM2MSIsInN1YiI6IjY1MTA2ZWVlNmY1M2UxMGFhM2MwOTM5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-AqFi4Ss4g_d6MC-fD12PXzPrdZqYRXqK7d12UQhYSM',
  },
};

export const getMovies = async endpoint => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, options);
    return response;
  } catch (error) {
    console.log('Error fetching movies:', error);
  }
};