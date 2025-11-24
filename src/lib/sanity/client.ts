import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from "$env/static/public";
import { dev } from "$app/environment";

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID || "seu-project-id",
	dataset: PUBLIC_SANITY_DATASET || "production",
	apiVersion: "2024-01-01",
	useCdn: !dev, // Desabilita CDN em dev para ver mudanças instantâneas
	perspective: 'published', // Apenas conteúdo publicado
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

