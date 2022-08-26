import { redirect } from '@sveltejs/kit';
import { login } from '$lib/auth'
import type { Action } from './$types'
export const POST: Action = async (event) => {
  login(event);
  const fd = await event.request.formData();
  const location = (fd.get('redirect') || '').toString()
  throw redirect(303, location || '/');
}