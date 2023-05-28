/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue'
    ],
    theme: {
        extend: {}
    },
    daisyui: {
        themes: [
            {
                // really ugly, might redo later
                // light: {
                //     primary: '#6750A4',
                //     secondary: '#625B71',
                //     accent: '#7D5260',
                //     error: '#B3261E',
                //     'base-100': '#FFFBFE',
                //     'base-200': '#E7E0EC',
                //
                //     '--btn-text-case': 'normal',
                //     '--rounded-box': '1.9rem',
                //     '--rounded-btn': '1.9rem'
                // },
                dark: {
                    primary: '#381E72',
                    secondary: '#332D41',
                    accent: '#492532',
                    error: '#F2B8B5',
                    'base-100': '#1C1B1F',

                    '--btn-text-case': 'normal',
                    '--rounded-box': '1.9rem',
                    '--rounded-btn': '1.9rem'
                }
            }
        ]
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui')
    ]
}
