import singleSpaHtml from 'single-spa-html';

const template = `
<div
  class="content"
>
</div>
`;

const jsComponent = singleSpaHtml({
  template,
});

jsComponent.originalMount = jsComponent.mount;
jsComponent.mount = function(opts, props) {
  return jsComponent.originalMount(opts, props)
    .then(() => {
      const el = document.querySelector('.content');
      const html = `<div>Hello World!!!! This is a working MFE!!</div>`
      el.innerHTML = html;
    });
};

export const bootstrap = jsComponent.bootstrap;
export const mount = jsComponent.mount;
export const unmount = jsComponent.unmount;
