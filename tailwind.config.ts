import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors (from Tritech logo & identity)
        tritech: {
          // Deep ocean blue - main brand color
          blue: {
            DEFAULT: '#0061A6',
            50: '#E6F0F9',
            100: '#CCE1F3',
            200: '#99C3E7',
            300: '#66A5DB',
            400: '#3387CF',
            500: '#0061A6',
            600: '#004E85',
            700: '#003A64',
            800: '#002743',
            900: '#001322',
          },
          // Corporate green - environment/sustainability
          green: {
            DEFAULT: '#00AE4D',
            50: '#E6F9EE',
            100: '#CCF3DD',
            200: '#99E7BB',
            300: '#66DB99',
            400: '#33CF77',
            500: '#00AE4D',
            600: '#008B3E',
            700: '#00682E',
            800: '#00451F',
            900: '#00230F',
          },
          // Corporate teal - modern accent
          teal: {
            DEFAULT: '#43AFC0',
            50: '#EBF7F9',
            100: '#D7EFF3',
            200: '#AFDFE7',
            300: '#87CFDB',
            400: '#5FBFCF',
            500: '#43AFC0',
            600: '#358C9A',
            700: '#286973',
            800: '#1B464D',
            900: '#0D2326',
          },
          // Earth brown - engineering/foundation
          brown: {
            DEFAULT: '#763D03',
            50: '#FBF2E6',
            100: '#F7E5CC',
            200: '#EFCB99',
            300: '#E7B166',
            400: '#DF9733',
            500: '#763D03',
            600: '#5E3102',
            700: '#472502',
            800: '#2F1801',
            900: '#180C01',
          },
          // Navy blue - depth/water tech
          navy: {
            DEFAULT: '#25418F',
            50: '#E9ECF5',
            100: '#D3D9EB',
            200: '#A7B3D7',
            300: '#7B8DC3',
            400: '#4F67AF',
            500: '#25418F',
            600: '#1E3472',
            700: '#162756',
            800: '#0F1A39',
            900: '#070D1D',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0061A6 0%, #25418F 50%, #00AE4D 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
