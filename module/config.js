// Namespace D&D5e Configuration Values
export const carbon2185 = {};

// ASCII Artwork
carbon2185.ASCII = `_______________________________
______      ______ _____ _____ 
|  _  \\___  |  _  \\  ___|  ___|
| | | ( _ ) | | | |___ \\| |__  
| | | / _ \\/\\ | | |   \\ \\  __| 
| |/ / (_>  < |/ //\\__/ / |___ 
|___/ \\___/\\/___/ \\____/\\____/
_______________________________`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
carbon2185.abilities = {
  "str": "carbon2185.AbilityStr",
  "dex": "carbon2185.AbilityDex",
  "con": "carbon2185.AbilityCon",
  "int": "carbon2185.AbilityInt",
  "tech": "carbon2185.AbilityTech",
  "people": "carbon2185.AbilityPeople"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
carbon2185.alignments = {
  'lg': "carbon2185.AlignmentLG",
  'ng': "carbon2185.AlignmentNG",
  'cg': "carbon2185.AlignmentCG",
  'ln': "carbon2185.AlignmentLN",
  'tn': "carbon2185.AlignmentTN",
  'cn': "carbon2185.AlignmentCN",
  'le': "carbon2185.AlignmentLE",
  'ne': "carbon2185.AlignmentNE",
  'ce': "carbon2185.AlignmentCE"
};


carbon2185.weaponProficiencies = {
  "sim": "carbon2185.WeaponSimpleProficiency",
  "mar": "carbon2185.WeaponMartialProficiency"
};

carbon2185.toolProficiencies = {
  "art": "carbon2185.ToolArtisans",
  "disg": "carbon2185.ToolDisguiseKit",
  "forg": "carbon2185.ToolForgeryKit",
  "game": "carbon2185.ToolGamingSet",
  "herb": "carbon2185.ToolHerbalismKit",
  "music": "carbon2185.ToolMusicalInstrument",
  "navg": "carbon2185.ToolNavigators",
  "pois": "carbon2185.ToolPoisonersKit",
  "thief": "carbon2185.ToolThieves",
  "vehicle": "carbon2185.ToolVehicle"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur in D&D5e
 * @type {Object}
 */
carbon2185.timePeriods = {
  "inst": "carbon2185.TimeInst",
  "turn": "carbon2185.TimeTurn",
  "round": "carbon2185.TimeRound",
  "minute": "carbon2185.TimeMinute",
  "hour": "carbon2185.TimeHour",
  "day": "carbon2185.TimeDay",
  "month": "carbon2185.TimeMonth",
  "year": "carbon2185.TimeYear",
  "perm": "carbon2185.TimePerm",
  "spec": "carbon2185.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
carbon2185.abilityActivationTypes = {
  "none": "carbon2185.None",
  "action": "carbon2185.Action",
  "bonus": "carbon2185.BonusAction",
  "reaction": "carbon2185.Reaction",
  "minute": carbon2185.timePeriods.minute,
  "hour": carbon2185.timePeriods.hour,
  "day": carbon2185.timePeriods.day,
  "special": carbon2185.timePeriods.spec,
  "legendary": "carbon2185.LegAct",
  "lair": "carbon2185.LairAct"
};

/* -------------------------------------------- */


carbon2185.abilityConsumptionTypes = {
  "ammo": "carbon2185.ConsumeAmmunition",
  "attribute": "carbon2185.ConsumeAttribute",
  "material": "carbon2185.ConsumeMaterial",
  "charges": "carbon2185.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
carbon2185.actorSizes = {
  "tiny": "carbon2185.SizeTiny",
  "sm": "carbon2185.SizeSmall",
  "med": "carbon2185.SizeMedium",
  "lg": "carbon2185.SizeLarge",
  "huge": "carbon2185.SizeHuge",
  "grg": "carbon2185.SizeGargantuan"
};

carbon2185.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
carbon2185.itemActionTypes = {
  "mwak": "carbon2185.ActionMWAK",
  "rwak": "carbon2185.ActionRWAK",
  "msak": "carbon2185.ActionMSAK",
  "rsak": "carbon2185.ActionRSAK",
  "save": "carbon2185.ActionSave",
  "heal": "carbon2185.ActionHeal",
  "abil": "carbon2185.ActionAbil",
  "util": "carbon2185.ActionUtil",
  "other": "carbon2185.ActionOther"
};

/* -------------------------------------------- */

carbon2185.itemCapacityTypes = {
  "items": "carbon2185.ItemContainerCapacityItems",
  "weight": "carbon2185.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
carbon2185.limitedUsePeriods = {
  "sr": "carbon2185.ShortRest",
  "lr": "carbon2185.LongRest",
  "day": "carbon2185.Day",
  "charges": "carbon2185.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
carbon2185.equipmentTypes = {
  "light": "carbon2185.EquipmentLight",
  "medium": "carbon2185.EquipmentMedium",
  "heavy": "carbon2185.EquipmentHeavy",
  "bonus": "carbon2185.EquipmentBonus",
  "natural": "carbon2185.EquipmentNatural",
  "shield": "carbon2185.EquipmentShield",
  "clothing": "carbon2185.EquipmentClothing",
  "trinket": "carbon2185.EquipmentTrinket"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
carbon2185.armorProficiencies = {
  "lgt": carbon2185.equipmentTypes.light,
  "med": carbon2185.equipmentTypes.medium,
  "hvy": carbon2185.equipmentTypes.heavy,
  "shl": "carbon2185.EquipmentShieldProficiency"
};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
carbon2185.consumableTypes = {
  "ammo": "carbon2185.ConsumableAmmunition",
  "potion": "carbon2185.ConsumablePotion",
  "poison": "carbon2185.ConsumablePoison",
  "food": "carbon2185.ConsumableFood",
  "scroll": "carbon2185.ConsumableScroll",
  "wand": "carbon2185.ConsumableWand",
  "rod": "carbon2185.ConsumableRod",
  "trinket": "carbon2185.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
carbon2185.currencies = {
  "pp": "carbon2185.CurrencyPP",
  "gp": "carbon2185.CurrencyGP",
  "ep": "carbon2185.CurrencyEP",
  "sp": "carbon2185.CurrencySP",
  "cp": "carbon2185.CurrencyCP",
};

/* -------------------------------------------- */


// Damage Types
carbon2185.damageTypes = {
  "acid": "carbon2185.DamageAcid",
  "bludgeoning": "carbon2185.DamageBludgeoning",
  "cold": "carbon2185.DamageCold",
  "fire": "carbon2185.DamageFire",
  "force": "carbon2185.DamageForce",
  "lightning": "carbon2185.DamageLightning",
  "necrotic": "carbon2185.DamageNecrotic",
  "piercing": "carbon2185.DamagePiercing",
  "poison": "carbon2185.DamagePoison",
  "psychic": "carbon2185.DamagePsychic",
  "radiant": "carbon2185.DamageRadiant",
  "slashing": "carbon2185.DamageSlashing",
  "thunder": "carbon2185.DamageThunder"
};

/* -------------------------------------------- */

carbon2185.distanceUnits = {
  "none": "carbon2185.None",
  "self": "carbon2185.DistSelf",
  "touch": "carbon2185.DistTouch",
  "ft": "carbon2185.DistFt",
  "mi": "carbon2185.DistMi",
  "spec": "carbon2185.Special",
  "any": "carbon2185.DistAny"
};

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
carbon2185.encumbrance = {
  currencyPerWeight: 50,
  strMultiplier: 15
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied in D&D5e
 * @type {Object}
 */
carbon2185.targetTypes = {
  "none": "carbon2185.None",
  "self": "carbon2185.TargetSelf",
  "creature": "carbon2185.TargetCreature",
  "ally": "carbon2185.TargetAlly",
  "enemy": "carbon2185.TargetEnemy",
  "object": "carbon2185.TargetObject",
  "space": "carbon2185.TargetSpace",
  "radius": "carbon2185.TargetRadius",
  "sphere": "carbon2185.TargetSphere",
  "cylinder": "carbon2185.TargetCylinder",
  "cone": "carbon2185.TargetCone",
  "square": "carbon2185.TargetSquare",
  "cube": "carbon2185.TargetCube",
  "line": "carbon2185.TargetLine",
  "wall": "carbon2185.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are carbon2185 target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
carbon2185.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
carbon2185.healingTypes = {
  "healing": "carbon2185.Healing",
  "temphp": "carbon2185.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes in the D&D5E system
 * @type {Array.<string>}
 */
carbon2185.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * Character senses options
 * @type {Object}
 */
carbon2185.senses = {
  "bs": "carbon2185.SenseBS",
  "dv": "carbon2185.SenseDV",
  "ts": "carbon2185.SenseTS",
  "tr": "carbon2185.SenseTR"
};


/* -------------------------------------------- */

/**
 * The set of skill which can be trained in D&D5e
 * @type {Object}
 */
carbon2185.skills = {
  "acr": "carbon2185.SkillAcr",
  "ath": "carbon2185.SkillAth",
  "bur": "carbon2185.SkillBur",
  "cmp": "carbon2185.SkillCmp",
  "des": "carbon2185.SkillDes",
  "eng": "carbon2185.SkillEng",
  "gmb": "carbon2185.SkillGmb",
  "hac": "carbon2185.SkillHac",
  "his": "carbon2185.SkillHis",
  "itm": "carbon2185.SkillItm",
  "inv": "carbon2185.SkillIvn",
  "mech": "carbon2185.SkillMech",
  "rel": "carbon2185.SkillRel",
  "med": "carbon2185.SkillMed",
  "nav": "carbon2185.SkillNav",
  "per": "carbon2185.SkillPer",
  "prf": "carbon2185.SkillPrf",
  "prs": "carbon2185.SkillPrs",
  "pers": "carbon2185.SkillPres",
  "rlg": "carbon2185.SkillRlg",
  "rob": "carbon2185.SkillRob",
  "snsmtv": "carbon2185.SkillSnsmtv",
  "sloh": "carbon2185.SkillSloh",
  "stlth": "carbon2185.SkillStlth",
  "strwise": "carbon2185.SkillStrWise",
  "trc": "carbon2185.SkillTrc",
  "vhcAir": "carbon2185.SkillVhcAir",
  "vhcLnd": "carbon2185.SkillVhcLnd",
};


/* -------------------------------------------- */

carbon2185.spellPreparationModes = {
  "always": "carbon2185.SpellPrepAlways",
  "atwill": "carbon2185.SpellPrepAtWill",
  "innate": "carbon2185.SpellPrepInnate",
  "pact": "carbon2185.PactMagic",
  "prepared": "carbon2185.SpellPrepPrepared"
};

carbon2185.spellUpcastModes = ["always", "pact", "prepared"];


carbon2185.spellProgression = {
  "none": "carbon2185.SpellNone",
  "full": "carbon2185.SpellProgFull",
  "half": "carbon2185.SpellProgHalf",
  "third": "carbon2185.SpellProgThird",
  "pact": "carbon2185.SpellProgPact",
  "artificer": "carbon2185.SpellProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
carbon2185.spellScalingModes = {
  "none": "carbon2185.SpellNone",
  "cantrip": "carbon2185.SpellCantrip",
  "level": "carbon2185.SpellLevel"
};

/* -------------------------------------------- */


/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
carbon2185.weaponTypes = {
  "simpleM": "carbon2185.WeaponSimpleM",
  "simpleR": "carbon2185.WeaponSimpleR",
  "martialM": "carbon2185.WeaponMartialM",
  "martialR": "carbon2185.WeaponMartialR",
  "natural": "carbon2185.WeaponNatural",
  "improv": "carbon2185.WeaponImprov"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
carbon2185.weaponProperties = {
  "amm": "carbon2185.WeaponPropertiesAmm",
  "hvy": "carbon2185.WeaponPropertiesHvy",
  "fin": "carbon2185.WeaponPropertiesFin",
  "fir": "carbon2185.WeaponPropertiesFir",
  "foc": "carbon2185.WeaponPropertiesFoc",
  "lgt": "carbon2185.WeaponPropertiesLgt",
  "lod": "carbon2185.WeaponPropertiesLod",
  "rch": "carbon2185.WeaponPropertiesRch",
  "rel": "carbon2185.WeaponPropertiesRel",
  "ret": "carbon2185.WeaponPropertiesRet",
  "spc": "carbon2185.WeaponPropertiesSpc",
  "thr": "carbon2185.WeaponPropertiesThr",
  "two": "carbon2185.WeaponPropertiesTwo",
  "ver": "carbon2185.WeaponPropertiesVer"
};


// Spell Components
carbon2185.spellComponents = {
  "V": "carbon2185.ComponentVerbal",
  "S": "carbon2185.ComponentSomatic",
  "M": "carbon2185.ComponentMaterial"
};

// Spell Schools
carbon2185.spellSchools = {
  "abj": "carbon2185.SchoolAbj",
  "con": "carbon2185.SchoolCon",
  "div": "carbon2185.SchoolDiv",
  "enc": "carbon2185.SchoolEnc",
  "evo": "carbon2185.SchoolEvo",
  "ill": "carbon2185.SchoolIll",
  "nec": "carbon2185.SchoolNec",
  "trs": "carbon2185.SchoolTrs"
};

// Spell Levels
carbon2185.spellLevels = {
  0: "carbon2185.SpellLevel0",
  1: "carbon2185.SpellLevel1",
  2: "carbon2185.SpellLevel2",
  3: "carbon2185.SpellLevel3",
  4: "carbon2185.SpellLevel4",
  5: "carbon2185.SpellLevel5",
  6: "carbon2185.SpellLevel6",
  7: "carbon2185.SpellLevel7",
  8: "carbon2185.SpellLevel8",
  9: "carbon2185.SpellLevel9"
};

// Spell Scroll Compendium UUIDs
carbon2185.spellScrollIds = {
  0: 'Compendium.carbon2185.items.rQ6sO7HDWzqMhSI3',
  1: 'Compendium.carbon2185.items.9GSfMg0VOA2b4uFN',
  2: 'Compendium.carbon2185.items.XdDp6CKh9qEvPTuS',
  3: 'Compendium.carbon2185.items.hqVKZie7x9w3Kqds',
  4: 'Compendium.carbon2185.items.DM7hzgL836ZyUFB1',
  5: 'Compendium.carbon2185.items.wa1VF8TXHmkrrR35',
  6: 'Compendium.carbon2185.items.tI3rWx4bxefNCexS',
  7: 'Compendium.carbon2185.items.mtyw4NS1s7j2EJaD',
  8: 'Compendium.carbon2185.items.aOrinPg7yuDZEuWr',
  9: 'Compendium.carbon2185.items.O4YbkJkLlnsgUszZ'
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
carbon2185.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

// Polymorph options.
carbon2185.polymorphSettings = {
  keepPhysical: 'carbon2185.PolymorphKeepPhysical',
  keepMental: 'carbon2185.PolymorphKeepMental',
  keepSaves: 'carbon2185.PolymorphKeepSaves',
  keepSkills: 'carbon2185.PolymorphKeepSkills',
  mergeSaves: 'carbon2185.PolymorphMergeSaves',
  mergeSkills: 'carbon2185.PolymorphMergeSkills',
  keepClass: 'carbon2185.PolymorphKeepClass',
  keepFeats: 'carbon2185.PolymorphKeepFeats',
  keepSpells: 'carbon2185.PolymorphKeepSpells',
  keepItems: 'carbon2185.PolymorphKeepItems',
  keepBio: 'carbon2185.PolymorphKeepBio',
  keepVision: 'carbon2185.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
carbon2185.proficiencyLevels = {
  0: "carbon2185.NotProficient",
  1: "carbon2185.Proficient",
  0.5: "carbon2185.HalfProficient",
  2: "carbon2185.Expertise"
};

/* -------------------------------------------- */


// Condition Types
carbon2185.conditionTypes = {
  "blinded": "carbon2185.ConBlinded",
  "charmed": "carbon2185.ConCharmed",
  "deafened": "carbon2185.ConDeafened",
  "diseased": "carbon2185.ConDiseased",
  "exhaustion": "carbon2185.ConExhaustion",
  "frightened": "carbon2185.ConFrightened",
  "grappled": "carbon2185.ConGrappled",
  "incapacitated": "carbon2185.ConIncapacitated",
  "invisible": "carbon2185.ConInvisible",
  "paralyzed": "carbon2185.ConParalyzed",
  "petrified": "carbon2185.ConPetrified",
  "poisoned": "carbon2185.ConPoisoned",
  "prone": "carbon2185.ConProne",
  "restrained": "carbon2185.ConRestrained",
  "stunned": "carbon2185.ConStunned",
  "unconscious": "carbon2185.ConUnconscious"
};

// Languages
carbon2185.languages = {
  "common": "carbon2185.LanguagesCommon",
  "aarakocra": "carbon2185.LanguagesAarakocra",
  "abyssal": "carbon2185.LanguagesAbyssal",
  "aquan": "carbon2185.LanguagesAquan",
  "auran": "carbon2185.LanguagesAuran",
  "celestial": "carbon2185.LanguagesCelestial",
  "deep": "carbon2185.LanguagesDeepSpeech",
  "draconic": "carbon2185.LanguagesDraconic",
  "druidic": "carbon2185.LanguagesDruidic",
  "dwarvish": "carbon2185.LanguagesDwarvish",
  "elvish": "carbon2185.LanguagesElvish",
  "giant": "carbon2185.LanguagesGiant",
  "gith": "carbon2185.LanguagesGith",
  "gnomish": "carbon2185.LanguagesGnomish",
  "goblin": "carbon2185.LanguagesGoblin",
  "gnoll": "carbon2185.LanguagesGnoll",
  "halfling": "carbon2185.LanguagesHalfling",
  "ignan": "carbon2185.LanguagesIgnan",
  "infernal": "carbon2185.LanguagesInfernal",
  "orc": "carbon2185.LanguagesOrc",
  "primordial": "carbon2185.LanguagesPrimordial",
  "sylvan": "carbon2185.LanguagesSylvan",
  "terran": "carbon2185.LanguagesTerran",
  "cant": "carbon2185.LanguagesThievesCant",
  "undercommon": "carbon2185.LanguagesUndercommon"
};

// Character Level XP Requirements
carbon2185.CHARACTER_EXP_LEVELS =  [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
;

// Challenge Rating XP Levels
carbon2185.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Configure Optional Character Flags
carbon2185.characterFlags = {
  "powerfulBuild": {
    name: "carbon2185.FlagsPowerfulBuild",
    hint: "carbon2185.FlagsPowerfulBuildHint",
    section: "Racial Traits",
    type: Boolean
  },
  "savageAttacks": {
    name: "carbon2185.FlagsSavageAttacks",
    hint: "carbon2185.FlagsSavageAttacksHint",
    section: "Racial Traits",
    type: Boolean
  },
  "elvenAccuracy": {
    name: "carbon2185.FlagsElvenAccuracy",
    hint: "carbon2185.FlagsElvenAccuracyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "halflingLucky": {
    name: "carbon2185.FlagsHalflingLucky",
    hint: "carbon2185.FlagsHalflingLuckyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "carbon2185.FlagsInitiativeAdv",
    hint: "carbon2185.FlagsInitiativeAdvHint",
    section: "Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "carbon2185.FlagsAlert",
    hint: "carbon2185.FlagsAlertHint",
    section: "Feats",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "carbon2185.FlagsJOAT",
    hint: "carbon2185.FlagsJOATHint",
    section: "Feats",
    type: Boolean
  },
  "observantFeat": {
    name: "carbon2185.FlagsObservant",
    hint: "carbon2185.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "Feats",
    type: Boolean
  },
  "reliableTalent": {
    name: "carbon2185.FlagsReliableTalent",
    hint: "carbon2185.FlagsReliableTalentHint",
    section: "Feats",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "carbon2185.FlagsRemarkableAthlete",
    hint: "carbon2185.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "carbon2185.FlagsCritThreshold",
    hint: "carbon2185.FlagsCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  }
};

// Configure allowed status flags
carbon2185.allowedActorFlags = [
  "isPolymorphed", "originalActor"
].concat(Object.keys(carbon2185.characterFlags));
