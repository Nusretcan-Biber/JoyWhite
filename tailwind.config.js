/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        snow: "#FAFDFF",
        logoBlue: "#145a9f",
        AliceBlue: "#F0F8FF",
        MintCream: "#F5FFFA	",
        BabyBlue: "#7ec8e3",
        PrimaryColor: "#19004a",
        SecondaryColor: "#daf5ff",
        NavyBlue: "#000c66",
        AcikMavi: "#ADD8E6",
        Mavi: "#4848fa",
        KoyuMavi: "#005B96",
        Turuncu: "#FFA500",
        KırıkBeyaz: "#F5F5f5",
        Gri: "#333",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
