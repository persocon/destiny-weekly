import reducer from '../../src/app/javascript/reducers/user.jsx';

describe('(Reducer) User', () => {
  it('should return the initial state', () => {
    const expectedState = {
      character_list: [],
      user_info: {
        platform: '',
        username: '',
        character_id: ''
      }
    }
    expect(reducer(undefined, {})).to.eql(expectedState);
  });

  it('should set user info', () => {
    const expectedState = {
      platform: '1',
      username: 'tkrp1986'
    };
    expect(
      reducer({
        user_info: expectedState
      }, {
        type: 'SET_USER',
        user_info: expectedState
      })
    ).to.eql({user_info: expectedState});

  });

  it('should set user character_id', () => {
    const expectedState = {
      character_id: 123456
    };
    expect(
      reducer({
        user_info: expectedState
      }, {
        type: 'SET_USER_CHARACTER',
        user_info: expectedState
      })
    ).to.eql({user_info: expectedState});

  });

  it('should return user character_id', () => {
    const character_id = 123456;
    const expectedState = { user_info:
      {
        character_id
      }
    }
    expect(
      reducer(expectedState, {
        type: 'GET_USER_CHARACTER',
        user_info: {
          character_id: expectedState
        }
      })
    ).to.eql(character_id);

  });


  it('should set character list', () => {
      const expectedState =
      [
        {
          "character_id": "2305843009271058982",
          "power_level": 333,
          "raceHash": 2803282938,
          "genderHash": 3111576190,
          "classHash": 2271682572,
          "emblemPath": "\/common\/destiny_content\/icons\/b3951787af65e8b6b9dbaf3cf4c639fa.jpg",
          "backgroundPath": "\/common\/destiny_content\/icons\/435895294497f02203e0938374af2529.jpg",
          "characterLevel":40, "classDetails": {
            "classHash": 2271682572,
            "classType": 2,
            "className": "Arcano",
            "classNameMale": "Arcano",
            "classNameFemale": "Arcana",
            "classIdentifier": "CLASS_WARLOCK",
            "mentorVendorIdentifier": "VENDOR_WARLOCK_MENTOR",
            "hash": 2271682572,
            "index": 0
          },
          "genderDetails": {
            "genderHash": 3111576190,
            "genderType": 0,
            "genderName": "Masculino",
            "genderDescription": "",
            "hash": 3111576190,
            "index": 0
          },
          "raceDetails": {
            "raceHash": 2803282938,
            "raceType": 1,
            "raceName": "Desperto",
            "raceNameMale": "Desperto",
            "raceNameFemale": "Desperta",
            "raceDescription": "Os Despertos sobreviveram ao Colapso no espa\u00e7o extra-solar, mas isso os mudou para sempre.",
            "hash": 2803282938,
            "index": 0
          }
        },
        {
          "character_id": "2305843009345804418",
          "power_level": 335,
          "raceHash": 3887404748,
          "genderHash": 3111576190,
          "classHash": 671679327,
          "emblemPath": "\/common\/destiny_content\/icons\/3ef332c69a8366b8bf1aa886bb774c98.jpg",
          "backgroundPath": "\/common\/destiny_content\/icons\/5464e444cd3892fa509849b33179a38b.jpg",
          "characterLevel": 40,
          "classDetails": {
            "classHash": 671679327,
            "classType": 1,
            "className": "Ca\u00e7ador",
            "classNameMale": "Ca\u00e7ador",
            "classNameFemale": "Ca\u00e7adora",
            "classIdentifier": "CLASS_HUNTER",
            "mentorVendorIdentifier": "VENDOR_HUNTER_MENTOR",
            "hash": 671679327,
            "index": 0
          },
          "genderDetails": {
            "genderHash": 3111576190,
            "genderType": 0,
            "genderName": "Masculino",
            "genderDescription": "",
            "hash": 3111576190,
            "index": 0
          },
          "raceDetails": {
            "raceHash": 3887404748,
            "raceType": 0,
            "raceName": "Humano",
            "raceNameMale": "Humano",
            "raceNameFemale": "Humana",
            "raceDescription": "Humano",
            "hash": 3887404748,
            "index": 0
          }
        },
        {
          "character_id": "2305843009359370836",
          "power_level": 330,
          "raceHash": 898834093,
          "genderHash": 3111576190,
          "classHash": 3655393761,
          "emblemPath": "\/common\/destiny_content\/icons\/6f75c4ecfa99020a0a0390f64ca71448.jpg",
          "backgroundPath": "\/common\/destiny_content\/icons\/f9893f7d22d4f339eaa474ab16e588d0.jpg",
          "characterLevel": 40,
          "classDetails": {
            "classHash": 3655393761,
            "classType": 0,
            "className": "Tit\u00e3",
            "classNameMale": "Tit\u00e3",
            "classNameFemale": "Tit\u00e3",
            "classIdentifier": "CLASS_TITAN",
            "mentorVendorIdentifier": "VENDOR_TITAN_MENTOR",
            "hash": 3655393761, "index":0
          },
          "genderDetails": {
            "genderHash": 3111576190,
            "genderType": 0,
            "genderName": "Masculino",
            "genderDescription": "",
            "hash": 3111576190,
            "index": 0
          },
          "raceDetails": {
            "raceHash": 898834093,
            "raceType": 2,
            "raceName": "Exo",
            "raceNameMale": "Exo macho",
            "raceNameFemale": "Exo f\u00eamea",
            "raceDescription": "M\u00e1quinas conscientes, criadas para uma guerra h\u00e1 muito esquecida.",
            "hash": 898834093,
            "index": 0
          }
        }];
        const state = {
          character_list: expectedState
        }
        expect(
          reducer(state, {
            type: 'SET_CHARACTER_LIST',
            character_list: expectedState
          })
        ).to.eql(state);
  });

});
