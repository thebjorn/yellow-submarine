import { redirect } from '@sveltejs/kit';
import { login } from '$lib/auth'
import type {  Actions, RequestEvent } from './$types'
const loginAction = async (event: RequestEvent) => {
  login(event);
  const fd = await event.request.formData();
  const location = (fd.get('redirect') || '').toString()
  throw redirect(303, location || '/');
}

export const actions: Actions = {
  default: loginAction
}