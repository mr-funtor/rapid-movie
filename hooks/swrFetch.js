const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
		'X-RapidAPI-Key': process.env.RAPID_API_KEY
	}
};


const fetcher= async (...args)=>{
    const response= await fetch(...args,options);
    const data= await response.json();
    return data;
}

export default fetcher;