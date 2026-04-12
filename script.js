"use strict";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const QUESTIONS = [
  {
    id: 1, dim: "S",
    text: "When you arrive at a gathering, you usually\u2026",
    opts: [
      "Start moving around right away and naturally create momentum",
      "Find a few people, settle in, and warm up the room",
      "Stay near the people you already feel comfortable with",
      "Drift toward one person or moment that feels meaningful"
    ]
  },
  {
    id: 2, dim: "B",
    text: "The kind of first impression you tend to leave is\u2026",
    opts: [
      "Striking and impossible to miss",
      "Warm, confident, and naturally present",
      "Elegant, gentle, and composed",
      "Subtle, quiet, and slowly memorable"
    ]
  },
  {
    id: 3, dim: "C",
    text: "When choosing a restaurant, trip, or experience, you\u2019re usually drawn to\u2026",
    opts: [
      "The timeless option done exceptionally well",
      "Something familiar, but with a thoughtful twist",
      "Something a little unusual and interesting",
      "The most unexpected option in the room"
    ]
  },
  {
    id: 4, dim: "E",
    text: "If you could spend a quiet afternoon anywhere, you would choose\u2026",
    opts: [
      "A dark forest with moss, shade, and cool air",
      "A calm garden with tea, herbs, and stone paths",
      "A spring market full of green scents and fresh blossoms",
      "A rose and wildflower garden, fragrant and dreamlike"
    ]
  },
  {
    id: 5, dim: "P",
    text: "When you work on something important, your style is usually\u2026",
    opts: [
      "Methodical, organized, and carefully planned",
      "Steady and structured, with a little flexibility",
      "Intuitive and adaptive, depending on the moment",
      "Spontaneous, instinctive, and alive in motion"
    ]
  },
  {
    id: 6, dim: "S",
    text: "In friendship, the way you show care is more often\u2026",
    opts: [
      "Open and expressive \u2014 people rarely have to guess",
      "Warm and responsive once the connection starts",
      "Quiet but loyal \u2014 you show up more than you explain",
      "Deep, private, and hard to fully read"
    ]
  },
  {
    id: 7, dim: "B",
    text: "In a tense or high-energy moment, your presence tends to feel like\u2026",
    opts: [
      "A force that immediately changes the atmosphere",
      "A steady center that people naturally notice",
      "A soft detail that calms and refines the mood",
      "A quiet trace that lingers after everything else fades"
    ]
  },
  {
    id: 8, dim: "C",
    text: "Your taste in style, art, or beauty tends to lean toward\u2026",
    opts: [
      "Timeless, elegant, and enduring",
      "Refined, familiar, with a personal point of view",
      "Curious, fresh, and slightly unconventional",
      "Unusual, distinctive, and hard to categorize"
    ]
  },
  {
    id: 9, dim: "E",
    text: "Which kind of detail do you notice first in a beautiful place?",
    opts: [
      "Texture \u2014 bark, stone, wood, cool shadow",
      "Quiet life \u2014 leaves, herbs, branches, soft greenery",
      "Freshness \u2014 blossoms, light, petals, citrus scent",
      "Fragrance \u2014 roses, wildflowers, perfume in the air"
    ]
  },
  {
    id: 10, dim: "P",
    text: "When plans suddenly change, your first instinct is to\u2026",
    opts: [
      "Regain structure and reorganize immediately",
      "Adjust calmly and keep things under control",
      "Improvise and trust your judgment",
      "Go with the new energy and see where it leads"
    ]
  },
  {
    id: 11, dim: "S",
    text: "In a group, you most naturally become\u2026",
    opts: [
      "The one who lifts the energy and gets people moving",
      "The one who connects people and keeps the flow going",
      "The one who notices everything before speaking",
      "The one who brings depth when the moment calls for it"
    ]
  },
  {
    id: 12, dim: "P",
    text: "Your ideal life rhythm feels most like\u2026",
    opts: [
      "Intentional, planned, and quietly controlled",
      "Stable, balanced, and thoughtfully shaped",
      "Flexible, open, and responsive",
      "Evolving, impulsive, and full of momentum"
    ]
  },
  {
    id: 13, dim: "B",
    text: "Which kind of song are you most drawn to?",
    opts: [
      "Powerful and dramatic \u2014 Bond themes, \u201CBohemian Rhapsody,\u201D big orchestral ballads",
      "Warm, catchy, and full of life \u2014 ABBA, Motown, jazz-pop, feel-good classics",
      "Soft, beautiful, and detailed \u2014 acoustic songs, gentle piano, subtle indie ballads",
      "Haunting and quietly unforgettable \u2014 dream pop, moody soundtracks, songs that linger"
    ]
  },
  {
    id: 14, dim: "C",
    text: "What kind of movie or show do you usually love most?",
    opts: [
      "A timeless classic \u2014 Roman Holiday, Pride and Prejudice, The Godfather",
      "Something polished and charming \u2014 The Devil Wears Prada, Julie & Julia, Gilmore Girls",
      "Something fresh or slightly offbeat \u2014 Am\u00E9lie, Grand Budapest Hotel, stylish indie films",
      "Something strange and original \u2014 Black Mirror, Severance, surreal or unusual stories"
    ]
  },
  {
    id: 15, dim: "E",
    text: "Which kind of vacation sounds best to you?",
    opts: [
      "A forest or mountain retreat \u2014 redwoods, Alps, cool air, stone, silence",
      "A peaceful countryside stay \u2014 Tuscany, rural Japan, gardens, tea, village markets",
      "A bright town full of flowers and sun \u2014 South of France, coastal Spain, spring markets",
      "A romantic, dreamlike escape \u2014 Paris in spring, Lake Como, rose gardens, glowing evenings"
    ]
  }
];

