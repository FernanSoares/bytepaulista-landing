import { defineType } from "sanity";

// Author Schema
const author = defineType({
	name: "author",
	title: "Autor",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Nome",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
		{
			name: "image",
			title: "Imagem",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "bio",
			title: "Biografia",
			type: "text",
			rows: 3,
		},
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
});

// Category Schema
const category = defineType({
	name: "category",
	title: "Categoria",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Título",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "description",
			title: "Descrição",
			type: "text",
			rows: 3,
		},
	],
});

// Post Schema
const post = defineType({
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Título",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "author",
			title: "Autor",
			type: "reference",
			to: [{ type: "author" }],
		},
		{
			name: "mainImage",
			title: "Imagem Principal",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Texto Alternativo",
				},
			],
		},
		{
			name: "categories",
			title: "Categorias",
			type: "array",
			of: [{ type: "reference", to: [{ type: "category" }] }],
		},
		{
			name: "publishedAt",
			title: "Data de Publicação",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		},
		{
			name: "description",
			title: "Descrição",
			type: "text",
			rows: 3,
			validation: (Rule) => Rule.required().max(200),
		},
		{
			name: "body",
			title: "Conteúdo",
			type: "array",
			of: [
				{
					type: "block",
				},
				{
					type: "image",
					options: { hotspot: true },
					fields: [
						{
							name: "alt",
							type: "string",
							title: "Texto Alternativo",
						},
					],
				},
			],
		},
		{
			name: "published",
			title: "Publicado",
			type: "boolean",
			initialValue: false,
		},
	],
	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
			published: "published",
		},
		prepare(selection: any) {
			const { title, author, media, published } = selection;
			return {
				title,
				subtitle: `${author || "Sem autor"} | ${published ? "✅ Publicado" : "📝 Rascunho"}`,
				media,
			};
		},
	},
});

export const schemas = [post, category, author];
