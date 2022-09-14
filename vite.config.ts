// @ts-ignore
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { AntdResolve, createStyleImportPlugin } from "vite-plugin-style-import";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const plugins: any[] = [react()];
    const alias = {
        "@": path.resolve(__dirname, "./src"),
    };
    if (mode === "production") {
        plugins.push(
            createStyleImportPlugin({
                resolves: [AntdResolve()],
            })
        );
        plugins.push(visualizer());

        alias["antd/dist/antd.less"] = path.resolve(__dirname, "./src/styles/antd.less");
    }

    return {
        plugins: plugins,
        resolve: { alias },
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        "primary-color": "#0029FF",
                    },
                    javascriptEnabled: true,
                },
            },
        },
    };
});
