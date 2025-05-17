import { NextResponse } from 'next/server';
import { Together } from 'together-ai';

const together = new Together({
  apiKey: process.env.TOGETHER_API_KEY,
});

export async function POST(req) {
  const body = await req.json();

  try {
    const prompt = body.messages[0].content;
console.log(prompt);
    const response = await together.images.create({
      prompt,
      model: "black-forest-labs/FLUX.1-dev",
      steps: 4,
    });

    return NextResponse.json({
      result: response,
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}