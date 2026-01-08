import { visit } from 'unist-util-visit';

export function remarkAside() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        if (node.name !== 'aside') return;

        const data = node.data || (node.data = {});
        const tagName = 'aside';

        data.hName = tagName;
        data.hProperties = {
          ...(node.attributes || {}),
          class: 'article-aside',
        };
      }
    });
  };
}
