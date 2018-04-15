ember-each-of
==============================================================================

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/ember-each-of.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ember-each-of.svg)](https://badge.fury.io/js/ember-each-of)
[![Build Status](https://travis-ci.org/kellyselden/ember-each-of.svg?branch=master)](https://travis-ci.org/kellyselden/ember-each-of)
![Ember Version](https://embadge.io/v1/badge.svg?start=2.12.0)

This addon will give you Array destructuring-like support in {{#each}} blocks.

Installation
------------------------------------------------------------------------------

```
ember install ember-each-of
```


Overview
------------------------------------------------------------------------------

Sometimes you want to bundle an object with other properties to keep them together when passing an array:

```js
// foo-component.js
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  myItems: computed('items.[]', function() {
    return this.get('items').map((item, i) => {
      return {
        item,
        isSelected: i === 0
      };
    });
  })
});
```

```hbs
{{!-- foo-component.hbs --}}
{{#each myItems as |item|}}
  {{bar-component
    item=item.item
    isSelected=item.isSelected
  }}
{{/each}}
```

With this addon, you can eliminate the {{item.item}} unsightliness by going a different route using Array destructuring and {{#each-of}}:

```js
// foo-component.js
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  myItems: computed('items.[]', function() {
    return this.get('items').map((item, i) => {
      return [
        item,
        i === 0
      ];
    });
  })
});
```

```hbs
{{!-- foo-component.hbs --}}
{{#each-of myItems as |item isSelected|}}
  {{bar-component
    item=item
    isSelected=isSelected
  }}
{{/each-of}}
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-each-of`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
