let cache = {};
let lastFetched = 0;

export async function GET(req, { params }) {

  const now = Date.now();

  if (cache && now - lastFetched < 600000) {

    return new Response(JSON.stringify(cache), {
      headers: { 'Content-Type': 'application/json' },
    });
  }


  const res = await fetch(`https://membersgram.com/wp-json/wp/v2/posts?per_page=100&page=1&_embed&categories=224`, {
    next: { revalidate: 60 } // ISR
  });
  const post = await res.json();

  cache = post;
  lastFetched = now;

  return new Response(JSON.stringify(post), {
    headers: { 'Content-Type': 'application/json' },
  });
}
