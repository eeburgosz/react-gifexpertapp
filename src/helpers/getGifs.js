export const getGifs= async(category) => {
        
    const url= `https://api.giphy.com/v1/gifs/search?api_key=7xO5jHk9dYrGRAJnL2Q8EPOFY8bxpizC&q=${encodeURI(category)}&limit=15`;
    const resp= await fetch(url);
    const {data}= await resp.json();
    //console.log(data);
    const gifs= data.map(img => {
        //console.log(img);
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_large.url
        }
    });
    return gifs;
    
};