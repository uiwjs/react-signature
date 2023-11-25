import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import pkg from '@uiw/react-signature/package.json';
import data from '@uiw/react-signature/README.md';
import { ExampleSignature } from './Example';

const Github = MarkdownPreviewExample.Github;
const Example = MarkdownPreviewExample.Example;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    title={pkg.name}
    description={pkg.description}
    version={`v${VERSION}`}
  >
    <Github href="https://github.com/uiwjs/react-signature" />
    <Example>
      <ExampleSignature />
    </Example>
  </MarkdownPreviewExample>,
);
