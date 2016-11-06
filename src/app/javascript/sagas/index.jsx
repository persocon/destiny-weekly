import { getCharacterList } from './user';
import { getOptions } from './select';

export default function* rootSaga() {
  yield [
    getCharacterList(),
    getOptions(),
  ];
}
