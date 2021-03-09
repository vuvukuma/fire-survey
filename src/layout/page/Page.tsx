import React, { FunctionComponent } from 'react'

type PageType = {
    className?: string
}

const Page: FunctionComponent<PageType> = (props) => {
    return (
        <section
            className={'flex flex-col h-full w-80 ' + (props.className || '')}
        >
            {props.children}
        </section>
    )
}

export default Page
