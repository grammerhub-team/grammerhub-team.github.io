export async function POST(req: Request) {
    
    const reqBody = await req.json();

    try {
      return new Response('Success!', {
        status: 200,
      })
    } catch (error) {
      console.error(error);
      return new Response('Error!', {
        status: 500,
      })
    }
}

