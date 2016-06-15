export const ScreenLogin = { screen: 'login'};
export const ScreenActivity = { screen: 'activity' };
export const ScreenCharacter = { screen: 'character_list' };

export const FullCharacterList = {
  "character_list": [{"character_id":"2305843009345804418","power_level":335,"raceHash":3887404748,"genderHash":3111576190,"classHash":671679327,"percentToNextLevel":0,"emblemPath":"/common/destiny_content/icons/d0d3cd4c26aa1a931d46c4bf720856ba.jpg","backgroundPath":"/common/destiny_content/icons/47290893c7c1703be898c07103e3fee5.jpg","characterLevel":40,"classDetails":{"classHash":671679327,"classType":1,"className":"Caçador","classNameMale":"Caçador","classNameFemale":"Caçadora","classIdentifier":"CLASS_HUNTER","mentorVendorIdentifier":"VENDOR_HUNTER_MENTOR","hash":671679327,"index":0},"genderDetails":{"genderHash":3111576190,"genderType":0,"genderName":"Masculino","genderDescription":"","hash":3111576190,"index":0},"raceDetails":{"raceHash":3887404748,"raceType":0,"raceName":"Humano","raceNameMale":"Humano","raceNameFemale":"Humana","raceDescription":"Humano","hash":3887404748,"index":0}},{"character_id":"2305843009271058982","power_level":333,"raceHash":2803282938,"genderHash":3111576190,"classHash":2271682572,"percentToNextLevel":0,"emblemPath":"/common/destiny_content/icons/b3951787af65e8b6b9dbaf3cf4c639fa.jpg","backgroundPath":"/common/destiny_content/icons/435895294497f02203e0938374af2529.jpg","characterLevel":40,"classDetails":{"classHash":2271682572,"classType":2,"className":"Arcano","classNameMale":"Arcano","classNameFemale":"Arcana","classIdentifier":"CLASS_WARLOCK","mentorVendorIdentifier":"VENDOR_WARLOCK_MENTOR","hash":2271682572,"index":0},"genderDetails":{"genderHash":3111576190,"genderType":0,"genderName":"Masculino","genderDescription":"","hash":3111576190,"index":0},"raceDetails":{"raceHash":2803282938,"raceType":1,"raceName":"Desperto","raceNameMale":"Desperto","raceNameFemale":"Desperta","raceDescription":"Os Despertos sobreviveram ao Colapso no espaço extra-solar, mas isso os mudou para sempre.","hash":2803282938,"index":0}},{"character_id":"2305843009359370836","power_level":307,"raceHash":898834093,"genderHash":3111576190,"classHash":3655393761,"percentToNextLevel":0,"emblemPath":"/common/destiny_content/icons/6f75c4ecfa99020a0a0390f64ca71448.jpg","backgroundPath":"/common/destiny_content/icons/f9893f7d22d4f339eaa474ab16e588d0.jpg","characterLevel":40,"classDetails":{"classHash":3655393761,"classType":0,"className":"Titã","classNameMale":"Titã","classNameFemale":"Titã","classIdentifier":"CLASS_TITAN","mentorVendorIdentifier":"VENDOR_TITAN_MENTOR","hash":3655393761,"index":0},"genderDetails":{"genderHash":3111576190,"genderType":0,"genderName":"Masculino","genderDescription":"","hash":3111576190,"index":0},"raceDetails":{"raceHash":898834093,"raceType":2,"raceName":"Exo","raceNameMale":"Exo macho","raceNameFemale":"Exo fêmea","raceDescription":"Máquinas conscientes, criadas para uma guerra há muito esquecida.","hash":898834093,"index":0}}],
  user_info: {
    platform: "2",
    username: "tkrp1986",
    character_id:""
  }
};

