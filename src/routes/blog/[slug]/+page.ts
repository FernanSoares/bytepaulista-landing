import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { client } from "$lib/sanity/client";
import { postQuery } from "$lib/sanity/queries";

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await client.fetch(postQuery, { slug: params.slug });

		if (!post) {
			throw error(404, `Post não encontrado: ${params.slug}`);
		}

		return {
			post,
		};
	} catch (e) {
		console.error("Erro ao buscar post:", e);
		throw error(404, `Post não encontrado: ${params.slug}`);
	}
};
