let cache = {};
let lastFetched = 0;

export async function GET(req, { params }) {
  const { id } = params;
  const now = Date.now();

  if (cache[id] && now - lastFetched < 600000) {
  
    return new Response(JSON.stringify(cache[id]), {
      headers: { 'Content-Type': 'application/json' },
    });
  }


  const res = await fetch(`https://membersgram.com/wp-json/wp/v2/posts/${id}?_embed`, {
    next: { revalidate: 60 } // ISR
  });
  const post = await res.json();

  cache[id] = post;
  lastFetched = now;

  return new Response(JSON.stringify(post), {
    headers: { 'Content-Type': 'application/json' },
  });
}
