import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('each-of', 'Integration | Component | each of', {
  integration: true
});

test('it is tagless', function(assert) {
  this.render(hbs`
    {{each-of}}
  `);

  assert.equal(this.$().html().trim(), '<!---->');
});

test('it iterates and destructures', function(assert) {
  this.set('items', [[1, 2], [3, 4]]);

  this.render(hbs`
    {{#each-of items as |first second|}}
      {{first}} {{second}}
    {{/each-of}}
  `);

  assert.equal(this.$().text().trim().replace(/\n/g, '').replace(/ {2,}/g, ' '), '1 2 3 4');
});

test('it handles up to ten items', function(assert) {
  this.set('items', [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]);

  this.render(hbs`
    {{#each-of items as |one two three four five six seven eight nine ten|}}
      {{one}} {{two}} {{three}} {{four}} {{five}} {{six}} {{seven}} {{eight}} {{nine}} {{ten}}
    {{/each-of}}
  `);

  assert.equal(this.$().text().trim(), '1 2 3 4 5 6 7 8 9 10');
});
