// app/api/user/route.js

export async function GET() {
    const user = {
      id: 1,
      name: 'Majid',
      email: 'majid@example.com',
    };
  
    return new Response(JSON.stringify(user), {
      headers: { 'Content-Type': 'application/json' },
    });
  }