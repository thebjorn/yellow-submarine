import { redirect } from '@sveltejs/kit';
import { login } from '$lib/auth'

const loginAction = async (event) => {
    login(event);
    const fd = await event.request.formData();
    const location = (fd.get('redirect') || '').toString()
    throw redirect(303, location || '/');
}

export const actions = {
    default: loginAction
}