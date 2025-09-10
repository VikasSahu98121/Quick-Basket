export const Apidata = async (skip) => {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
    const data = await response.json();
    console.log(data);
    return {
      status: "success",
      result: data,
    };
  } catch (error) {
    return {
      status: "fail",
      result: error.message,
    };
  }
};
