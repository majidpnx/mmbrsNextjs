import { NextResponse } from 'next/server';
import { Together } from 'together-ai';
import dotenv from 'dotenv';

dotenv.config(); // در لوکال فقط کار می‌کنه

const together = new Together({
  apiKey: process.env.TOGETHER_API_KEY,
});

export async function POST(req) {
  const body = await req.json();

  try {
//     const response = await together.chat.completions.create({
//       model: "meta-llama/Llama-3-8b-chat-hf",
//       messages: body.messages,
//     });
// console.log(response)
console.log(toString(body.messages))
  const response = await together.images.create({
    prompt: toString(body.messages),
    model: "black-forest-labs/FLUX.1-schnell",
    steps: 4,
  });

  console.log(response);
    return NextResponse.json({
      // result: response.choices[0].message.content,
      result: response,
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
