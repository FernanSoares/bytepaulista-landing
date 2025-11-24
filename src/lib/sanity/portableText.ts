// Componente helper para renderizar Portable Text do Sanity
import type { PortableTextBlock } from "@portabletext/types";

export interface SanityPost {
	_id: string;
	title: string;
	slug: string;
	description: string;
	mainImage?: string;
	publishedAt: string;
	categories: string[];
	body: PortableTextBlock[];
	author?: {
		name: string;
		image?: string;
		bio?: string;
	};
}

export interface SanityPostPreview {
	_id: string;
	title: string;
	slug: string;
	description: string;
	mainImage?: string;
	publishedAt: string;
	categories: string[];
	author?: {
		name: string;
		image?: string;
	};
}

