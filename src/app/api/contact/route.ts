export async function POST(req: Request) {
    
    const reqBody = await req.json()

    try {
      // //Send Data Code
      console.log(reqBody);

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