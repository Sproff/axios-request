import instance from "./axios.config";

export const getData = async (body) => {
  const { data } = await instance.get("/posts/1", body);

  return data;
};

export const postData = async (body) => {
  const { data } = await instance.post("/posts", body);

  return data;
};

export const updateData = async (body) => {
  const { data } = await instance.patch("/posts/1", body);

  return data;
};

export const deleteData = async (body) => {
  const { data } = await instance.delete("/posts/1", body);

  return data;
};
