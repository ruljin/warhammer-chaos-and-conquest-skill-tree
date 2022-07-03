import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/warhammer-chaos-and-conquest-skill-tree/",
	plugins: [react()],
});