export const SingleCharacter = {
  "character_id": "2305843009345804418",
  "power_level": 335,
  "raceHash": 3887404748,
  "genderHash": 3111576190,
  "classHash": 671679327,
  "percentToNextLevel": 0,
  "emblemPath": "/common/destiny_content/icons/d0d3cd4c26aa1a931d46c4bf720856ba.jpg",
  "backgroundPath": "/common/destiny_content/icons/47290893c7c1703be898c07103e3fee5.jpg",
  "characterLevel": 40,
  "classDetails": {
    "classHash": 671679327,
    "classType": 1,
    "className": "Caçador",
    "classNameMale": "Caçador",
    "classNameFemale": "Caçadora",
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
};

export const EmptyCharacterList = {
	character_list: [],
	user_info: {
		platform: '',
		username: '',
		character_id: ''
	}
};

export const CharacterNotFound = {
  character_list : {
    status: "error"
  },
  user_info: {
    platform: "2",
    username: "adasdasdasd",
    character_id: ""
  }
};

export const UserSingleCharacter = {
  character_list: [SingleCharacter],
  user_info: {
    platform: '2',
    username: 'tkrp1986',
    character_id: '2305843009345804418',
  }
}
export const InitActivity = {
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

export const FullActivity = {
  "identifier": "nightfall",
  "status": {
    "expirationDate": "2016-06-14T09:00:00Z",
    "startDate": "2016-06-07T09:00:00Z",
    "expirationKnown": true,
    "active": true
  },
  "display": {
    "categoryHash": 1986932861,
    "icon": "/img/theme/destiny/icons/node_strike_nightfall.png",
    "image": "/img/theme/destiny/bgs/pgcrs/TakenWintersRun.jpg",
    "advisorTypeCategory": "Assalto do Anoitecer",
    "activityHash": 2861777810,
    "playlistHash": 1749151224,
    "destinationHash": 518553403,
    "factionHash": 468098704,
    "placeHash": 3871070152,
    "about": "<div>O Assalto do Anoitecer semanal \u00e9 uma sele\u00e7\u00e3o de um Assalto que apresenta uma combina\u00e7\u00e3o \u00fanica de modificadores a cada semana. O Assalto do Anoitecer semanal e os modificadores mudam com cada reset semanal.<\/div><div><br><\/div>",
    "status": "" ,
    "tips": [
      "Traga uma equipe! O Assalto do Anoitecer semanal n\u00e3o emparelha voc\u00ea com outros jogadores.",
      "Os modificadores de cada Assalto do Anoitecer s\u00e3o exibidos no Navegador. Utilize esses modificadores para a sua vantagem.",
      "As recompensas do Anoitecer podem ser ganhas uma vez por semana, por personagem."
    ],
    "recruitmentIds": ["Nightfall"]
  },
  "completion": {
    "complete": false,
    "success": false
  },
  "vendorHash": 2668878854,
  "progressionHash": 3233510749,
  "bountyHashes": [4085991202,3763238222,1652727537,1652727539,1209869505,1209869506],
  "activityTiers": [
    {
      "activityHash": 2861777810,
      "tierDisplayName": "",
      "completion": {
        "complete": false,
        "success": false
      },
      "rewards": [
        {
          "rewardItems": [
            {
              "itemHash": 3747303650,
              "value": 0
            }
          ]
        }
      ]
    }
  ],
  "extended": {"highestWinRank": 0,
  "skullCategories":
    [
      {
        "title": "Modificadores",
        "skulls": [
          {
            "displayName": "\u00c9pico",
            "description": "Inimigos blindados e altamente agressivos aparecem em grandes n\u00fameros.",
            "icon": "/common/destiny_content/icons/1b3849a8ce0f528e420aafcfc2fce650.png"
          },
          {
            "displayName": "Queimadura do V\u00e1cuo",
            "description": "Aumenta muito o dano de V\u00e1cuo de qualquer fonte.",
            "icon": "/common/destiny_content/icons/5fafea0f01dd0b8d1027a919ee327357.png"
          },
          {
            "displayName": "Lutador",
            "description": "O dano de ataques corpo a corpo de Guardi\u00f5es \u00e9 bastante aumentado.",
            "icon": "/common/destiny_content/icons/3cff62331d986f142c766aa208d7ec09.png"
          },
          {
            "displayName": "P\u00e9s no Ch\u00e3o",
            "description": "Jogadores tomam mais dano enquanto est\u00e3o no ar.",
            "icon": "/common/destiny_content/icons/48ee126b6c5075d8a688ef8dc10b389e.png"
          },
          {
            "displayName": "Gotejando",
            "description": "A recarga de habilidades \u00e9 significativamente reduzida.",
            "icon": "/common/destiny_content/icons/11023f1f7445be813a112aa3646ba1ee.png"
          }
        ]
      }
    ]
  },
  "details": {
    "activityHash": 2861777810,
    "activityName": "Caminho Invernal",
    "activityDescription": "Enquanto os Vex marcham para reivindicar a Depress\u00e3o de Ishtar, os Deca\u00eddos da Casa do Inverno est\u00e3o reanimando um poderoso Arconte, roubado da Pris\u00e3o dos Anci\u00f5es no Arrecife. Encontre o Arconte antes que eles restaurem completamente a sua alma.",
    "icon": "/img/theme/destiny/icons/node_strike_nightfall.png",
    "releaseIcon": "/img/misc/missing_icon.png",
    "releaseTime": 0,
    "activityLevel": 42,
    "completionFlagHash": 3046901310,
    "activityPower": 0,
    "minParty": 1,
    "maxParty": 3,
    "maxPlayers": 3,
    "destinationHash": 518553403,
    "placeHash": 3871070152,
    "activityTypeHash": 575572995,
    "tier": 1,
    "pgcrImage": "/img/theme/destiny/bgs/pgcrs/TakenWintersRun.jpg",
    "rewards": [],
    "skulls": [],
    "isPlaylist": false,
    "isMatchmade": true,
    "hash": 2861777810,
    "index": 0
  },
  "rewards":
  [
    {
      "itemHash": 3747303650,
      "itemName": "Recompensas desconhecidas",
      "icon": "/common/destiny_content/icons/6a7d79fa021d584da0ff02b16f3e738b.jpg",
    }
  ],
  "bounties":
  [
    {
      "itemHash":4085991202,
      "itemName": "Reconhecimento do Cosm\u00f3dromo",
      "itemDescription": "Colete recursos, abra ba\u00fas e derrote inimigos no Cosm\u00f3dromo.",
      "icon": "/common/destiny_content/icons/bd52348b6cd11b9c18eb216b465fefd5.jpg",
    }
  ],
  progress: [],
  objectives: [],
  modifiers: [],
  bosses: [],
  items: [],
};