// Scores: [S/I, B/D, C/A, E/F, P/W]
const REDS = [
  { name:"Cabernet Sauvignon", sig:"command",    tannin:"Firm",         scores:[0,2,2,1,2],   family:"R1",
    blurb:"Structured, powerful, and unmistakably composed, Cabernet Sauvignon is built on depth, control, and firm shape. As a person, you come across as capable, self-possessed, and hard to derail. You are not chaotic charm \u2014 you are the plan.",
    expr:"Bordeaux Left Bank, Napa Valley"},
  { name:"Merlot", sig:"ease",                   tannin:"Velvety",      scores:[1,0,1,0,0],   family:"R3",
    blurb:"Merlot is supple, rounded, and generous, with softness that does not mean weakness. You feel warm, approachable, and emotionally easy to be around, but there is real substance underneath. People relax around you fast, then realize you actually have range.",
    expr:"Pomerol, Saint-\u00C9milion"},
  { name:"Pinot Noir", sig:"nuance",             tannin:"Silky",        scores:[-1,-2,0,0,1], family:"R4",
    blurb:"Pinot Noir is delicate, layered, and full of nuance, showing detail rather than brute force. You are sensitive, perceptive, and quietly magnetic, the kind of person people keep thinking about later. You do not enter a room loudly; you linger.",
    expr:"Burgundy, Willamette Valley"},
  { name:"Syrah", sig:"shadow",                  tannin:"Firm",         scores:[-1,2,-1,2,1], family:"R2",
    blurb:"Syrah is dark, intense, and full of spice, smoke, and shadow. You carry force and mystery together, with a presence that feels strong even when you are silent. You are not subtle in essence \u2014 only in timing.",
    expr:"Northern Rh\u00F4ne, Barossa Shiraz"},
  { name:"Grenache", sig:"radiance",             tannin:"Low",          scores:[2,1,-2,-1,-2],family:"R3",
    blurb:"Grenache is juicy, warm, and open-hearted, with brightness, fruit, and an easy generosity. You feel energetic, spontaneous, and emotionally expansive, like someone who naturally turns the day into something more alive. You are very good at making \u201Cone drink\u201D become a whole evening.",
    expr:"Ch\u00E2teauneuf-du-Pape, Priorat"},
  { name:"Nebbiolo", sig:"severity",             tannin:"Gripping",     scores:[-2,1,2,2,2],  family:"R1",
    blurb:"Nebbiolo is high-toned, structured, and severe in a beautiful way, all tension, perfume, and grip. You come across as elegant, serious, and impossible to rush, with standards that can be felt before they are spoken. You are not \u201Chard to get\u201D \u2014 you are hard to reduce.",
    expr:"Barolo, Barbaresco"},
  { name:"Sangiovese", sig:"character",           tannin:"Firm",         scores:[0,0,1,2,1],   family:"R5",
    blurb:"Sangiovese is savory, vibrant, and structured, with acidity, character, and a little angular charm. You feel honest, animated, and grounded, someone with warmth but also backbone. You are likable, but never bland about it.",
    expr:"Chianti Classico, Brunello di Montalcino"},
  { name:"Tempranillo", sig:"composure",          tannin:"Fine-grained", scores:[-1,0,2,1,2],  family:"R1",
    blurb:"Tempranillo is composed, balanced, and quietly noble, with restraint, polish, and steady depth. You come across as dependable, mature, and self-controlled, with a coolness that never has to announce itself. You are the type people trust with the reservation, the budget, and the group decision.",
    expr:"Rioja, Ribera del Duero"},
  { name:"Malbec", sig:"impact",                 tannin:"Velvety",      scores:[1,2,0,1,0],   family:"R2",
    blurb:"Malbec is plush, dark, and bold, with richness that lands quickly and clearly. You feel confident, generous, and easy to read in the best way: people know your energy the moment you arrive. You are impact with good manners.",
    expr:"Cahors, Mendoza"},
  { name:"Cabernet Franc", sig:"intelligence",    tannin:"Fine-grained", scores:[-1,-1,0,1,1], family:"R5",
    blurb:"Cabernet Franc is lifted, herbal, intelligent, and a little more intricate than it first appears. You come across as observant, poised, and quietly original, with the kind of presence that rewards attention. You are rarely the loudest person there, but very often the most interesting.",
    expr:"Chinon, Bourgueil"},
  { name:"Gamay", sig:"spark",                   tannin:"Low",          scores:[2,-1,-2,-1,-2],family:"R3",
    blurb:"Gamay is bright, juicy, playful, and full of charm, with freshness that makes it instantly appealing. You feel sociable, funny, and naturally uplifting, the sort of person who brings energy without trying too hard. You are not superficial \u2014 just dangerously easy to enjoy.",
    expr:"Beaujolais, Cru Beaujolais"},
  { name:"Zinfandel", sig:"excess",              tannin:"Low",          scores:[2,2,-2,0,-2], family:"R5",
    blurb:"Zinfandel is exuberant, ripe, high-energy, and sometimes gloriously excessive. You come across as vivid, impulsive, and hard to tone down, with a personality that prefers full volume to careful moderation. You are not here for half-measures.",
    expr:"California Zinfandel, Primitivo di Manduria"},
  { name:"Barbera", sig:"momentum",              tannin:"Low",          scores:[1,0,-1,0,-2], family:"R3",
    blurb:"Barbera is lively, high-acid, and full of movement, with less tannic grip and more momentum. You feel energetic, open, and always slightly in motion, like someone with appetite for life and no desire to sit still too long. You are all \u201Clet\u2019s go\u201D and very little \u201Cmaybe later.\u201D",
    expr:"Barbera d\u2019Asti, Barbera d\u2019Alba"},
  { name:"Dolcetto", sig:"comfort",              tannin:"Silky",        scores:[0,-1,1,1,0],  family:"R5",
    blurb:"Dolcetto is soft, approachable, and gently earthy, with comfort and ease rather than sharp drama. You come across as grounded, kind, and quietly restorative, the kind of person whose presence lowers the stress level in the room. You are comfort with taste.",
    expr:"Dolcetto d\u2019Alba, Dogliani"},
  { name:"Cinsault", sig:"air",                  tannin:"Low",          scores:[1,-2,-1,-1,-2],family:"R4",
    blurb:"Cinsault is airy, light-footed, and graceful, with softness, perfume, and ease. You feel relaxed, attractive, and naturally unforced, like someone who looks better the less they overdo it. You are very good at seeming effortless, which is, of course, a skill.",
    expr:"Southern Rh\u00F4ne blends, old-vine South African Cinsault"},
  { name:"Mourv\u00E8dre", sig:"gravity",        tannin:"Firm",         scores:[-2,1,1,2,2],  family:"R2",
    blurb:"Mourv\u00E8dre is earthy, dense, and serious, with depth, warmth, and a darker kind of gravity. You come across as strong-willed, grounded, and not particularly interested in skimming the surface. You are the person in the group most likely to say, \u201CNo, let\u2019s talk about what\u2019s actually going on.\u201D",
    expr:"Bandol, Mourv\u00E8dre-led GSM blends"},
  { name:"Carmen\u00E8re", sig:"velvet",         tannin:"Velvety",      scores:[-1,0,-1,1,0], family:"R5",
    blurb:"Carmen\u00E8re is soft-textured, dark-fruited, and a little mysterious, often smooth at first and stranger underneath. You feel warm, intriguing, and slightly elusive, with a softness that hides more complexity than people expect. You are approachable, but never fully obvious.",
    expr:"Peumo, Colchagua Valley"},
  { name:"Aglianico", sig:"endurance",           tannin:"Gripping",     scores:[-2,2,1,2,2],  family:"R1",
    blurb:"Aglianico is powerful, structured, and built for time, with serious tannin and depth. You come across as inward, intense, and enduring \u2014 not instantly easy, but extremely real. You are not everyone\u2019s casual favorite; you are someone\u2019s long-term obsession.",
    expr:"Taurasi, Aglianico del Vulture"},
  { name:"Touriga Nacional", sig:"drama",         tannin:"Firm",         scores:[-1,2,0,-2,1], family:"R2",
    blurb:"Touriga Nacional is rich, perfumed, tannic, and dramatic, combining force with floral lift. You feel proud, intense, and quietly theatrical, with a presence that is both powerful and polished. You do not merely enter the scene; you arrive.",
    expr:"Douro reds, Vintage Port"},
  { name:"Nero d\u2019Avola", sig:"sun",         tannin:"Firm",         scores:[1,2,0,1,0],   family:"R3",
    blurb:"Nero d\u2019Avola is dark, bold, and sun-warmed, with generous fruit and more structure than its charm first suggests. You come across as open, warm, and confident, but with real weight underneath. You are the fun one with unexpectedly strong opinions.",
    expr:"Sicilia, Noto / Eloro"},
  { name:"Blaufr\u00E4nkisch", sig:"coolness",   tannin:"Fine-grained", scores:[-1,-1,0,1,1], family:"R4",
    blurb:"Blaufr\u00E4nkisch is cool-toned, spicy, and finely structured, with freshness and intelligence more than plushness. You feel clear-headed, composed, and a little intimidating to people who are not paying attention. You are not cold \u2014 just exact.",
    expr:"Burgenland, Leithaberg"},
  { name:"Xinomavro", sig:"austerity",           tannin:"Gripping",     scores:[-2,0,2,2,2],  family:"R1",
    blurb:"Xinomavro is austere, high-acid, tannic, and cerebral, with a severe kind of beauty. You come across as restrained, self-possessed, and highly structured, someone whose feelings are real but not casually displayed. You are elegance with a thesis statement.",
    expr:"Naoussa, Amyndeon"},
  { name:"Corvina", sig:"restraint",             tannin:"Silky",        scores:[-1,-2,1,0,0], family:"R4",
    blurb:"Corvina is lifted, subtle, and quietly stylish, with freshness and restraint rather than brute force. You feel graceful, self-controlled, and hard to pin down too quickly. You are the art of not giving everything away.",
    expr:"Valpolicella Classico, Amarone della Valpolicella"},
  { name:"Menc\u00EDa", sig:"freedom",           tannin:"Silky",        scores:[-1,-1,-2,-1,-1],family:"R4",
    blurb:"Menc\u00EDa is fresh, floral, lightly wild, and full of energy, sitting somewhere between elegance and freedom. You come across as thoughtful, sensitive, and just untamed enough to stay exciting. You are the person most likely to have both good taste and slightly dangerous instincts.",
    expr:"Bierzo, Ribeira Sacra"},
  { name:"Pinotage", sig:"rebellion",            tannin:"Firm",         scores:[0,2,-2,2,-1], family:"R2",
    blurb:"Pinotage is smoky, forceful, distinctive, and unapologetically itself. You feel bold, unconventional, and impossible to mistake for anyone else. You are not trying to please the whole room \u2014 and weirdly, that helps.",
    expr:"Stellenbosch, Swartland"}
];

