

export async function POST({request, event}) {
    console.log('/logout/+server.js:POST:event:', event.request.method)
    const form = await request.formData();
    const next = form.get('next') ?? '/';

    console.log('LOGOUT:next:', next);
    return {
        status: 303,
        headers: {
            location: next
        }
    };
}