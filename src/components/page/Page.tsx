import React, { FunctionComponent } from 'react';

type PageType = {
  className?: string
}

const Page: FunctionComponent<PageType> = (props) => {
  return (
    <section className={"flex flex-col h-full w-full " + (props.className || "") }>
      {props.children}
    </section>
  );
}

export default Page;