
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const NetflixTheme: CustomThemeConfig = {
    name: 'netflix-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
        "--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "4px",
        "--theme-rounded-container": "4px",
        "--theme-border-base": "0px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "255 255 255",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "0 0 0",
        "--on-surface": "255 255 255",
        // =~= Theme Colors  =~=
        // primary | #e50914 
        "--color-primary-50": "251 218 220", // #fbdadc
        "--color-primary-100": "250 206 208", // #faced0
        "--color-primary-200": "249 194 196", // #f9c2c4
        "--color-primary-300": "245 157 161", // #f59da1
        "--color-primary-400": "237 83 91", // #ed535b
        "--color-primary-500": "229 9 20", // #e50914
        "--color-primary-600": "206 8 18", // #ce0812
        "--color-primary-700": "172 7 15", // #ac070f
        "--color-primary-800": "137 5 12", // #89050c
        "--color-primary-900": "112 4 10", // #70040a
        // secondary | #890a74 
        "--color-secondary-50": "237 218 234", // #eddaea
        "--color-secondary-100": "231 206 227", // #e7cee3
        "--color-secondary-200": "226 194 220", // #e2c2dc
        "--color-secondary-300": "208 157 199", // #d09dc7
        "--color-secondary-400": "172 84 158", // #ac549e
        "--color-secondary-500": "137 10 116", // #890a74
        "--color-secondary-600": "123 9 104", // #7b0968
        "--color-secondary-700": "103 8 87", // #670857
        "--color-secondary-800": "82 6 70", // #520646
        "--color-secondary-900": "67 5 57", // #430539
        // tertiary | #ffa900 
        "--color-tertiary-50": "255 242 217", // #fff2d9
        "--color-tertiary-100": "255 238 204", // #ffeecc
        "--color-tertiary-200": "255 234 191", // #ffeabf
        "--color-tertiary-300": "255 221 153", // #ffdd99
        "--color-tertiary-400": "255 195 77", // #ffc34d
        "--color-tertiary-500": "255 169 0", // #ffa900
        "--color-tertiary-600": "230 152 0", // #e69800
        "--color-tertiary-700": "191 127 0", // #bf7f00
        "--color-tertiary-800": "153 101 0", // #996500
        "--color-tertiary-900": "125 83 0", // #7d5300
        // success | #afc53e 
        "--color-success-50": "243 246 226", // #f3f6e2
        "--color-success-100": "239 243 216", // #eff3d8
        "--color-success-200": "235 241 207", // #ebf1cf
        "--color-success-300": "223 232 178", // #dfe8b2
        "--color-success-400": "199 214 120", // #c7d678
        "--color-success-500": "175 197 62", // #afc53e
        "--color-success-600": "158 177 56", // #9eb138
        "--color-success-700": "131 148 47", // #83942f
        "--color-success-800": "105 118 37", // #697625
        "--color-success-900": "86 97 30", // #56611e
        // warning | #ffa900 
        "--color-warning-50": "255 242 217", // #fff2d9
        "--color-warning-100": "255 238 204", // #ffeecc
        "--color-warning-200": "255 234 191", // #ffeabf
        "--color-warning-300": "255 221 153", // #ffdd99
        "--color-warning-400": "255 195 77", // #ffc34d
        "--color-warning-500": "255 169 0", // #ffa900
        "--color-warning-600": "230 152 0", // #e69800
        "--color-warning-700": "191 127 0", // #bf7f00
        "--color-warning-800": "153 101 0", // #996500
        "--color-warning-900": "125 83 0", // #7d5300
        // error | #ff3d48 
        "--color-error-50": "255 226 228", // #ffe2e4
        "--color-error-100": "255 216 218", // #ffd8da
        "--color-error-200": "255 207 209", // #ffcfd1
        "--color-error-300": "255 177 182", // #ffb1b6
        "--color-error-400": "255 119 127", // #ff777f
        "--color-error-500": "255 61 72", // #ff3d48
        "--color-error-600": "230 55 65", // #e63741
        "--color-error-700": "191 46 54", // #bf2e36
        "--color-error-800": "153 37 43", // #99252b
        "--color-error-900": "125 30 35", // #7d1e23
		// surface | #000000 
		"--color-surface-50": "217 217 217", // #d9d9d9
		"--color-surface-100": "204 204 204", // #cccccc
		"--color-surface-200": "191 191 191", // #bfbfbf
		"--color-surface-300": "153 153 153", // #999999
		"--color-surface-400": "77 77 77", // #4d4d4d
		"--color-surface-500": "0 0 0", // #000000
		"--color-surface-600": "0 0 0", // #000000
		"--color-surface-700": "0 0 0", // #000000
		"--color-surface-800": "0 0 0", // #000000
		"--color-surface-900": "0 0 0", // #000000
    }
}