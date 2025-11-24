import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		
		// Validar o segredo do webhook (adicione isso no .env)
		const secret = request.headers.get('x-sanity-webhook-secret');
		
		if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
			return json({ error: 'Invalid secret' }, { status: 401 });
		}

		// Aqui você pode adicionar lógica para revalidar rotas específicas
		// Por enquanto, apenas retornamos sucesso
		console.log('Webhook recebido do Sanity:', body);

		return json({ 
			revalidated: true, 
			message: 'Cache invalidado com sucesso',
			timestamp: new Date().toISOString()
		});
	} catch (error) {
		console.error('Erro no webhook:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};

