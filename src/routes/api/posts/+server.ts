import { json } from "@sveltejs/kit";
import { client } from "$lib/sanity/client";
import { postsQuery } from "$lib/sanity/queries";
import type { SanityPostPreview } from "$lib/sanity/portableText";

async function getPosts() {
	try {
		const posts: SanityPostPreview[] = await client.fetch(postsQuery);
		
		// Mapeia para o formato esperado pelo site
		return posts.map((post) => ({
			_id: post._id,
			title: post.title,
			slug: post.slug,
			description: post.description,
			image: post.mainImage,
			date: post.publishedAt,
			categories: post.categories || [],
			published: true,
		}));
	} catch (error) {
		console.error("Erro ao buscar posts do Sanity:", error);
		return [];
	}
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}

export const prerender = true;
