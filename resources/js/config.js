import appConfig from './appConfig.json'

export const config = {
    name: appConfig.name ?? 'ZForum',
    description: 'ZForum is a forum software created with Laravel and Vue, made to be used or run by anyone.',
    url: appConfig.url ?? '',
    'meta-image': appConfig['meta-image'] ?? ''
}
