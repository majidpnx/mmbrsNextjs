// import { NextResponse } from 'next/server';
// import { Together } from 'together-ai';
 
// const together = new Together({
//   apiKey: '362a84eb9b3e3d7231ab7933e1c85c388080518871975652630eb0bc405b8033',
// });

// export async function POST(req) {
//   const body = await req.json();

//  try {
//     if (body.type === 'image') {
//       const response = await together.images.create({
//         prompt: body.prompt,
//         model: 'black-forest-labs/FLUX.1-dev',
//         steps: 4,
//       });
//       return NextResponse.json({ result: response });
//     } else {
//       const response = await together.chat.completions.create({
//         model: 'meta-llama/Llama-3-8b-chat-hf',
//         messages: body.messages,
//       });
//       return NextResponse.json({ result: response });
//     }
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }