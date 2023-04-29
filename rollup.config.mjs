import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss-modules";
import packageJson from "./package.json" assert {type: "json"};

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
            {
                file: packageJson.types,
                format: "es"
            }
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