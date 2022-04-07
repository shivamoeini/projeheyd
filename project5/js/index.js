const renderPosts = async () => {
  let uri = "http://localhost:300/posts";

  const res = await fetch(uri);
  const posts = await res.json();
  let template = "";
  posts.forEach((post) => {
    template += `
      <div class="post">
      <h2>${post.title}</h2>
      <p><small>${post.likes}likes</small></p>
      <p>${post.body.slice(0, 200)}</p>
      <a href="/details.html">read more...</a>
      </div>`;
  });
};
window.addEventListener("DOMContentLoaded", (e) => renderPosts());
