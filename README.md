# nextjs-block-link

*An accessible block link component for Next.js.*

[![NPM](https://img.shields.io/npm/v/nextjs-block-link.svg)](https://www.npmjs.com/package/nextjs-block-link)

## About Next.js Block Link

Some designs call for a block (sometimes called "card") that is linked as a whole.
Technically is it possible to wrap the entire block in `<a href>`.
However, doing so is terrible for accessibility because [screenreaders will read the entire card](https://adrianroselli.com/2020/02/block-links-cards-clickable-regions-etc.html) when tabbing through the page.

This component makes it easy to create clickable blocks with accessibility in mind, using [`next/router`](https://nextjs.org/docs/api-reference/next/router) for client-side transitions.

For more about accessible cards, read [Inclusive Components: Cards](https://inclusive-components.design/cards/) and [Block Links Are a Pain (and Maybe Just a Bad Idea)](https://css-tricks.com/block-links-are-a-pain-and-maybe-just-a-bad-idea/).

## Install

```bash
yarn add nextjs-block-link
```
-or-
```bash
npm install nextjs-block-link
```

## Usage

### Basic example

```jsx
import Link from "next/link";
import { BlockLink } from 'nextjs-block-link'

const Card = () => {
  return (
    <BlockLink>
      <h2>
        <Link href="/some-article">
          <a>Card title</a>
        </Link>
      </h2>
      <p>Lorem ipsum, dolor sit amet, consectetur adipiscing elit. [...]</p>
    </BlockLink>
  )
}
```

### More advanced example

```jsx
const Cards = ({ cards }) => {
  return (
    <ul>
      {cards.map((card) => {
        return (
          <BlockLink key={card.id} tag="li" className="card">
            <h2>
              <Link href={card.href}>
                <a>{card.title}</a>
              </Link>
            </h2>
            <p>{card.text}</p>
          </BlockLink>
        );
      })}
    </ul>
  );
};
```

**Note:** The block will navigate to the href of the first descendant `<a href="...">` element.
Although the BlockLink component tries not to interfere with other clickable elements, the best UX is achieved if it contains one link only.

## Props

| prop       | default value        | description                                                                                                                                                         |
|------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tag        | `'div'`              | The HTML element used to wrap the block.                                                                                                                            |
| style      | `{cursor:'pointer'}` | Inline CSS to apply to the wrapper. [Not recommended](https://reactjs.org/docs/dom-elements.html#style) for elaborate styling, but useful to override the default.  |
| *children* |                      | Everything inside `<BlockLink>...</BlockLink>` will become part of the clickable block. See [props.children](https://reactjs.org/docs/glossary.html#propschildren). |
| *...*      |                      | All other props will be passed to the wrapper element.                                                                                                              |

## License

MIT © [marcvangend](https://github.com/marcvangend)
