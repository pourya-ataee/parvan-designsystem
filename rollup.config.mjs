import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";
import scss from "rollup-plugin-scss";
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
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            scss({
                output: true,
                failOnError: true,
                outputStyle: "compressed",
            }),
            svg({
                // process SVG to DOM Node or String. Default: false
                stringify: false
            }),
            copy({
                targets: [
                    { src: "src/assets", dest: "dist/cjs" },
                    { src: "src/style.css", dest: "dist/cjs" },
                    { src: "src/assets", dest: "dist/esm" },
                    { src: "src/style.css", dest: "dist/esm" },
                ],
            }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];