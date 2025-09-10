import axios from "axios";
export const ApidataCategory= async (category) => {
console.log("88888888888",category)
  try {
    const Category = await axios.get(`https://dummyjson.com/products/category/${category.slug}
`);
    
    return {
      result: Category,
    };
  } catch (error) {
    return {
      result: error.message,
    };
  }
};
