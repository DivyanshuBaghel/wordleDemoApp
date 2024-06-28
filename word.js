export default function getRandomWord() {
    const words = [
        "APPLE", "BREAD", "CHAIR", "DREAM", "EAGLE", "FLUTE", "GRACE", "HEART", "IDEAL", "JELLY",
        "KNIFE", "LEMON", "MANGO", "NIGHT", "OCEAN", "PIANO", "QUEST", "ROYAL", "SHEEP", "TIGER",
        "UNITE", "VOICE", "WHALE", "XENON", "YACHT", "ZEBRA", "AMAZE", "BLEND", "CROWN", "DANCE",
        "EAGER", "FLAME", "GLOBE", "HONEY", "INDEX", "JOLLY", "KOALA", "LAUGH", "MIRTH", "NOBLE",
        "OASIS", "PEACE", "QUIET", "ROVER", "STING", "TASTY", "UNITY", "VITAL", "WOVEN", "X-RAY",
        "YIELD", "ZESTY", "ALIEN", "BRAVO", "CHAMP", "DELTA", "ELITE", "FABLE", "GHOST", "HINGE",
        "IVORY", "JUMPY", "KUDOS", "LUNAR", "MOOSE", "NINJA", "ORBIT", "PLUSH", "QUAKE", "RIVAL",
        "SPICE", "THORN", "USHER", "VIVID", "WRIST", "XENON", "YOUNG", "ZONAL", "AMPLE", "BRICK",
        "CEDAR", "DRAFT", "EAGLE", "FROST", "GRAPE", "HURRY", "IGLOO", "JUICY", "KNEEL", "LEMON",
        "MOUNT", "NIECE", "OVEN", "PRISM", "QUILL", "RINSE", "SHINE", "TRUST", "URBAN", "VAPOR",
        "WAGON", "XENON", "YOUTH", "ZEBRA", "ANTIC", "BLUSH", "CRASH", "DRINK", "ENACT", "FLASH",
        "GLOOM", "HATCH", "IMAGE", "JOINT", "KNOCK", "LASER", "MATCH", "NEIGH", "OUNCE", "PLEAD",
        "QUILT", "RIDGE", "SLASH", "TRICK", "USAGE", "VIVID", "WHACK", "XENON", "YIELD", "ZEPHYR",
        "AFOOT", "BLOWN", "CREEP", "DWELL", "EXACT", "FROWN", "GULLY", "HORSE", "INLET", "JOLLY",
        "KIOSK", "LOCUS", "MEANT", "NERVE", "OPINE", "PLUMB", "QUARK", "ROUSE", "STONE", "TORCH",
        "UNITY", "VAGUE", "WREAK", "XENON", "YUMMY", "ZONAL", "ADORN", "BEAST", "CLING", "DROVE",
        "EPOCH", "FLOUR", "GRASP", "HYMEN", "INGOT", "JUMPY", "KRILL", "LIVID", "MIRTH", "NOVEL",
        "OBESE", "PINTO", "QUASH", "RIPPLE", "SALTY", "TRULY", "UNDER", "VICAR", "WOVEN", "XENON",
        "YACHT", "ZONAL", "ANNEX", "BLITZ", "COUCH", "DWELL", "ELOPE", "FORGE", "GORGE", "HOVEL",
        "IVORY", "JEWEL", "KNEED", "LINEN", "MOIST", "NUDGE", "OZONE", "PLUME", "QUAKE", "REBEL"
    ];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
