export const selectActivityMock = {
  username: 'tkrp1986',
  platform: '2',
  characterId: '2305843009345804418',
  activity: 'nightfall',
}
export const getCharacterList = [
  {
    character_id: "2305843009359370836",
    power_level: 334,
    raceHash: 898834093,
    genderHash: 3111576190,
    classHash: 3655393761,
    percentToNextLevel: 0,
    emblemPat: "http:\/\/bungie.net\/common\/destiny_content\/icons\/9b0ff3d80b061515b69c2f842375295d.jpg",
    backgroundPath: "http:\/\/bungie.net\/common\/destiny_content\/icons\/445dec7c65a4946768c1183cd4e34d42.jpg",
    characterLevel: 40,
    classDetails: {
      classHash: 3655393761,
      classType: 0,
      className: "Tit\u00e3",
      classNameMale: "Tit\u00e3",
      classNameFemale: "Tit\u00e3",
      classIdentifier: "CLASS_TITAN",
      mentorVendorIdentifier: "VENDOR_TITAN_MENTOR",
      hash: 3655393761,
      index: 0,
      redacted: false
    },
    genderDetails: {
      genderHash: 3111576190,
      genderType: 0,
      genderName: "Masculino",
      genderDescription: "",
      hash: 3111576190,
      index: 0,
      redacted: false
    },
    raceDetails: {
      raceHash: 898834093,
      raceType: 2,
      raceName: "Exo macho",
      raceNameMale: "Exo macho",
      raceNameFemale: "Exo f\u00eamea",
      raceDescription: "M\u00e1quinas conscientes, criadas para uma guerra h\u00e1 muito esquecida.",
      hash: 898834093,
      index:0,
      redacted: false
    }
  }
];
/*
* ,{"character_id":"2305843009345804418","power_level":335,"raceHash":3887404748,"genderHash":3111576190,"classHash":671679327,"percentToNextLevel":0,"emblemPath":"http:\/\/bungie.net\/common\/destiny_content\/icons\/91c40e6a83434d0e07be8b8713c7c03a.jpg","backgroundPath":"http:\/\/bungie.net\/common\/destiny_content\/icons\/995709b6fd7d625367c52e1dd48c4500.jpg","characterLevel":40,"classDetails":{"classHash":671679327,"classType":1,"className":"Ca\u00e7ador","classNameMale":"Ca\u00e7ador","classNameFemale":"Ca\u00e7adora","classIdentifier":"CLASS_HUNTER","mentorVendorIdentifier":"VENDOR_HUNTER_MENTOR","hash":671679327,"index":0,"redacted":false},"genderDetails":{"genderHash":3111576190,"genderType":0,"genderName":"Masculino","genderDescription":"","hash":3111576190,"index":0,"redacted":false},"raceDetails":{"raceHash":3887404748,"raceType":0,"raceName":"Humano","raceNameMale":"Humano","raceNameFemale":"Humana","raceDescription":"Humano","hash":3887404748,"index":0,"redacted":false}},{"character_id":"2305843009271058982","power_level":334,"raceHash":2803282938,"genderHash":3111576190,"classHash":2271682572,"percentToNextLevel":0,"emblemPath":"http:\/\/bungie.net\/common\/destiny_content\/icons\/91c40e6a83434d0e07be8b8713c7c03a.jpg","backgroundPath":"http:\/\/bungie.net\/common\/destiny_content\/icons\/995709b6fd7d625367c52e1dd48c4500.jpg","characterLevel":40,"classDetails":{"classHash":2271682572,"classType":2,"className":"Arcano","classNameMale":"Arcano","classNameFemale":"Arcana","classIdentifier":"CLASS_WARLOCK","mentorVendorIdentifier":"VENDOR_WARLOCK_MENTOR","hash":2271682572,"index":0,"redacted":false},"genderDetails":{"genderHash":3111576190,"genderType":0,"genderName":"Masculino","genderDescription":"","hash":3111576190,"index":0,"redacted":false},"raceDetails":{"raceHash":2803282938,"raceType":1,"raceName":"Desperto","raceNameMale":"Desperto","raceNameFemale":"Desperta","raceDescription":"Os Despertos sobreviveram ao Colapso no espa\u00e7o extra-solar, mas isso os mudou para sempre.","hash":2803282938,"index":0,"redacted":false}}
*/

