// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         white: "#fff",
        
//         gray: {
//           "100": "#262626",
//           "200": "#140e2d",
//           "300": "rgba(38, 38, 38, 0.24)",
//           "400": "rgba(38, 38, 38, 0.5)",
//           "500": "rgba(255, 255, 255, 0.24)",
//           "600": "rgba(255, 255, 255, 0)",
//         },
//         blueviolet: {
//           "100": "#464af8",
//           "200": "#3d4dff",
//           "300": "rgba(61, 77, 255, 0)",
//         },
//         black: "#000",
//         deepskyblue: {
//           "100": "#3dd0ff",
//           "200": "rgba(61, 208, 255, 0.16)",
//         },
//         greenyellow: {
//           "100": "#c7f903",
//           "200": "rgba(199, 249, 3, 0.16)",
//           "300": "rgba(199, 249, 3, 0)",
//         },
//         darkslategray: "#2d2d2d",
//         dimgray: {
//           "100": "#717171",
//           "200": "#616161",
//         },
//         darkgray: "#aeaeae",
//         gainsboro: "#d9d9d9",
//         silver: "#bfbfbf",
//         whitesmoke: "#eee",
//       },
//       spacing: {},
//       fontFamily: {
//         f1: 'DM Sans',
//         "dm-sans": "'DM Sans'",
//         inter: "Inter",
//         redacted: "Redacted",
//       },   fontWeight: {
//         w1: 400,
//         w2: 500,
//         w3: 600,
//         w4: 700,
//         w5: 800,
//         w6: 900,
//       },
//       borderRadius: {
//         "29xl": "48px",
//         "7xl-3": "26.3px",
//         "17xl": "36px",
//         "2xl": "21px",
//         "25xl-3": "44.3px",
//       },
//     },
//     fontSize: {
//       lg: "18px",
//       "5xl": "24px",
//       lgi: "19px",
//       "53xl": "72px",
//       "24xl": "43px",
//       "39xl": "58px",
//       "39xl-4": "58.4px",
//       "16xl": "35px",
//       "28xl": "47px",
//       "35xl": "54px",
//       "13xl": "32px",
//       "3xl-5": "22.5px",
//       mini: "15px",
//       "xl-2": "20.2px",
//       inherit: "inherit",
//     },
//     screens: {
//       mq1350: {
//         raw: "screen and (max-width: 1350px)",
//       },
//       mq1125: {
//         raw: "screen and (max-width: 1125px)",
//       },
//       mq800: {
//         raw: "screen and (max-width: 800px)",
//       },
//       mq450: {
//         raw: "screen and (max-width: 450px)",
//       },
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        f1: 'DM Sans'
      },
      fontWeight: {
        w1: 400,
        w2: 500,
        w3: 600,
        w4: 700,
        w5: 800,
        w6: 900,
      }
    },
  },
  plugins: [],
}



