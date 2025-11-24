import { defineField, defineType } from "sanity";

export default defineType({
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Título",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "author",
			title: "Autor",
			type: "reference",
			to: { type: "author" },
		}),
		defineField({
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
		}),
		defineField({
			name: "categories",
			title: "Categorias",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
		}),
		defineField({
			name: "publishedAt",
			title: "Data de Publicação",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		}),
		defineField({
			name: "description",
			title: "Descrição",
			type: "text",
			rows: 3,
			validation: (Rule) => Rule.required().max(200),
		}),
		defineField({
			name: "body",
			title: "Conteúdo",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "H1", value: "h1" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "H4", value: "h4" },
						{ title: "Quote", value: "blockquote" },
					],
					lists: [
						{ title: "Bullet", value: "bullet" },
						{ title: "Numbered", value: "number" },
					],
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
							{ title: "Code", value: "code" },
						],
						annotations: [
							{
								name: "link",
								type: "object",
								title: "Link",
								fields: [
									{
										name: "href",
										type: "url",
										title: "URL",
									},
								],
							},
						],
					},
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
				{
					type: "code",
					options: {
						language: "typescript",
						languageAlternatives: [
							{ title: "JavaScript", value: "javascript" },
							{ title: "TypeScript", value: "typescript" },
							{ title: "HTML", value: "html" },
							{ title: "CSS", value: "css" },
							{ title: "Python", value: "python" },
							{ title: "Bash", value: "bash" },
							{ title: "JSON", value: "json" },
						],
						withFilename: true,
					},
				},
			],
		}),
		defineField({
			name: "published",
			title: "Publicado",
			type: "boolean",
			initialValue: false,
		}),
	],
	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
			published: "published",
		},
		prepare(selection) {
			const { title, author, media, published } = selection;
			return {
				title,
				subtitle: `${author || "Sem autor"} | ${published ? "✅ Publicado" : "📝 Rascunho"}`,
				media,
			};
		},
	},
});

