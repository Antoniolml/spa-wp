export function PostCard(props){
  let{date,slug,title,_embedded} = props;
  let dateFormat = new Date(date).toLocaleString(),
    urlPoster= _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0].source_url : '/spa/app/assets/mario.png';

  return `
  <article class="post-card">
    <img src="${urlPoster}" alt="${title.rendered}">
    <h2>${title.rendered}</h2>
    <p>
      <time detetime="${date}">${dateFormat}</time>
      <a href="#/${slug}">Ver publicacion</a>
    </p>
  </article>
  `;
}