const WHITES = [
  { name:"Chardonnay", sig:"polish",             acidity:"Fresh",    scores:[0,0,2,0,2],    family:"W1",
    blurb:"Chardonnay is polished, adaptable, and structurally composed, able to feel classic in many different forms. You come across as capable, versatile, and naturally put together, someone who fits the setting without disappearing into it. You always somehow look like you knew the dress code.",
    expr:"Burgundy, California Chardonnay"},
  { name:"Sauvignon Blanc", sig:"clarity",        acidity:"Bright",   scores:[1,-1,0,-1,1],  family:"W2",
    blurb:"Sauvignon Blanc is sharp, bright, and vivid, with acidity and clarity that cut straight through. You feel direct, fresh, and alert, the kind of person who clears the fog in a conversation. You are crisp energy with opinions.",
    expr:"Sancerre, Marlborough"},
  { name:"Riesling", sig:"precision",             acidity:"Racy",     scores:[-1,-2,1,-2,2], family:"W3",
    blurb:"Riesling is precise, high-acid, and delicately built, with beauty that rests on tension and detail. You come across as fine-boned, intelligent, and far more exact than people assume at first glance. You look soft until someone realizes how sharp you actually are.",
    expr:"Mosel, Rheingau"},
  { name:"Chenin Blanc", sig:"range",             acidity:"Bright",   scores:[-1,-1,0,0,1],  family:"W5",
    blurb:"Chenin Blanc is versatile, high-acid, and full of range, able to be bright, textured, serious, or playful without losing itself. You feel intelligent, layered, and hard to simplify, someone with more than one register and no need to pick only one. You contain multitudes and probably know it.",
    expr:"Vouvray, Savennières"},
  { name:"Gew\u00FCrztraminer", sig:"identity",   acidity:"Soft",     scores:[0,0,-2,-2,-1], family:"W4",
    blurb:"Gew\u00FCrztraminer is aromatic, lush, and unmistakable, all perfume, spice, and identity. You come across as expressive, original, and very much your own thing. People do not usually feel neutral about you, which is honestly fine.",
    expr:"Alsace, Alto Adige"},
  { name:"Pinot Grigio", sig:"cleanliness",       acidity:"Fresh",    scores:[1,-2,0,-1,1],  family:"W2",
    blurb:"Pinot Grigio is clean, crisp, and refreshing, with ease and simplicity as part of its appeal. You feel low-drama, bright, and easy to be around, without needing to perform complexity all the time. You are the relief people did not know they needed.",
    expr:"Alto Adige, Friuli"},
  { name:"Viognier", sig:"lushness",              acidity:"Soft",     scores:[0,1,-1,-2,-1], family:"W4",
    blurb:"Viognier is rich, floral, and full-bodied, with softness, fragrance, and a romantic kind of texture. You come across as expressive, warm, and a little luxurious, someone who naturally takes up emotional space. You are not too much \u2014 other people are just under-seasoned.",
    expr:"Condrieu, California Viognier"},
  { name:"Albari\u00F1o", sig:"breeze",           acidity:"Bright",   scores:[2,-1,-1,-1,1], family:"W2",
    blurb:"Albari\u00F1o is bright, saline, and lively, with freshness, charm, and an easy coastal lift. You feel sociable, open, and easy to like, like someone who improves the atmosphere simply by showing up. You are fresh-air energy in human form.",
    expr:"R\u00EDas Baixas, Vinho Verde Alvarinho"},
  { name:"Assyrtiko", sig:"steel",                acidity:"Electric", scores:[-2,0,1,1,2],   family:"W3",
    blurb:"Assyrtiko is electric, mineral, and forcefully structured, with intense acidity and real backbone. You come across as focused, resilient, and impossible to bend too easily. You are elegance under pressure.",
    expr:"Santorini, mainland Greek Assyrtiko"},
  { name:"Gr\u00FCner Veltliner", sig:"wit",      acidity:"Bright",   scores:[0,-1,-1,1,1],  family:"W3",
    blurb:"Gr\u00FCner Veltliner is crisp, herbal, peppery, and smart, with freshness plus a subtle savory edge. You feel clever, composed, and a little sharper than people expect from your calm exterior. You are the person who says the funniest thing in the room without changing expression.",
    expr:"Wachau, Kamptal"},
  { name:"Muscat", sig:"charm",                   acidity:"Fresh",    scores:[2,-1,-2,-2,-1],family:"W4",
    blurb:"Muscat is fragrant, charming, and openly expressive, with sweetness of personality even when dry in style. You come across as bright, welcoming, and impossible to mistake for restrained minimalism. You know you have charm and, frankly, you use it.",
    expr:"Moscato d\u2019Asti, Muscat d\u2019Alsace"},
  { name:"Torront\u00E9s", sig:"color",           acidity:"Fresh",    scores:[2,0,-2,-2,-1], family:"W4",
    blurb:"Torront\u00E9s is aromatic, playful, and full of color, with vivid personality and floral lift. You feel lively, expressive, and just theatrical enough to stay fun. You are what happens when brightness decides to become a main character.",
    expr:"Salta, La Rioja (Argentina)"},
  { name:"Vermentino", sig:"ease",                acidity:"Bright",   scores:[1,-1,-1,1,-1], family:"W2",
    blurb:"Vermentino is sunny, herbal, and saline, with Mediterranean ease and brightness. You come across as relaxed, natural, and very easy to imagine on a beautiful trip somewhere. You are a good decision in vacation form.",
    expr:"Sardinia, Liguria"},
  { name:"Arneis", sig:"elusiveness",             acidity:"Fresh",    scores:[-1,-1,-1,-1,0],family:"W5",
    blurb:"Arneis is soft, elegant, and elusive, with beauty that feels subtle rather than obvious. You come across as refined, slightly distant, and difficult to define too quickly. You are the kind of person people describe as \u201Cinteresting\u201D before they can fully explain why.",
    expr:"Roero Arneis, Piedmont Arneis"},
  { name:"Falanghina", sig:"cheer",               acidity:"Bright",   scores:[1,0,-1,-1,-1], family:"W2",
    blurb:"Falanghina is bright, friendly, and energetic, with freshness and charm that feel effortless. You come across as cheerful, easy to talk to, and naturally buoyant. You are the emotional equivalent of opening the windows.",
    expr:"Falanghina del Sannio, Campania"},
  { name:"Semillon", sig:"patience",              acidity:"Soft",     scores:[-2,0,1,0,2],   family:"W1",
    blurb:"Semillon is calm, broad, and quietly deepening, often less flashy than it is enduring. You come across as steady, patient, and more impressive over time than on first glance. You are not an instant effect; you are a long game.",
    expr:"Hunter Valley, Bordeaux Blanc / Sauternes"},
  { name:"Fiano", sig:"grounding",                acidity:"Fresh",    scores:[-2,0,1,1,1],   family:"W1",
    blurb:"Fiano is grounded, textured, and thoughtful, with warmth, substance, and inward calm. You come across as reflective, substantial, and quietly self-assured. You are depth without drama.",
    expr:"Fiano di Avellino, Campania Fiano"},
  { name:"Garganega", sig:"glow",                 acidity:"Fresh",    scores:[-1,-1,1,-1,1], family:"W5",
    blurb:"Garganega is graceful, subtle, and softly luminous, with gentle fruit and understated beauty. You come across as poised, elegant, and easy to underestimate until people spend more time with you. You glow instead of sparkle.",
    expr:"Soave Classico, Recioto di Soave"},
  { name:"Godello", sig:"restraint",              acidity:"Fresh",    scores:[-2,0,0,1,1],   family:"W3",
    blurb:"Godello is restrained, mineral, and quietly structured, with calm strength rather than flashy intensity. You come across as steady, self-contained, and stronger than your surface suggests. You are one of those people whose silence is not empty at all.",
    expr:"Valdeorras, Bierzo"},
  { name:"Verdicchio", sig:"discipline",           acidity:"Bright",   scores:[0,-1,1,0,2],   family:"W3",
    blurb:"Verdicchio is bright, disciplined, and beautifully clean, with acidity and order that feel refreshing rather than severe. You come across as organized, clear, and satisfying to be around. You are the personality version of \u201Ceverything is handled.\u201D",
    expr:"Castelli di Jesi, Matelica"},
  { name:"Marsanne", sig:"weight",                acidity:"Soft",     scores:[-2,1,1,0,1],   family:"W5",
    blurb:"Marsanne is weighty, calm, and broad-shouldered, with lower acidity and a grounded, substantial feel. You come across as solid, contained, and quietly powerful. You do not sparkle; you hold.",
    expr:"Hermitage Blanc, Saint-Joseph Blanc"},
  { name:"Roussanne", sig:"softness",             acidity:"Soft",     scores:[-1,-1,0,-1,0], family:"W4",
    blurb:"Roussanne is fragrant, nuanced, and softly textured, with beauty that unfolds slowly. You come across as gentle, thoughtful, and emotionally shaded in a very appealing way. You are subtle, but never plain.",
    expr:"Hermitage Blanc, Ch\u00E2teauneuf-du-Pape Blanc"},
  { name:"Ribolla Gialla", sig:"curiosity",        acidity:"Bright",   scores:[-1,-1,-2,0,1], family:"W5",
    blurb:"Ribolla Gialla is bright, textural, and a little unconventional, with curiosity built into its personality. You come across as thoughtful, slightly off-center, and more interested in what is interesting than in what is obvious. You definitely notice details other people skip.",
    expr:"Collio, Brda"},
  { name:"Xarel-lo", sig:"backbone",              acidity:"Bright",   scores:[-2,0,0,1,2],   family:"W1",
    blurb:"Xarel-lo is structured, dry, and quietly powerful, with backbone rather than overt charm. You come across as disciplined, reliable, and stronger than your surface suggests. You are the reason the whole thing works.",
    expr:"Pened\u00E8s, Cava"},
  { name:"Savagnin", sig:"eccentricity",           acidity:"Racy",     scores:[-2,0,0,1,2],   family:"W1",
    blurb:"Savagnin is high-acid, eccentric, and intensely individual, with real structure and unmistakable identity. You come across as intense, self-contained, and completely uninterested in blending in. You are not niche by accident.",
    expr:"C\u00F4tes du Jura Savagnin, Vin Jaune"}
];

