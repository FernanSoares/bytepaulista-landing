import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Sanity Configuration - usando valores diretos para evitar erro de build
const SANITY_PROJECT_ID = "a6xg83wz";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2024-01-01";

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: SANITY_API_VERSION,
	useCdn: true, // CDN habilitado para performance
	perspective: 'published', // Apenas conteúdo publicado
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

