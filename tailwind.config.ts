import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: {
          blue: '#2F80ED',
          graphite: '#F2F2F2',
          slate: '#828282',
          silver: '#E0E0E0'
        },
        indicator: {
          ember: '#F8B76B',
          royal: '#8785FF',
          crimson: '#EB5757',
          dandelion: '#F2C94C'
        },
        chats: {
          peach: {
            light: '#FCEED3',
            dark: '#E5A443'
          },
          lavender: {
            light: '#EEDCFF',
            dark: '#9B51E0'
          },
          mint: {
            light: '#D2F2EA',
            dark: '#43B78D'
          }
        },
        stikers: {
          frost: '#E9F3FF',
          peach: '#FDCFA4',
          cream: '#F9E9C3',
          aqua: '#AFEBDB',
          sage: '#CBF1C2',
          periwinkle: '#CFCEF9',
          orchid: '#F9E0FD'
        }
      },
      boxShadow: {
        quickbutton: '0px 4px 4px 0px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
};
export default config;