const PAIRING_BANK = {
  "R1+W1":"This pairing feels disciplined, composed, and highly self-contained. Your red side brings structure, standards, and seriousness, while your white side adds polish, restraint, and inner control. Together, this creates a personality that feels steady, capable, and built around substance rather than noise.",
  "R1+W2":"This pairing balances authority with freshness. Your red side gives you backbone, gravity, and high standards, while your white side keeps you open, clear, and easier to approach. Together, you feel strong without becoming severe.",
  "R1+W3":"This is a high-definition pairing: structured, exact, and hard to blur. Your red side brings seriousness and form, while your white side adds precision, tension, and sharp inner clarity. Together, you come across as refined, intelligent, and intensely self-possessed.",
  "R1+W4":"This pairing mixes restraint with visible personality. Your red side brings depth, control, and authority, while your white side adds expressiveness, fragrance, and a more outward emotional layer. Together, you feel serious at the core, but never flat or inaccessible.",
  "R1+W5":"This pairing feels thoughtful, nuanced, and quietly sophisticated. Your red side gives you structure and gravity, while your white side brings subtle individuality and inner texture. Together, you feel like someone with both standards and depth of perception.",
  "R2+W1":"This pairing feels weighty, controlled, and quietly formidable. Your red side brings force, darkness, and emotional gravity, while your white side gives that intensity shape and discipline. Together, you feel powerful, serious, and difficult to shake.",
  "R2+W2":"This pairing adds lift to intensity. Your red side is deep, forceful, and emotionally charged, while your white side keeps you vivid, socially alive, and easier to connect with. Together, you feel strong, alive, and magnetically present.",
  "R2+W3":"This is one of the sharpest pairings: dark force with bright tension. Your red side brings depth and gravity, while your white side adds precision, mineral energy, and nerve. Together, you feel intense, focused, and impossible to reduce to something simple.",
  "R2+W4":"This pairing feels dramatic, expressive, and highly memorable. Your red side brings shadow, heat, and force, while your white side adds fragrance, softness, or emotional visibility. Together, you feel rich, magnetic, and slightly larger than life.",
  "R2+W5":"This pairing feels deep, unusual, and texturally complex. Your red side carries seriousness and emotional force, while your white side adds subtle individuality and a less obvious inner layer. Together, you come across as mysterious, thoughtful, and hard to flatten into one note.",
  "R3+W1":"This pairing balances warmth with shape. Your red side brings openness, sociability, and generosity, while your white side adds composure, structure, and quiet control. Together, you feel welcoming, grounded, and more polished than first impressions suggest.",
  "R3+W2":"This is one of the brightest, easiest pairings in the system. Your red side brings warmth, momentum, and emotional generosity, while your white side adds freshness, openness, and natural charm. Together, you feel lively, inviting, and easy to enjoy.",
  "R3+W3":"This pairing balances brightness with definition. Your red side gives you warmth and movement, while your white side adds precision, alertness, and a sharper edge. Together, you feel generous but not vague \u2014 open-hearted, but clear.",
  "R3+W4":"This pairing feels expressive, social, and full of color. Your red side brings emotional warmth and generosity, while your white side adds fragrance, personality, and visible charm. Together, you come across as radiant, engaging, and naturally memorable.",
  "R3+W5":"This pairing feels warm on the outside, layered underneath. Your red side brings ease, generosity, and movement, while your white side adds curiosity, individuality, and hidden depth. Together, you feel approachable at first, then more complex the longer someone stays.",
  "R4+W1":"This pairing feels graceful, composed, and finely structured. Your red side brings subtlety, lift, and emotional nuance, while your white side adds polish and inner control. Together, you feel refined, self-aware, and beautifully held together.",
  "R4+W2":"This pairing is light, elegant, and easy to connect with. Your red side brings quiet style and nuance, while your white side adds openness, brightness, and social ease. Together, you feel gentle, fresh, and naturally appealing.",
  "R4+W3":"This pairing feels delicate but exact. Your red side brings subtle emotional texture, while your white side adds clarity, tension, and precision. Together, you feel intelligent, fine-boned, and quietly unforgettable.",
  "R4+W4":"This pairing leans lyrical, expressive, and softly atmospheric. Your red side brings lift and understatement, while your white side adds fragrance, feeling, and a more visible emotional tone. Together, you feel graceful, dreamy, and memorable in a non-obvious way.",
  "R4+W5":"This pairing feels subtle, curious, and difficult to reduce too quickly. Your red side brings nuance and quiet style, while your white side adds texture, inwardness, and individuality. Together, you feel thoughtful, elegant, and slightly elusive.",
  "R5+W1":"This pairing balances personality with control. Your red side brings character, distinctiveness, or unpredictability, while your white side adds shape, discipline, and internal order. Together, you feel original, but never messy.",
  "R5+W2":"This pairing feels vivid, expressive, and socially alive. Your red side brings individuality and charm, while your white side adds brightness, openness, and a lighter touch. Together, you feel engaging, distinctive, and very easy to notice.",
  "R5+W3":"This pairing sharpens character into precision. Your red side brings originality and strong personality, while your white side adds focus, tension, and definition. Together, you feel interesting not just because you are different, but because you are clear.",
  "R5+W4":"This is one of the most expressive pairings: personality meets perfume. Your red side brings character and idiosyncrasy, while your white side adds fragrance, drama, or emotional visibility. Together, you feel vivid, memorable, and impossible to make generic.",
  "R5+W5":"This pairing feels textured, distinctive, and quietly unconventional. Your red side brings individuality and character, while your white side adds subtle strangeness, curiosity, or inward complexity. Together, you feel like someone people keep thinking about after the conversation ends."
};

