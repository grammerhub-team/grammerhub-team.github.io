export async function POST(req: Request) {
    
    const reqBody = await req.json()

    const { firstName, lastName, email, phoneNumber, message } = reqBody;

    try {
      return new Response(JSON.stringify({message: 'Success!'}), {
        status: 200,
      })
    } catch (error) {
      console.error(error);
      return new Response('Error!', {
        status: 500,
      })
    }
}

