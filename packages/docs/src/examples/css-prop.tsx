import React from 'react';
import { readFileSync } from 'fs';
import { cssProp } from '@compiled/website-examples';
import { Example } from './example';

export const CssPropExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/css-prop.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/css-prop.js',
        'utf-8'
      )}>
      <cssProp.EmphasisText color="#FF5630">Paradise Lost</cssProp.EmphasisText>
    </Example>
  );
};

export const CssPropTemplateLiteralExample = () => {
  return (
    <Example
      before={readFileSync(
        __dirname + '../../../../examples/dist/jsx/css-prop-string.js',
        'utf-8'
      )}
      after={readFileSync(
        __dirname + '../../../../examples/dist/js/css-prop-string.js',
        'utf-8'
      )}>
      <cssProp.EmphasisTextString color="#FF5630">
        Stopping by Woods on a Snowy Evening
      </cssProp.EmphasisTextString>
    </Example>
  );
};