/* ═══════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════ */
let currentQ = 0;
const answers = new Array(15).fill(null);

/* ═══════════════════════════════════════════
   DOM
   ═══════════════════════════════════════════ */
const $  = (s) => document.querySelector(s);
const landing     = $("#landing");
const quiz        = $("#quiz");
const calculating = $("#calculating");
const results     = $("#results");

function showScreen(el) {
  [landing, quiz, calculating, results].forEach(s => s.classList.remove("active"));
  window.scrollTo({ top: 0, behavior: "instant" });
  el.classList.add("active");
}

/* ═══════════════════════════════════════════
   QUIZ FLOW
   ═══════════════════════════════════════════ */
function renderQuestion() {
  const q = QUESTIONS[currentQ];
  const area = $("#question-area");
  area.style.animation = "none";
  void area.offsetHeight;
  area.style.animation = "fadeSlideIn .35s ease";

  $("#question-number").textContent = `Question ${currentQ + 1}`;
  $("#question-text").textContent = q.text;

  const optBox = $("#options");
  optBox.innerHTML = "";
  const letters = ["A", "B", "C", "D"];
  q.opts.forEach((txt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (answers[currentQ] === i ? " selected" : "");
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${txt}</span>`;
    btn.addEventListener("click", () => selectOption(i));
    optBox.appendChild(btn);
  });

  $("#progress-bar").style.width = `${((currentQ + 1) / 15) * 100}%`;
  $("#progress-text").textContent = `${currentQ + 1} / 15`;
  $("#prev-btn").disabled = currentQ === 0;
  updateNextBtn();
}

function selectOption(idx) {
  answers[currentQ] = idx;
  document.querySelectorAll(".option-btn").forEach((b, i) => {
    b.classList.toggle("selected", i === idx);
  });
  updateNextBtn();
}

function updateNextBtn() {
  const btn = $("#next-btn");
  if (currentQ === 14) {
    btn.textContent = "See My Results";
  } else {
    btn.textContent = "Next";
  }
  btn.disabled = answers[currentQ] === null;
}

$("#start-btn").addEventListener("click", () => {
  showScreen(quiz);
  renderQuestion();
});

$("#prev-btn").addEventListener("click", () => {
  if (currentQ > 0) { currentQ--; renderQuestion(); }
});

$("#next-btn").addEventListener("click", () => {
  if (answers[currentQ] === null) return;
  if (currentQ < 14) {
    currentQ++;
    renderQuestion();
  } else {
    showCalculating();
  }
});

/* ═══════════════════════════════════════════
   CALCULATING ANIMATION
   ═══════════════════════════════════════════ */
function showCalculating() {
  showScreen(calculating);
  const fill = $("#wine-fill");
  fill.style.height = "0%";
  requestAnimationFrame(() => { fill.style.height = "85%"; });
  setTimeout(() => computeAndShowResults(), 2400);
}

/* ═══════════════════════════════════════════
   SCORING
   ═══════════════════════════════════════════ */
const SCORE_MAP = [2, 1, -1, -2];

const DIM_QUESTIONS = {
  S: [0, 5, 10],
  B: [1, 6, 12],
  C: [2, 7, 13],
  E: [3, 8, 14],
  P: [4, 9, 11]
};

function computeProfile() {
  const profile = {};
  for (const [dim, qs] of Object.entries(DIM_QUESTIONS)) {
    profile[dim] = qs.reduce((sum, qi) => sum + SCORE_MAP[answers[qi]], 0);
  }
  return profile;
}

function manhattan(profile, grape) {
  const dims = ["S", "B", "C", "E", "P"];
  return dims.reduce((d, dim, i) => d + Math.abs(profile[dim] - grape.scores[i]), 0);
}

function findClosest(profile, pool) {
  let best = null;
  let bestDist = Infinity;
  for (const g of pool) {
    const d = manhattan(profile, g);
    if (d < bestDist) { bestDist = d; best = g; }
  }
  return best;
}

/* ═══════════════════════════════════════════
   GRAPE CHARACTER ILLUSTRATIONS
   ═══════════════════════════════════════════ */

const WIKI_TITLES = {
  "Cabernet Sauvignon":  "Cabernet_Sauvignon",
  "Pinot Noir":          "Pinot_noir",
  "Cabernet Franc":      "Cabernet_Franc",
  "Nero d\u2019Avola":   "Nero_d%27Avola",
  "Touriga Nacional":    "Touriga_Nacional",
  "Blaufr\u00E4nkisch":  "Blaufr%C3%A4nkisch",
  "Ribolla Gialla":      "Ribolla_Gialla",
  "Pinot Grigio":        "Pinot_gris",
  "Sauvignon Blanc":     "Sauvignon_blanc",
  "Chenin Blanc":        "Chenin_blanc",
  "Gew\u00FCrztraminer": "Gew%C3%BCrztraminer",
  "Gr\u00FCner Veltliner":"Gr%C3%BCner_Veltliner",
  "Albari\u00F1o":       "Albari%C3%B1o",
  "Torront\u00E9s":      "Torront%C3%A9s",
  "Menc\u00EDa":         "Menc%C3%ADa",
  "Mourv\u00E8dre":      "Mourv%C3%A8dre",
  "Carmen\u00E8re":      "Carm%C3%A9n%C3%A8re",
  "Xarel-lo":            "Xarel%C2%B7lo",
  "Muscat":              "Muscat_(grape)",
  "Corvina":             "Corvina_(grape)"
};

function wikiUrl(grapeName) {
  const title = WIKI_TITLES[grapeName] || grapeName.replace(/ /g, "_");
  return `https://en.wikipedia.org/wiki/${title}`;
}

const GRAPE_IMAGES = {
  "Cabernet Sauvignon":    "images/cabernet-sauvignon.png",
  "Merlot":                "images/merlot.png",
  "Pinot Noir":            "images/pinot-noir.png",
  "Syrah":                 "images/syrah.png",
  "Grenache":              "images/grenache.png",
  "Nebbiolo":              "images/nebbiolo.png",
  "Sangiovese":            "images/sangiovese.png",
  "Tempranillo":           "images/tempranillo.png",
  "Malbec":                "images/malbec.png",
  "Cabernet Franc":        "images/cabernet-franc.png",
  "Gamay":                 "images/gamay.png",
  "Zinfandel":             "images/zinfandel.png",
  "Barbera":               "images/barbera.png",
  "Dolcetto":              "images/dolcetto.png",
  "Cinsault":              "images/cinsault.png",
  "Mourv\u00E8dre":        "images/mourvedre.png",
  "Carmen\u00E8re":        "images/carmenere.png",
  "Aglianico":             "images/aglianico.png",
  "Touriga Nacional":      "images/touriga-nacional.png",
  "Nero d\u2019Avola":     "images/nero-davola.png",
  "Blaufr\u00E4nkisch":    "images/blaufrankisch.png",
  "Xinomavro":             "images/xinomavro.png",
  "Corvina":               "images/corvina.png",
  "Menc\u00EDa":           "images/mencia.png",
  "Pinotage":              "images/pinotage.png",
  "Chardonnay":            "images/chardonnay.png",
  "Sauvignon Blanc":       "images/sauvignon-blanc.png",
  "Riesling":              "images/riesling.png",
  "Chenin Blanc":          "images/chenin-blanc.png",
  "Gew\u00FCrztraminer":   "images/gewurztraminer.png",
  "Pinot Grigio":          "images/pinot-grigio.png",
  "Viognier":              "images/viognier.png",
  "Albari\u00F1o":         "images/albarino.png",
  "Assyrtiko":             "images/assyrtiko.png",
  "Gr\u00FCner Veltliner": "images/gruner-veltliner.png",
  "Muscat":                "images/muscat.png",
  "Torront\u00E9s":        "images/torrontes.png",
  "Vermentino":            "images/vermentino.png",
  "Arneis":                "images/arneis.png",
  "Falanghina":            "images/falanghina.png",
  "Semillon":              "images/semillon.png",
  "Fiano":                 "images/fiano.png",
  "Garganega":             "images/garganega.png",
  "Godello":               "images/godello.png",
  "Verdicchio":            "images/verdicchio.png",
  "Marsanne":              "images/marsanne.png",
  "Roussanne":             "images/roussanne.png",
  "Ribolla Gialla":        "images/ribolla-gialla.png",
  "Xarel-lo":              "images/xarel-lo.png",
  "Savagnin":              "images/savagnin.png"
};

function showGrapeImage(grapeName, wrapId) {
  const wrap = $(wrapId);
  const src = GRAPE_IMAGES[grapeName];

  if (!src) {
    wrap.classList.add("no-image");
    wrap.innerHTML = "";
    return;
  }

  const img = document.createElement("img");
  img.alt = `${grapeName} character`;
  img.src = src;
  wrap.innerHTML = "";
  wrap.appendChild(img);
}

/* ═══════════════════════════════════════════
   RESULTS
   ═══════════════════════════════════════════ */
function computeAndShowResults() {
  const profile = computeProfile();
  const red = findClosest(profile, REDS);
  const white = findClosest(profile, WHITES);

  $("#red-name").textContent = red.name;
  $("#red-sig").textContent = red.sig;
  $("#red-tannin").textContent = `Tannin: ${red.tannin}`;
  $("#red-blurb").textContent = red.blurb;
  $("#red-expressions").textContent = `Classic expressions: ${red.expr}`;
  $("#red-wiki").href = wikiUrl(red.name);

  $("#white-name").textContent = white.name;
  $("#white-sig").textContent = white.sig;
  $("#white-acidity").textContent = `Acidity: ${white.acidity}`;
  $("#white-blurb").textContent = white.blurb;
  $("#white-expressions").textContent = `Classic expressions: ${white.expr}`;
  $("#white-wiki").href = wikiUrl(white.name);

  const pairingKey = `${red.family}+${white.family}`;
  $("#pairing-text").textContent = PAIRING_BANK[pairingKey] || "";
  $("#pairing-note").textContent = `This is a pairing of ${red.sig} and ${white.sig}.`;

  resetImageWrap("#red-image-wrap");
  resetImageWrap("#white-image-wrap");
  showGrapeImage(red.name, "#red-image-wrap");
  showGrapeImage(white.name, "#white-image-wrap");

  renderProfile(profile);
  showScreen(results);
}

function resetImageWrap(selector) {
  const wrap = $(selector);
  wrap.classList.remove("no-image");
  wrap.innerHTML = "";
}

function renderProfile(profile) {
  const dims = [
    { key:"S", left:"Social",      right:"Introspective" },
    { key:"B", left:"Bold",        right:"Delicate" },
    { key:"C", left:"Classic",     right:"Adventurous" },
    { key:"E", left:"Earthy",      right:"Floral" },
    { key:"P", left:"Structured",  right:"Free-Spirited" }
  ];

  const box = $("#profile-bars");
  box.innerHTML = "";

  dims.forEach(d => {
    const val = profile[d.key];
    const pct = ((val + 6) / 12) * 100;

    const row = document.createElement("div");
    row.className = "profile-row";

    const isLeft = val > 0;
    const leftClass = isLeft ? "profile-label-left active-label" : "profile-label-left";
    const rightClass = !isLeft ? "profile-label-right active-label" : "profile-label-right";

    row.innerHTML = `
      <span class="profile-label ${leftClass}">${d.left}</span>
      <div class="profile-track">
        <div class="profile-track-fill" style="width:${pct}%"></div>
        <div class="profile-dot" style="left:${pct}%"></div>
      </div>
      <span class="profile-label ${rightClass}">${d.right}</span>
    `;
    box.appendChild(row);
  });
}

/* ═══════════════════════════════════════════
   SHARE & RETAKE
   ═══════════════════════════════════════════ */
$("#retake-btn").addEventListener("click", () => {
  currentQ = 0;
  answers.fill(null);
  $("#share-confirm").textContent = "";
  showScreen(landing);
});

$("#share-btn").addEventListener("click", () => {
  const red = $("#red-name").textContent;
  const white = $("#white-name").textContent;
  const text = `I took the Grape Personality Quiz!\nRed match: ${red}\nWhite match: ${white}\nTry it: ${window.location.href}`;
  navigator.clipboard.writeText(text).then(() => {
    $("#share-confirm").textContent = "Copied to clipboard!";
    setTimeout(() => { $("#share-confirm").textContent = ""; }, 3000);
  }).catch(() => {
    $("#share-confirm").textContent = "Could not copy \u2014 try manually.";
  });
});
