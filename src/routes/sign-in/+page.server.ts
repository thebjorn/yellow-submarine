import { redirect } from '@sveltejs/kit';
import { login } from '$lib/auth'
import type { Action } from './$types'
export const POST: Action = (event) => {
  login(event);
  throw redirect(303, '/launch-codes')
}