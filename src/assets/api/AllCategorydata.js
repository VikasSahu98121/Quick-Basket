import axios from "axios";

export const Category = async (slug) => {
  const lowerSlug = slug.trim().toLowerCase(); 
  console.log("Searching for category:", lowerSlug);

  try {
    const response = await axios.get(`https://dummyjson.com/products/category/${lowerSlug}`);
    console.log("API Response:", response);
    return {
      result: response.data,
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      result: error.message,
    };
  }
};
