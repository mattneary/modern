import test from 'ava'

import {identity} from '..'

const preserves = (t, a) => {
  t.is(a, identity(a))
}
preserves.title = expr => `preserves ${expr}`

test('parse', preserves, '123')
