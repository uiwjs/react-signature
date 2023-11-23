import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import pkg from '@uiw/react-monorepo-template/package.json';
import data from '@uiw/react-monorepo-template/README.md';

const Github = MarkdownPreviewExample.Github;

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
    <Github href="https://github.com/uiwjs/react-monorepo-template" />
  </MarkdownPreviewExample>,
);
