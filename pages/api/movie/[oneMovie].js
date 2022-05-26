
export default async function handler(req, res) {
    const {params,query}=req;
//    const {movie,page}=query;
    const {oneMovie}=query;
//    console.log('seen')
    const url = `https://movie-database-alternative.p.rapidapi.com/?r=json&i=${oneMovie}`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY
  }
};
    
    
    const response = await fetch(url,options);
    const data= await response.json();
    
  res.status(200).json(data)
}
