export const getGifs = async (category) => {
  const apiKey = 'Alir5NRkrPRsZHxxXnxSDuVsNA4wSuF3';
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));

  return gifs;
};