export const userLoggedIn = {
  character_list: [],
  user_info: {
    platform: '2',
    username: 'tkrp1986',
    character_id: '2305843009345804418',
  }
}
export const activityFull = {
  identifier: "dailychapter",
  status: {
    expirationDate: "2016-06-05T09:00:00Z",
    startDate: "2016-06-04T09:00:00Z",
    expirationKnown: true,
    active: true
  },
  display: {
    categoryHash: 2902063273,
    icon: "/img/theme/destiny/icons/node_story_featured.png",
    image: "/img/theme/destiny/bgs/pgcrs/the_coming_war.jpg",
    advisorTypeCategory: "Missão diária da história",
    activityHash: 853774317,
    destinationHash: 3705523133,
    factionHash: 468098704,
    placeHash: 3114284952,
    about: "<div>A missão heroica diária da história é uma seleção rotativa de missões da história que providencia uma oferta diária de marcas lendárias. A missão disponível muda diariamente, e só pode conceder marcas lendárias uma vez por dia, para cada conta.</div>",
    status: "",
    tips: [
      "Algumas missões heroicas diárias da história possuem finais secretos que oferecem recompensas exclusivas.",
      "Coletar contratos diários da Vanguarda antes de completar uma missão heroica diária da história é uma ótima maneira de maximizar a eficiência do seu tempo de jogo.",
      "Certifique-se de que você tenha espaço suficiente para marcas lendárias antes de completar a missão heroica diária da história. Marcas não ganhas devido a um inventário de marcas lendárias cheio serão perdidas."
    ],
    recruitmentIds: [
      "BountyOrQuest"
    ]
  },
  completion: {
    complete: false,
    success: false
  },
  vendorHash: 2668878854,
  progressionHash: 3233510749,
  bountyHashes: [
    4085991202,
    3763238215,
    3763238211,
    3763238209,
    1209869511,
    1209869507
  ],
  activityTiers: [
    {
      activityHash: 853774317,
      tierDisplayName: "",
      rewards: [
        {
          rewardItems: [
            {
              itemHash: 3510203897,
              value: 15
            }
          ]
        }
      ],
      activityData: {
        activityHash: 853774317,
        isNew: false,
        canLead: true,
        canJoin: true,
        isCompleted: true,
        isVisible: true,
        displayLevel: 41,
        recommendedLight: 240,
        difficultyTier: 2
      }
    }
  ],
  rewards: [
    {
      itemHash: 3510203897,
      itemName: "Marcas Lendárias",
      icon: "/common/destiny_content/icons/e4522a823851e55cdc832388673768e5.png",
      hasIcon: true,
      secondaryIcon: "/img/misc/missing_icon.png",
      actionName: "",
      actionDescription: "",
      hasAction: false,
      deleteOnAction: false,
      tierTypeName: "Lendário",
      tierType: 5,
      bucketTypeHash: 3621873013,
      primaryBaseStatHash: 0,
      stats: {

      },
      perkHashes: [

      ],
      specialItemType: 0,
      talentGridHash: 0,
      hasGeometry: false,
      statGroupHash: 0,
      itemLevels: [

      ],
      qualityLevel: 0,
      equippable: false,
      instanced: false,
      rewardItemHash: 0,
      values: {

      },
      itemType: 0,
      itemSubType: 0,
      classType: 3,
      itemCategoryHashes: [

      ],
      sourceHashes: [

      ],
      nonTransferrable: true,
      exclusive: 0,
      maxStackSize: 1,
      itemIndex: 0,
      setItemHashes: [

      ],
      tooltipStyle: "",
      questlineItemHash: 0,
      needsFullCompletion: false,
      objectiveHashes: [

      ],
      allowActions: true,
      questTrackingUnlockValueHash: 0,
      bountyResetUnlockHash: 0,
      uniquenessHash: 0,
      showActiveNodesInTooltip: false,
      hash: 3510203897,
      index: 0
    }
  ],
  bounties: [
    {
      itemHash: 4085991202,
      itemName: "Reconhecimento do Cosmódromo",
      itemDescription: "Colete recursos, abra baús e derrote inimigos no Cosmódromo.",
      icon: "/common/destiny_content/icons/bd52348b6cd11b9c18eb216b465fefd5.jpg",
      hasIcon: true,
      secondaryIcon: "/img/misc/missing_icon.png",
      actionName: "Abandonar",
      hasAction: true,
      deleteOnAction: true,
      tierTypeName: "Comum",
      tierType: 2,
      itemTypeName: "Contrato da Vanguarda",
      bucketTypeHash: 2197472680,
      primaryBaseStatHash: 0,
      stats: {

      },
      perkHashes: [

      ],
      specialItemType: 0,
      talentGridHash: 0,
      hasGeometry: false,
      statGroupHash: 0,
      itemLevels: [

      ],
      qualityLevel: 0,
      equippable: false,
      instanced: true,
      rewardItemHash: 0,
      values: {
        2882093969: 10,
        3006793116: 3000,
        3110575382: 65
      },
      itemType: 4,
      itemSubType: 2,
      classType: 3,
      sources: [
        {
          expansionIndex: 0,
          level: 0,
          minQuality: 0,
          maxQuality: 0,
          minLevelRequired: 0,
          maxLevelRequired: 0,
          exclusivity: 0,
          computedStats: {

          },
          sourceHashes: [
            2975148657,
            460228854
          ],
          spawnIndexes: [
            0
          ]
        }
      ],
      itemCategoryHashes: [
        26,
        27,
        52
      ],
      sourceHashes: [
        2975148657,
        460228854
      ],
      nonTransferrable: true,
      exclusive: 0,
      maxStackSize: 1,
      itemIndex: 0,
      setItemHashes: [

      ],
      narrative: "",
      tooltipStyle: "bounty",
      questlineItemHash: 0,
      needsFullCompletion: true,
      objectiveVerb: "Completar",
      objectiveHashes: [
        2599425842
      ],
      allowActions: true,
      questTrackingUnlockValueHash: 0,
      bountyResetUnlockHash: 0,
      uniquenessHash: 0,
      showActiveNodesInTooltip: false,
      hash: 4085991202,
      index: 0,
      details: {
        questHash: 4085991202,
        stepHash: 4085991202,
        stepObjectives: [

        ],
        tracked: false,
        itemInstanceId: "0",
        completed: false,
        started: false
      }
    },
    {
      itemHash: 3763238215,
      itemName: "Imortal",
      itemDescription: "Ganhe 10.000 de EXP sem morrer.",
      icon: "/common/destiny_content/icons/bd52348b6cd11b9c18eb216b465fefd5.jpg",
      hasIcon: true,
      secondaryIcon: "/img/misc/missing_icon.png",
      actionName: "Abandonar",
      hasAction: true,
      deleteOnAction: true,
      tierTypeName: "Comum",
      tierType: 2,
      itemTypeName: "Contrato da Vanguarda",
      bucketTypeHash: 2197472680,
      primaryBaseStatHash: 0,
      stats: {

      },
      perkHashes: [

      ],
      specialItemType: 0,
      talentGridHash: 0,
      hasGeometry: false,
      statGroupHash: 0,
      itemLevels: [

      ],
      qualityLevel: 0,
      equippable: false,
      instanced: true,
      rewardItemHash: 0,
      values: {
        3006793116: 2500,
        3110575382: 50
      },
      itemType: 4,
      itemSubType: 2,
      classType: 3,
      sources: [
        {
          expansionIndex: 0,
          level: 0,
          minQuality: 0,
          maxQuality: 0,
          minLevelRequired: 0,
          maxLevelRequired: 0,
          exclusivity: 0,
          computedStats: {

          },
          sourceHashes: [
            2975148657,
            460228854
          ],
          spawnIndexes: [
            0
          ]
        }
      ],
      itemCategoryHashes: [
        26,
        27,
        52
      ],
      sourceHashes: [
        2975148657,
        460228854
      ],
      nonTransferrable: true,
      exclusive: 0,
      maxStackSize: 1,
      itemIndex: 0,
      setItemHashes: [

      ],
      narrative: "",
      tooltipStyle: "bounty",
      questlineItemHash: 0,
      needsFullCompletion: true,
      objectiveVerb: "Completar",
      objectiveHashes: [
        2301503792
      ],
      allowActions: true,
      questTrackingUnlockValueHash: 0,
      bountyResetUnlockHash: 0,
      uniquenessHash: 0,
      showActiveNodesInTooltip: false,
      hash: 3763238215,
      index: 0,
      details: {
        questHash: 3763238215,
        stepHash: 3763238215,
        stepObjectives: [

        ],
        tracked: false,
        itemInstanceId: "0",
        completed: false,
        started: false
      }
    },
    {
      itemHash: 3763238211,
      itemName: "Luz Cativante",
      itemDescription: "Obtenha 30 baixas com habilidades de vácuo.",
      icon: "/common/destiny_content/icons/bd52348b6cd11b9c18eb216b465fefd5.jpg",
      hasIcon: true,
      secondaryIcon: "/img/misc/missing_icon.png",
      actionName: "Abandonar",
      hasAction: true,
      deleteOnAction: true,
      tierTypeName: "Comum",
      tierType: 2,
      itemTypeName: "Contrato da Vanguarda",
      bucketTypeHash: 2197472680,
      primaryBaseStatHash: 0,
      stats: {

      },
      perkHashes: [

      ],
      specialItemType: 0,
      talentGridHash: 0,
      hasGeometry: false,
      statGroupHash: 0,
      itemLevels: [

      ],
      qualityLevel: 0,
      equippable: false,
      instanced: true,
      rewardItemHash: 0,
      values: {
        3006793116: 2500,
        3110575382: 50
      },
      itemType: 4,
      itemSubType: 2,
      classType: 3,
      sources: [
        {
          expansionIndex: 0,
          level: 0,
          minQuality: 0,
          maxQuality: 0,
          minLevelRequired: 0,
          maxLevelRequired: 0,
          exclusivity: 0,
          computedStats: {

          },
          sourceHashes: [
            2975148657,
            460228854
          ],
          spawnIndexes: [
            0
          ]
        }
      ],
      itemCategoryHashes: [
        26,
        27,
        52
      ],
      sourceHashes: [
        2975148657,
        460228854
      ],
      nonTransferrable: true,
      exclusive: 0,
      maxStackSize: 1,
      itemIndex: 0,
      setItemHashes: [

      ],
      narrative: "",
      tooltipStyle: "bounty",
      questlineItemHash: 0,
      needsFullCompletion: true,
      objectiveVerb: "Completar",
      objectiveHashes: [
        92665560
      ],
      allowActions: true,
      questTrackingUnlockValueHash: 0,
      bountyResetUnlockHash: 0,
      uniquenessHash: 0,
      showActiveNodesInTooltip: false,
      hash: 3763238211,
      index: 0,
      details: {
        questHash: 3763238211,
        stepHash: 3763238211,
        stepObjectives: [

        ],
        tracked: false,
        itemInstanceId: "0",
        completed: false,
        started: false
      }
    },
    {
      itemHash: 3763238209,
      itemName: "Combate Rápido",
      itemDescription: "Mate 30 inimigos sem sofrer dano deles.",
      icon: "/common/destiny_content/icons/bd52348b6cd11b9c18eb216b465fefd5.jpg",
      hasIcon: true,
      secondaryIcon: "/img/misc/missing_icon.png",
      actionName: "Abandonar",
      hasAction: true,
      deleteOnAction: true,
      tierTypeName: "Comum",
      tierType: 2,
      itemTypeName: "Contrato da Vanguarda",
      bucketTypeHash: 2197472680,
      primaryBaseStatHash: 0,
      stats: {

      },
      perkHashes: [

      ],
      specialItemType: 0,
      talentGridHash: 0,
      hasGeometry: false,
      statGroupHash: 0,
      itemLevels: [

      ],
      qualityLevel: 0,
      equippable: false,
      instanced: true,
      rewardItemHash: 0,
      values: {
        3006793116: 2500,
        3110575382: 50
      },
      itemType: 4,
      itemSubType: 2,
      classType: 3,
      sources: [
        {
          expansionIndex: 0,
          level: 0,
          minQuality: 0,
          maxQuality: 0,
          minLevelRequired: 0,
          maxLevelRequired: 0,
          exclusivity: 0,
          computedStats: {

          },
          sourceHashes: [
            2975148657,
            460228854
          ],
          spawnIndexes: [
            0
          ]
        }
      ],
      itemCategoryHashes: [
        26,
        27,
        52
      ],
      sourceHashes: [
        2975148657,
        460228854
      ],
      nonTransferrable: true,
      exclusive: 0,
      maxStackSize: 1,
      itemIndex: 0,
      setItemHashes: [

      ],
      narrative: "",
      tooltipStyle: "bounty",
      questlineItemHash: 0,
      needsFullCompletion: true,
      objectiveVerb: "Completar",
      objectiveHashes: [
        1746392783
      ],
      allowActions: true,
      questTrackingUnlockValueHash: 0,
      bountyResetUnlockHash: 0,
      uniquenessHash: 0,
      showActiveNodesInTooltip: false,
      hash: 3763238209,
      index: 0,
      details: {
        questHash: 3763238209,
        stepHash: 3763238209,
        stepObjectives: [

        ],
        tracked: false,
        itemInstanceId: "0",
        completed: false,
        started: false
      }
    },
    {
      itemHash: 1209869511,
      itemName: "Caça aos Eliksni",
      itemDescription: "Derrote 50 Decaídos.",
      icon: "/common/destiny_content/icons/bd52348b6cd11b9c18eb216b465fefd5.jpg",
      hasIcon: true,
      secondaryIcon: "/img/misc/missing_icon.png",
      actionName: "Abandonar",
      hasAction: true,
      deleteOnAction: true,
      tierTypeName: "Comum",
      tierType: 2,
      itemTypeName: "Contrato da Vanguarda",
      bucketTypeHash: 2197472680,
      primaryBaseStatHash: 0,
      stats: {

      },
      perkHashes: [

      ],
      specialItemType: 0,
      talentGridHash: 0,
      hasGeometry: false,
      statGroupHash: 0,
      itemLevels: [

      ],
      qualityLevel: 0,
      equippable: false,
      instanced: true,
      rewardItemHash: 0,
      values: {
        3006793116: 3000,
        3110575382: 65
      },
      itemType: 4,
      itemSubType: 2,
      classType: 3,
      sources: [
        {
          expansionIndex: 0,
          level: 0,
          minQuality: 0,
          maxQuality: 0,
          minLevelRequired: 0,
          maxLevelRequired: 0,
          exclusivity: 0,
          computedStats: {

          },
          sourceHashes: [
            2975148657,
            460228854
          ],
          spawnIndexes: [
            0
          ]
        }
      ],
      itemCategoryHashes: [
        26,
        27,
        52
      ],
      sourceHashes: [
        2975148657,
        460228854
      ],
      nonTransferrable: true,
      exclusive: 0,
      maxStackSize: 1,
      itemIndex: 0,
      setItemHashes: [

      ],
      narrative: "",
      tooltipStyle: "bounty",
      questlineItemHash: 0,
      needsFullCompletion: true,
      objectiveVerb: "Completar",
      objectiveHashes: [
        3328171211
      ],
      allowActions: true,
      questTrackingUnlockValueHash: 0,
      bountyResetUnlockHash: 0,
      uniquenessHash: 0,
      showActiveNodesInTooltip: false,
      hash: 1209869511,
      index: 0,
      details: {
        questHash: 1209869511,
        stepHash: 1209869511,
        stepObjectives: [

        ],
        tracked: false,
        itemInstanceId: "0",
        completed: false,
        started: false
      }
    },
    {
      itemHash: 1209869507,
      itemName: "Caça à Colmeia",
      itemDescription: "Derrote 50 inimigos da Colmeia.",
      icon: "/common/destiny_content/icons/bd52348b6cd11b9c18eb216b465fefd5.jpg",
      hasIcon: true,
      secondaryIcon: "/img/misc/missing_icon.png",
      actionName: "Abandonar",
      hasAction: true,
      deleteOnAction: true,
      tierTypeName: "Comum",
      tierType: 2,
      itemTypeName: "Contrato da Vanguarda",
      bucketTypeHash: 2197472680,
      primaryBaseStatHash: 0,
      stats: {

      },
      perkHashes: [

      ],
      specialItemType: 0,
      talentGridHash: 0,
      hasGeometry: false,
      statGroupHash: 0,
      itemLevels: [

      ],
      qualityLevel: 0,
      equippable: false,
      instanced: true,
      rewardItemHash: 0,
      values: {
        3006793116: 3000,
        3110575382: 65
      },
      itemType: 4,
      itemSubType: 2,
      classType: 3,
      sources: [
        {
          expansionIndex: 0,
          level: 0,
          minQuality: 0,
          maxQuality: 0,
          minLevelRequired: 0,
          maxLevelRequired: 0,
          exclusivity: 0,
          computedStats: {

          },
          sourceHashes: [
            2975148657,
            460228854
          ],
          spawnIndexes: [
            0
          ]
        }
      ],
      itemCategoryHashes: [
        26,
        27,
        52
      ],
      sourceHashes: [
        2975148657,
        460228854
      ],
      nonTransferrable: true,
      exclusive: 0,
      maxStackSize: 1,
      itemIndex: 0,
      setItemHashes: [

      ],
      narrative: "",
      tooltipStyle: "bounty",
      questlineItemHash: 0,
      needsFullCompletion: true,
      objectiveVerb: "Completar",
      objectiveHashes: [
        3187300247
      ],
      allowActions: true,
      questTrackingUnlockValueHash: 0,
      bountyResetUnlockHash: 0,
      uniquenessHash: 0,
      showActiveNodesInTooltip: false,
      hash: 1209869507,
      index: 0,
      details: {
        questHash: 1209869507,
        stepHash: 1209869507,
        stepObjectives: [

        ],
        tracked: false,
        itemInstanceId: "0",
        completed: false,
        started: false
      }
    }
  ],
  details: {
    activityHash: 853774317,
    activityName: "A guerra por vir",
    activityDescription: "Viaje até Fobos e investigue o sinal de socorro dos Cabais.",
    icon: "/common/destiny_content/icons/4b40f17a53bb44bf3aa36769c9a671d0.png",
    releaseIcon: "/common/destiny_content/icons/abac288fa420f151a36a6cc6afbb5e70.png",
    releaseTime: 0,
    activityLevel: 41,
    completionFlagHash: 1805431820,
    activityPower: 0,
    minParty: 1,
    maxParty: 3,
    maxPlayers: 3,
    destinationHash: 3705523133,
    placeHash: 3114284952,
    activityTypeHash: 1686739444,
    tier: 2,
    pgcrImage: "/img/theme/destiny/bgs/pgcrs/the_coming_war.jpg",
    rewards: [
      {
        rewardItems: [
          {
            itemHash: 3510203897,
            value: 15
          }
        ]
      }
    ],
    skulls: [
      {
        displayName: "Heróico",
        description: "Inimigos aparecem em maiores números e são mais agressivos.",
        icon: "/common/destiny_content/icons/e973322a4dbe78acd3babfc7b7d6acfb.png"
      }
    ],
    isPlaylist: false,
    isMatchmade: false,
    hash: 853774317,
    index: 0
  }
}
export const activitySmall = {
    status: {
      expirationDate: "2016-05-24T09:00:00Z",
      startDate: "2016-05-17T09:00:00Z",
      expirationKnown: true,
      active: true
    },
    display: {
      categoryHash: 1852922491,
      identifier: "nightfall",
      icon: "/img/theme/destiny/icons/node_strike_nightfall.png",
      image: "/img/theme/destiny/bgs/pgcrs/shield_brothers.jpg",
      advisorTypeCategory: "Assalto do Anoitecer",
      activityHash: 355200465,
      playlistHash: 1749151224,
      destinationHash: 2897855902,
      factionHash: 468098704,
      placeHash: 596872852
    }
  }

export const getActivityInfo = {
  select: {
    activity: 'nightfall',
  }
}
