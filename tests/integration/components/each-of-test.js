import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | each of', function(hooks) {
  setupRenderingTest(hooks);

  test('it is tagless', async function(assert) {
    await render(hbs`
      {{each-of}}
    `);

    assert.equal(find('*').innerHTML.trim(), '<!---->');
  });

  test('it iterates and destructures', async function(assert) {
    this.set('items', [[1, 2], [3, 4]]);

    await render(hbs`
      {{#each-of items as |first second|}}
        {{first}} {{second}}
      {{/each-of}}
    `);

    assert.equal(find('*').textContent.trim().replace(/\n/g, '').replace(/ {2,}/g, ' '), '1 2 3 4');
  });

  test('it handles up to ten items', async function(assert) {
    this.set('items', [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]);

    await render(hbs`
      {{#each-of items as |one two three four five six seven eight nine ten|}}
        {{one}} {{two}} {{three}} {{four}} {{five}} {{six}} {{seven}} {{eight}} {{nine}} {{ten}}
      {{/each-of}}
    `);

    assert.dom('*').hasText('1 2 3 4 5 6 7 8 9 10');
  });
});
