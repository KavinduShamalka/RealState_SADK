import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'f6eb530220mshb54d717c60043bfp1ef79bjsnd8b504787a22'
          }
    });

    return data;
}
