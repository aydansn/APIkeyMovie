
const getMovie = async parametr => {
    const API_KEY = "d781bcb1";
    const response = await fetch(
        `http://www.omdbapi.com/?t=${parametr}&apikey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.Country);
    console.log(data.Actors);
    console.log(data.BoxOffice);
}

getMovie("euphoria");
getMovie("after");
getMovie("fightclub");