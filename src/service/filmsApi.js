import axios from "axios";


const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWY3M2NmM2E2NzUxOTk0ZGJkMzRmNzBkNjdkYTAxZCIsInN1YiI6IjY2NzE4MjliZGVmZmM2NTBlOTgzZDBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vCpsdeFJkln7fn48A4uMIGIafDsvaEF2hBwcWGuLAI'
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));