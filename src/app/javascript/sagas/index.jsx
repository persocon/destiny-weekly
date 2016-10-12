import { getCharacterList } from './user';

export default function* rootSaga() {
  yield [
    getCharacterList(),
  ];
}
