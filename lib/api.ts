import axios from "axios";

export async function getPosts() {
  const res = await fetch("https://6p5gy6-4000.csb.app/posts");
  return res.json();
}

export async function getPostById(id: string) {
  const res = await fetch(`https://6p5gy6-4000.csb.app/posts/${id}`);
  return res.json();
}

export function getPostsByPaginate(page: number) {
  return axios
    .get("https://6p5gy6-4000.csb.app/posts", {
      params: { _page: page, _sort: "title", _limit: 2 },
    })
    .then((res) => {
      const hasNext = page * 2 <= parseInt(res.headers["x-total-count"]);
      return {
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page > 1 ? page - 1 : undefined,
        posts: res.data,
      };
    });
}
