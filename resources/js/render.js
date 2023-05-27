import { marked } from 'marked'

export const render = (src) => {
    return marked.parse(
        src.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,''),
        { mangle: false }
    )
}
