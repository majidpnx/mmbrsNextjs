// 📁 app/products/page.js - Static Generation (SSG)
export const dynamic = 'force-static';

async function getProducts() {
  return [
    { id: 1, name: 'کفش ورزشی' },
    { id: 2, name: 'کتونی طبی' }
  ];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>📦 لیست محصولات</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}