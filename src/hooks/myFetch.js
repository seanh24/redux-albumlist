export default async function myFetch(artistName) {
    const url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`;
    const data = await fetch(url);
    const jsonData = await data.json();
    return jsonData;
  }