import Component from '@ember/component';
import layout from '../templates/components/each-of';

const MyComponent = Component.extend({
  layout,

  tagName: ''
});

MyComponent.reopenClass({
  positionalParams: ['_items']
});

export default MyComponent;
