import customThemes from './themes.json'

/** @type {import('tailwindcss').Config} */
const twconfig = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue'
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '128ch'
                    }
                }
            }
        }
    },
    daisyui: {
        themes: [
            {
                base: {
                    primary: '#381E72',
                    secondary: '#332D41',
                    accent: '#492532',
                    info: '#1976D2',
                    success: '#4CAF50',
                    warning: '#FF9800',
                    error: '#F2B8B5',
                    'base-100': '#1C1B1F',
                    '--btn-text-case': 'normal',
                    '--rounded-box': '1.9rem',
                    '--rounded-btn': '1.9rem'
                },
                admin: {
                    primary: '#4b6bfb',
                    secondary: '#7b92b2',
                    accent: '#67cba0',
                    neutral: '#181a2a',
                    'neutral-content': '#edf2f7',
                    'base-100': '#ffffff',
                    'base-content': '#181a2a'
                }
            }
        ]
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui')
    ]
}

for (const [k, v] of Object.entries(customThemes)) {
    Object.assign(twconfig['daisyui'].themes[0], { [k]: v })
}

export default twconfig
