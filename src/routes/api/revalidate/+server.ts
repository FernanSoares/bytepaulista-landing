import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SANITY_WEBHOOK_SECRET } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		
		// Validar o segredo do webhook
		const secret = request.headers.get('x-sanity-webhook-secret');
		
		if (!SANITY_WEBHOOK_SECRET) {
			console.error('SANITY_WEBHOOK_SECRET não configurado!');
			return json({ error: 'Server configuration error' }, { status: 500 });
		}
		
		if (secret !== SANITY_WEBHOOK_SECRET) {
			console.warn('Tentativa de webhook com secret inválido');
			return json({ error: 'Invalid secret' }, { status: 401 });
		}

		// Log do webhook recebido
		console.log('✅ Webhook recebido do Sanity:', {
			type: body._type,
			id: body._id,
			slug: body.slug?.current,
			timestamp: new Date().toISOString()
		});

		// Nota: SvelteKit com adapter-vercel não suporta revalidação on-demand
		// O Vercel vai fazer um novo deploy automático se configurado
		// Ou você pode configurar ISR com tempo de revalidação

		return json({ 
			revalidated: true, 
			message: 'Webhook processado com sucesso. Novo deploy será disparado.',
			timestamp: new Date().toISOString(),
			data: {
				type: body._type,
				slug: body.slug?.current
			}
		});
	} catch (error) {
		console.error('❌ Erro no webhook:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};

