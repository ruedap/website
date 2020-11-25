/** @jsx jsx */
import { jsx } from '@emotion/core';

const EmphasisText = (props) => (
  <span
    className={props.className}
    // <-- bug (no style prop!)
    css={{
      color: '#00b8d9',
      textTransform: 'uppercase',
      fontWeight: 700,
    }}>
    {props.children}
  </span>
);

export const CustomColorText = (props) => (
  <EmphasisText css={{ color: props.color }}>{props.children}</EmphasisText>
);
