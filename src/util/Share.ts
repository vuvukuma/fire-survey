type shareType = {
    url?: string
    title?: string
    text?: string
}

export const share = (options?: shareType, fallback?: () => void) => {
    const title = options?.title || document.title
    const url =
        options?.url || document.querySelector('link[rel=canonical]')
            ? (document.querySelector('link[rel=canonical]') as HTMLLinkElement)
                  .href
            : document.location.href

    const shareParam = { title, url, text: options?.text }

    if (navigator.share) {
        navigator
            .share(shareParam)
            .then(() => {
                console.log('shared!')
            })
            .catch(console.error)
    } else if (fallback) {
        //fallback
        fallback()
    }
}

export const copyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text)
}
