import { fixupConfigRules } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:react-hooks/recommended",
)), {
    settings: {
        react: {
            version: "detect",
        },

        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },

    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "react/react-in-jsx-scope": "off",
        "import/no-named-as-default": 0,

        "import/no-unresolved": ["error", {
            ignore: ["^@/"],
        }],

        "react/display-name": "off",
        "@typescript-eslint/ban-types": "off",
        "import/named": "off",
        "react-hooks/exhaustive-deps": "warn",
    },
}];