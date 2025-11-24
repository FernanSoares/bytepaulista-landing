import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./sanity/schemas";

export default defineConfig({
	name: "default",
	title: "BytePaulista Blog",

	projectId: "a6xg83wz",
	dataset: "production",

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemas,
	},

	// Configurações de tema
	theme: {
		// Cores personalizadas (opcional)
	},
});

