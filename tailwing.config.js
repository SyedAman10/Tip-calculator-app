module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        keyframes: {
          movein: {
            "0%": {
              transform: "translateY(5rem)",
              opacity: "0",
            },
            "100%": {
              transform: "translateY(0)",
              opacity: "1",
            },
          },
        },
        animation: { movein: "movein 1s" },
      },
    },
    plugins: [],
  };