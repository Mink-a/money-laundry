import axios from "axios";

const BASE_URL = "http://localhost:7070/api/v1/posts";

export async function getPosts() {
  const res = await fetch(`${BASE_URL}/`);
  return res.json();
}

export async function getPostById(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

export async function getPostsByPaginate(pageParam: number) {
  const res = await axios.get(`${BASE_URL}?page=${pageParam}&perPage=2`);
  // You may also want to include error handling here.

  const hasNext = res.data.length > 0; // Check if there are more items

  return {
    nextPage: hasNext ? pageParam + 1 : undefined,
    previousPage: pageParam > 1 ? pageParam - 1 : undefined,
    posts: res.data,
  };
}
