import { getCharacterList } from './user';
import { getOptions } from './select';
import { getActivity } from './activity';

export default function* rootSaga() {
  yield [
    getCharacterList(),
    getOptions(),
    getActivity(),
  ];
}
