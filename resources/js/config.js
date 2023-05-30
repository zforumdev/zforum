import config from './config.json'

export const config = {
    name: config.name ?? 'ZForum',
    description: 'ZForum is a forum software created with Laravel and Vue, made to be used or run by anyone.',
    url: config.url ?? '',
    'meta-image': config['meta-image'] ?? ''
}
