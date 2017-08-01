import Ember from 'ember';
import layout from '../templates/components/each-of';

const MyComponent = Ember.Component.extend({
  layout,

  tagName: ''
});

MyComponent.reopenClass({
  positionalParams: ['_items']
});

export default MyComponent;
