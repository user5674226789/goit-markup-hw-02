import axios from "axios";

export async function getImages(query, currentPage) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = {
      key: '43180958-6b06a0884e2ebb29e4f1cb8bf',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 15,
      page: currentPage,
    };
    try {
      const res = await axios.get(BASE_URL, {params});
      return res.data
    } catch (error) {
        console.error('Error occurred while fetching images:', error);
        throw error;
      };
  }
