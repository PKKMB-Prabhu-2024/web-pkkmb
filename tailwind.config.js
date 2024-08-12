/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      width: {
        half: "60vw"
      },
      height: {
        half: "60vh"
      },
      colors: {
        biru: "#2B3769",
        merah: "#B52E32",
        kuning: "#ECA51D",
        hijau: "#1A982E",
        merahtua: "#972525",
        kuningtua: "#C98C17",
        birumuda: "#212A54",
        hijaumuda: "#168328",
      },
      fontFamily: {
        PlayfairDisplay: ["Playfair Display", "serif"],
      },
      screens: {
        'tablet': '768px',
        'mobile': '320px',
        'laptop': '1024px',
        'desktop': '1440px',
      },
      fontSize: {
        '13px': '13px',
      }
    },
  },
  plugins: [],
}

