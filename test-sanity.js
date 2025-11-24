import { createClient } from "@sanity/client";

const client = createClient({
	projectId: "a6xg83wz",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false,
});

// Testar conexão
async function test() {
	console.log("🔍 Testando conexão com Sanity...\n");

	// Listar todos os posts (incluindo rascunhos)
	const allPosts = await client.fetch(`*[_type == "post"]`);
	console.log(`📝 Total de posts (incluindo rascunhos): ${allPosts.length}`);
	console.log("Posts:", JSON.stringify(allPosts, null, 2));

	// Listar posts publicados
	const publishedPosts = await client.fetch(`*[_type == "post" && published == true]`);
	console.log(`\n✅ Posts publicados: ${publishedPosts.length}`);
	console.log("Posts publicados:", JSON.stringify(publishedPosts, null, 2));

	// Listar autores
	const authors = await client.fetch(`*[_type == "author"]`);
	console.log(`\n👤 Total de autores: ${authors.length}`);

	// Listar categorias
	const categories = await client.fetch(`*[_type == "category"]`);
	console.log(`\n📂 Total de categorias: ${categories.length}`);
}

test().catch(console.error);

