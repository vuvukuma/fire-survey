// TODO: import locale files dynamically

export const getMessages = (locale: string): any => {
    switch (locale) {
        case 'ko':
            return require('./ko.json')
        default:
            return require('./en.json')
    }
}
