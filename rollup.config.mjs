import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
// import css from "rollup-plugin-import-css";
import svg from 'rollup-plugin-svg-import';
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
        ],
        plugins: [
            svg({
                // process SVG to DOM Node or String. Default: false
                stringify: false
            }),
            // css(),
            postcss({
                extract: true,
                modules: true,
            }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
        external: ["react", "react-dom"],
    },
];