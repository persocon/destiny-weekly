import reducer from '../../src/app/javascript/reducers/activity.jsx'

describe('(Reducer) Activity', () => {
  it('should return the initial state', () => {
    const initialState = {
      identifier: 'nightfall',
      title: 'loading',
      name: '',
      desc: '',
      completed: '',
      backgroundImg: '',
      icon: '',
      modifiers: [],
      bosses: [],
      items: [],
      rewards: [],
      bounties: [],
      objectives: [],
      progress: []
    }
    expect(reducer(undefined, {})).to.eql(
      initialState
    );
  });

  it('should start loading', () => {
    const initialState = {
      identifier: 'nightfall',
      title: 'loading',
      name: '',
      desc: '',
      completed: '',
      backgroundImg: '',
      icon: '',
      modifiers: [],
      bosses: [],
      items: [],
      rewards: [],
      bounties: [],
      objectives: [],
      progress: []
    }
    expect(reducer(initialState, {
      type: 'START_LOADING'
    })).to.eql(
      initialState
    );
  });

  it('should set activity', () => {
    const expectedState = {
        identifier: 'nightfall',
        title: "Assalto do Anoitecer",
        name: "Palácio das Areias",
        desc: "Uma nova força Cabal soltou poderosos Esfoladores Psiônicos para tomar o controle de uma velha Mente Bélica Marciana. Enfrente esta nova ameaça e proteja o que restou desta rede antiga.",
        backgroundImg: "http://bungie.net/img/theme/destiny/bgs/pgcrs/strike_dust_palace.jpg",
        icon: "http://bungie.net/img/theme/destiny/icons/node_strike_nightfall.png",
        modifiers: [
          {
            title: "Modificadores",
            skulls: [{
              description: "Aumenta muito o dano Solar de qualquer fonte.",
              displayName: "Queimadura Solar",
              icon: "/common/destiny_content/icons/1269d2e53430de8034b70b0fa785ab2b.png",
            }]
          }
        ],
        bosses: [],
        items: [],
        rewards: [],
        bounties: []
    }
    expect(
      reducer([], {
        type: 'SET_ACTIVITY',
        activity: expectedState
      })
    ).to.eql(expectedState)
  });
});
