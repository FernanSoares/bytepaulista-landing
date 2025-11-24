import { defineField, defineType } from "sanity";

export default defineType({
	name: "author",
	title: "Autor",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Nome",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		}),
		defineField({
			name: "image",
			title: "Imagem",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "bio",
			title: "Biografia",
			type: "text",
			rows: 3,
		}),
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
});

