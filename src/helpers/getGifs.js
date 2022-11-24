export const getGifs = async (category) => {

    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=b7qI8blmnc1R40Fbq4doWnL6ervbi1hR&q=${ category }&limit=10`;
        const request = await fetch(url);
        const { data } = await request.json();

        const gifs = data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }));

        return gifs;

    } catch (error) {
        console.log(error);
    }

};