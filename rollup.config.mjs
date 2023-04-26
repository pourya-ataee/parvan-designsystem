import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" assert {type: "json"};
import postcss from "rollup-plugin-postcss-modules";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            postcss({
                modules: true,
                namedExports: true,
                extract: true,
                minimize: true,
                sourceMap: true,
                extensions: [".css"],
                extract: "styles.css",
            }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
        external: ["react", "react-dom"],
    },
];