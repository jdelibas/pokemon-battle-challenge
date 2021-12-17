import test from 'ava';

import { pokemonBattle } from './pokemon-battle'

test('true is true', t => {
    const expected = true;

    const result = pokemonBattle();

	t.is(result, expected);
});
