import { marked } from 'marked'

export const render = (src, inline) => {
    if (inline) {
        return marked.parseInline(
            src.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,''),
            { mangle: false }
        )
    } else {
        return marked.parse(
            src.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,''),
            { mangle: false }
        )
    }
}
