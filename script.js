"use strict";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const QUESTIONS = [
  {
    id: 1, dim: "B",
    text: "The kind of first impression you tend to leave is\u2026",
    opts: [
      "Striking, vivid, and impossible to miss",
      "Warm, confident, and naturally noticeable",
      "Gentle, elegant, and softly composed",
      "Subtle, quiet, and slowly memorable"
    ]
  },
  {
    id: 2, dim: "C",
    text: "When choosing a restaurant for an anniversary dinner, you\u2019re most drawn to\u2026",
    opts: [
      "A timeless classic you already trust, where everything feels beautifully done",
      "A familiar favorite with a fresh menu or thoughtful new twist",
      "A style of food you already love, but in a place that feels more unexpected",
      "A brand-new restaurant that feels original, exciting, and impossible to forget"
    ]
  },
  {
    id: 3, dim: "E",
    text: "If you could spend a quiet afternoon anywhere, you would choose\u2026",
    opts: [
      "A cool forest of moss, bark, and shadow",
      "A peaceful garden with herbs, tea, and stone paths",
      "A spring market full of green scents and fresh blossoms",
      "A rose and wildflower garden, soft, fragrant, and dreamlike"
    ]
  },
  {
    id: 4, dim: "P",
    text: "When you\u2019re working on something important, your rhythm is usually\u2026",
    opts: [
      "Deliberate, organized, and carefully shaped",
      "Steady and reliable, with room to breathe",
      "Intuitive and flexible, changing with the moment",
      "Instinctive, fluid, and fully alive in motion"
    ]
  },
  {
    id: 5, dim: "S",
    text: "When meeting someone new, your instinct is to\u2026",
    opts: [
      "Talk freely, joke a little, and see where the connection goes",
      "Ask thoughtful questions and build warmth naturally",
      "Wait for the right opening before showing much of yourself",
      "Observe quietly first, and only step in when the connection feels real"
    ]
  },
  {
    id: 6, dim: "C",
    text: "What kind of film or show are you most likely to love?",
    opts: [
      "A true classic that still feels powerful \u2014 Roman Holiday, Pride and Prejudice, The Godfather",
      "Something polished, charming, and beautifully made \u2014 The Devil Wears Prada, Julie & Julia, Gilmore Girls",
      "Something fresh, stylish, or a little offbeat \u2014 Am\u00E9lie, The Grand Budapest Hotel, elegant indie films",
      "Something strange, original, or impossible to categorize \u2014 Black Mirror, Severance, surreal or unusual stories"
    ]
  },
  {
    id: 7, dim: "B",
    text: "In a tense or high-energy moment, your presence feels more like\u2026",
    opts: [
      "A force that changes the atmosphere immediately",
      "A steady center people naturally turn toward",
      "A soft detail that calms and refines the mood",
      "A quiet trace that lingers after everything else fades"
    ]
  },
  {
    id: 8, dim: "E",
    text: "Which kind of escape sounds most like you?",
    opts: [
      "A mountain or forest retreat, quiet and grounding",
      "A countryside stay with gardens, tea, and village paths",
      "A bright town full of flowers, markets, and sea air",
      "A romantic place that feels soft, luminous, and slightly unreal"
    ]
  },
  {
    id: 9, dim: "S",
    text: "In a group, your presence is most often felt as\u2026",
    opts: [
      "The spark that lifts the mood and gets things moving",
      "The warmth that helps people relax and connect",
      "The quiet awareness that notices more than it says",
      "The depth that makes one person feel truly seen"
    ]
  },
  {
    id: 10, dim: "C",
    text: "Your taste in beauty tends to lean toward\u2026",
    opts: [
      "Elegance that feels timeless and proven",
      "Refinement with warmth and individuality",
      "Freshness, curiosity, and a slight sense of surprise",
      "Beauty that feels unusual, distinctive, and entirely its own"
    ]
  },
  {
    id: 11, dim: "E",
    text: "In a beautiful place, what are you most likely to notice first?",
    opts: [
      "Texture \u2014 wood, stone, earth, cool shade",
      "Quiet life \u2014 leaves, herbs, branches, and living green things",
      "Freshness \u2014 light, petals, citrus, and morning air",
      "Fragrance \u2014 roses, flowers, perfume, and atmosphere"
    ]
  },
  {
    id: 12, dim: "P",
    text: "When plans suddenly change, your first response is to\u2026",
    opts: [
      "Restore structure and make a new plan right away",
      "Adjust calmly and keep the situation balanced",
      "Improvise as needed and trust your instincts",
      "Follow the new energy and see where it leads"
    ]
  },
  {
    id: 13, dim: "B",
    text: "Which kind of song are you most drawn to?",
    opts: [
      "Powerful and dramatic \u2014 Bond themes, Bohemian Rhapsody, big orchestral ballads",
      "Warm, rich, and full of life \u2014 ABBA, Motown, jazz-pop, feel-good classics",
      "Soft, beautiful, and finely detailed \u2014 acoustic songs, gentle piano, subtle indie ballads",
      "Haunting and quietly unforgettable \u2014 dream pop, moody soundtracks, songs that linger"
    ]
  },
  {
    id: 14, dim: "S",
    text: "When you enter a room full of people, you naturally\u2026",
    opts: [
      "Start conversations easily and bring the energy to life",
      "Ease into a few warm exchanges and make the room feel welcoming",
      "Stay close to what feels familiar and open up gradually",
      "Drift toward one person or moment that feels genuinely meaningful"
    ]
  },
  {
    id: 15, dim: "P",
    text: "The kind of life rhythm that feels most natural to you is\u2026",
    opts: [
      "Clear, intentional, and quietly under control",
      "Steady, balanced, and gently well-held",
      "Flexible, open, and able to shift with the moment",
      "Spontaneous, instinctive, and hard to pin down for too long"
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
   HASHTAGS & CHEMISTRY DATA
   ═══════════════════════════════════════════ */

const GRAPE_TAGS = {
  "Cabernet Sauvignon":["#Command","#BoldPresence","#StructuredSoul"],
  "Merlot":["#Ease","#WarmApproach","#QuietRange"],
  "Pinot Noir":["#Nuance","#SoftPower","#LingeringDepth"],
  "Syrah":["#Shadow","#DarkIntensity","#SpiceAndSmoke"],
  "Grenache":["#Radiance","#OpenHeart","#FreeSpirit"],
  "Nebbiolo":["#Severity","#ElegantGrip","#BuiltForTime"],
  "Sangiovese":["#Character","#HonestCharm","#SavoryBackbone"],
  "Tempranillo":["#Composure","#QuietNoble","#SteadyDepth"],
  "Malbec":["#Impact","#VelvetPower","#GenerousEnergy"],
  "Cabernet Franc":["#Intelligence","#LiftedStyle","#HerbalEdge"],
  "Gamay":["#Spark","#PlayfulCharm","#InstantJoy"],
  "Zinfandel":["#Excess","#FullVolume","#UnapologeticRipeness"],
  "Barbera":["#Momentum","#BrightAcid","#RestlessAppetite"],
  "Dolcetto":["#Comfort","#GentleEarth","#QuietRestore"],
  "Cinsault":["#Air","#LightFooted","#EffortlessGrace"],
  "Mourv\u00E8dre":["#Gravity","#DarkDepth","#GroundedForce"],
  "Carmen\u00E8re":["#Velvet","#SmoothMystery","#HiddenComplexity"],
  "Aglianico":["#Endurance","#FierceStructure","#LongGame"],
  "Touriga Nacional":["#Drama","#PerfumedForce","#GrandEntrance"],
  "Nero d\u2019Avola":["#Sun","#WarmConfidence","#SunnySubstance"],
  "Blaufr\u00E4nkisch":["#Coolness","#CrispPrecision","#QuietEdge"],
  "Xinomavro":["#Austerity","#CerebralBeauty","#SevereElegance"],
  "Corvina":["#Restraint","#QuietStyle","#GracefulWithhold"],
  "Menc\u00EDa":["#Freedom","#WildElegance","#FloralUntamed"],
  "Pinotage":["#Rebellion","#SmokyBold","#Defiantly Different"],
  "Chardonnay":["#Polish","#VersatileGrace","#ClassicShape"],
  "Sauvignon Blanc":["#Clarity","#CrispDirect","#FreshPerspective"],
  "Riesling":["#Precision","#RacyTension","#DelicatePower"],
  "Chenin Blanc":["#Range","#ManyRegisters","#IntelligentDepth"],
  "Gew\u00FCrztraminer":["#Identity","#BoldAroma","#UnmistakableSelf"],
  "Pinot Grigio":["#Cleanliness","#LowDrama","#EasyRefresh"],
  "Viognier":["#Lushness","#RomanticWarmth","#FlowerAndPeach"],
  "Albari\u00F1o":["#Breeze","#CoastalLight","#SocialSpark"],
  "Assyrtiko":["#Steel","#VolcanicNerve","#ElectricFocus"],
  "Gr\u00FCner Veltliner":["#Wit","#PepperySharp","#CleverCalm"],
  "Muscat":["#Charm","#SweetPersonality","#OpenExpression"],
  "Torront\u00E9s":["#Color","#VividPlayful","#FloralSpectacle"],
  "Vermentino":["#Ease","#MediterraneanCalm","#SunnyHerbal"],
  "Arneis":["#Elusiveness","#SoftMystery","#HardToDefine"],
  "Falanghina":["#Cheer","#BrightLift","#EffortlessJoy"],
  "Semillon":["#Patience","#SlowReveal","#QuietImpressive"],
  "Fiano":["#Grounding","#InnerCalm","#DepthWithoutDrama"],
  "Garganega":["#Glow","#SoftLuminosity","#GentleBeauty"],
  "Godello":["#Restraint","#QuietStrength","#FullnessBeneath"],
  "Verdicchio":["#Discipline","#CrispOrder","#EverythingHandled"],
  "Marsanne":["#Weight","#CalmPresence","#BroadShoulder"],
  "Roussanne":["#Softness","#UnfoldingLayers","#FragrantNuance"],
  "Ribolla Gialla":["#Curiosity","#SlightlyOffCenter","#TexturedMind"],
  "Xarel-lo":["#Backbone","#QuietPower","#StructuralStrength"],
  "Savagnin":["#Eccentricity","#FierceIdentity","#NicheByChoice"]
};

const PAIRING_TAGS = {
  "R1+W1":["#DisciplinedCore","#SubstanceOverNoise"],
  "R1+W2":["#AuthorityMeetsFreshness","#StrongNotSevere"],
  "R1+W3":["#HighDefinition","#IntenseClarity"],
  "R1+W4":["#RestraintMeetsExpression","#SeriousButAccessible"],
  "R1+W5":["#QuietSophistication","#StandardsAndDepth"],
  "R2+W1":["#QuietlyFormidable","#PowerWithShape"],
  "R2+W2":["#LiftedIntensity","#MagneticPresence"],
  "R2+W3":["#DarkForce","#BrightTension"],
  "R2+W4":["#DramaticExpression","#LargerThanLife"],
  "R2+W5":["#DeepTexture","#MysteriousDepth"],
  "R3+W1":["#WarmthWithShape","#GroundedCharm"],
  "R3+W2":["#BrightAndEasy","#LivelyCharm"],
  "R3+W3":["#BrightWithDefinition","#OpenButClear"],
  "R3+W4":["#ExpressiveColor","#RadiantEnergy"],
  "R3+W5":["#WarmOutsideLayeredInside","#HiddenDepth"],
  "R4+W1":["#GracefulComposure","#RefinedBalance"],
  "R4+W2":["#LightElegance","#FreshAndGentle"],
  "R4+W3":["#QuietPrecision","#DelicateButExact"],
  "R4+W4":["#LyricalDreamer","#SoftAtmosphere"],
  "R4+W5":["#SubtleCuriosity","#ElegantElusion"],
  "R5+W1":["#OriginalButOrdered","#PersonalityWithControl"],
  "R5+W2":["#VividExpression","#DistinctiveCharm"],
  "R5+W3":["#SharpenedCharacter","#InterestingAndClear"],
  "R5+W4":["#PersonalityMeetsPerfume","#VividAndMemorable"],
  "R5+W5":["#TexturedIndividuality","#QuietlyUnconventional"]
};

const CHEMISTRY_BANK = {
  "Cabernet Sauvignon":{blurb:"Cabernet Sauvignon would command your attention without asking. There is something about that calm certainty, that quiet refusal to chase anyone, that makes you want to stay longer than you planned.",tags:["#QuietCommand","#IrresistibleCertainty"]},
  "Merlot":{blurb:"Merlot would disarm you with ease. The warmth feels immediate and genuine, and before you realize it, you are more comfortable than you have been in a while.",tags:["#InstantComfort","#WarmthThatStays"]},
  "Pinot Noir":{blurb:"Pinot Noir would haunt you in the best way. You would keep replaying the details \u2014 the subtlety, the quiet intensity \u2014 long after the moment passed.",tags:["#LingeringMystery","#SubtleObsession"]},
  "Syrah":{blurb:"Syrah would pull you in with that dark, magnetic energy. There is danger there, but the good kind \u2014 the kind that makes everything else feel a little too safe.",tags:["#DarkMagnetism","#DangerouslyGood"]},
  "Grenache":{blurb:"Grenache would sweep you up before you could think twice. The warmth, the spontaneity, the infectious joy \u2014 you would not stand a chance.",tags:["#InfectiousJoy","#SweptAway"]},
  "Nebbiolo":{blurb:"Nebbiolo would fascinate you with its beautiful severity. The more it withholds, the more you want to understand \u2014 and it never quite lets you finish.",tags:["#BeautifulSeverity","#NeverFinished"]},
  "Sangiovese":{blurb:"Sangiovese would win you over with honest character. No games, no performance \u2014 just warmth, backbone, and a charm that feels completely real.",tags:["#HonestCharm","#RealAttraction"]},
  "Tempranillo":{blurb:"Tempranillo would earn your trust before you noticed it happening. The composure, the quiet reliability \u2014 it is the kind of attraction that deepens without drama.",tags:["#QuietTrust","#DeepensWithoutDrama"]},
  "Malbec":{blurb:"Malbec would arrive with presence you cannot ignore. Bold, generous, and utterly confident \u2014 the kind of energy that makes you feel like the most important person in the room.",tags:["#UndeniablePresence","#BoldGenerosity"]},
  "Cabernet Franc":{blurb:"Cabernet Franc would intrigue you with things you almost missed. The intelligence, the subtlety \u2014 this is the attraction that rewards patience and attention.",tags:["#RewardsAttention","#IntellectualPull"]},
  "Gamay":{blurb:"Gamay would charm you instantly and completely. The lightness, the humor, the effortless energy \u2014 you would find yourself smiling before you even knew why.",tags:["#InstantCharm","#CannotHelpSmiling"]},
  "Zinfandel":{blurb:"Zinfandel would overwhelm you in the best possible way. Too much? Maybe. But you would not want it any other way.",tags:["#GloriousExcess","#NoRegrets"]},
  "Barbera":{blurb:"Barbera would energize you. The restless appetite, the momentum, the refusal to sit still \u2014 it is contagious, and you would love every minute of it.",tags:["#ContagiousEnergy","#CannotSitStill"]},
  "Dolcetto":{blurb:"Dolcetto would feel like coming home. The gentleness, the quiet comfort \u2014 this is the kind of pull that does not shout, but you feel it everywhere.",tags:["#ComfortPull","#QuietlyIrresistible"]},
  "Cinsault":{blurb:"Cinsault would draw you in with effortless grace. Light, beautiful, and completely unforced \u2014 you would wonder how anyone makes it look so easy.",tags:["#EffortlessGrace","#NaturalBeauty"]},
  "Mourv\u00E8dre":{blurb:"Mourv\u00E8dre would ground you. There is a gravity there, a depth that cuts through everything superficial and says: this is what matters.",tags:["#GroundingForce","#CutsThrough"]},
  "Carmen\u00E8re":{blurb:"Carmen\u00E8re would intrigue you with what lies beneath the surface. Smooth and warm at first, then stranger and deeper the closer you look.",tags:["#HiddenDepth","#SmoothThenStrange"]},
  "Aglianico":{blurb:"Aglianico would challenge you \u2014 and that is exactly what makes it irresistible. The intensity, the endurance, the refusal to be easy \u2014 this is a long-game obsession.",tags:["#LongGameObsession","#WorthTheWait"]},
  "Touriga Nacional":{blurb:"Touriga Nacional would captivate you with sheer drama. The richness, the perfume, the unapologetic intensity \u2014 this grape does not do understated, and neither would your attraction.",tags:["#SheerDrama","#UnapologeticIntensity"]},
  "Nero d\u2019Avola":{blurb:"Nero d\u2019Avola would surprise you with how much substance hides behind that sunny confidence. Fun at first, then unexpectedly deep.",tags:["#SunnyThenDeep","#SurprisingSubstance"]},
  "Blaufr\u00E4nkisch":{blurb:"Blaufr\u00E4nkisch would impress you with its cool precision. Understated, intelligent, and just sharp enough to keep you on your toes.",tags:["#CoolPrecision","#SharpAttraction"]},
  "Xinomavro":{blurb:"Xinomavro would fascinate you with its cerebral beauty. The austerity is not cold \u2014 it is focused, and that focus would pull you in.",tags:["#CerebralBeauty","#FocusedPull"]},
  "Corvina":{blurb:"Corvina would captivate you with what it does not say. The restraint, the quiet elegance \u2014 you would spend a long time trying to read between the lines.",tags:["#ReadBetweenTheLines","#QuietElegance"]},
  "Menc\u00EDa":{blurb:"Menc\u00EDa would excite you with that beautiful wildness. Thoughtful but untamed, elegant but free \u2014 the kind of pull that feels slightly dangerous and completely alive.",tags:["#BeautifulWildness","#DangerouslyAlive"]},
  "Pinotage":{blurb:"Pinotage would challenge everything you thought was your type. Bold, rebellious, unapologetically different \u2014 and somehow, that is exactly what draws you in.",tags:["#BreaksYourType","#RebelAttraction"]},
  "Chardonnay":{blurb:"Chardonnay would impress you with its polish and adaptability. Effortlessly put together in any setting \u2014 the kind of presence that makes you want to rise to the occasion.",tags:["#PolishedAttraction","#RiseToTheOccasion"]},
  "Sauvignon Blanc":{blurb:"Sauvignon Blanc would cut right through your defenses. That directness, that clarity \u2014 it is refreshing in a way that makes everything else feel blurry.",tags:["#CutsThrough","#RefreshingDirectness"]},
  "Riesling":{blurb:"Riesling would surprise you with hidden sharpness. It looks delicate until you realize just how precise and powerful it actually is \u2014 and by then, you are already captivated.",tags:["#HiddenSharpness","#DelicatePower"]},
  "Chenin Blanc":{blurb:"Chenin Blanc would pull you in slowly. At first it feels intelligent, calm, and slightly hard to pin down \u2014 then suddenly you realize there is much more depth there than you expected.",tags:["#SlowBurnChemistry","#MoreThanMeetsTheEye"]},
  "Gew\u00FCrztraminer":{blurb:"Gew\u00FCrztraminer would be impossible to forget. The intensity, the identity, the refusal to be anything other than itself \u2014 you would either be obsessed or overwhelmed. There is no middle ground.",tags:["#ObsessedOrOverwhelmed","#NoMiddleGround"]},
  "Pinot Grigio":{blurb:"Pinot Grigio would relax you in a way you did not know you needed. No pressure, no performance \u2014 just clean, easy, genuinely pleasant company.",tags:["#EasyChemistry","#RelaxIntoIt"]},
  "Viognier":{blurb:"Viognier would seduce you with richness and warmth. Lush, expressive, and unapologetically romantic \u2014 the kind of attraction that fills the whole room.",tags:["#LushAttraction","#RomanticPull"]},
  "Albari\u00F1o":{blurb:"Albari\u00F1o would brighten everything. The lightness, the charm, the coastal ease \u2014 being around this energy feels like the first warm day of spring.",tags:["#FirstWarmDay","#BrightChemistry"]},
  "Assyrtiko":{blurb:"Assyrtiko would earn your respect before your affection. The steel, the resilience, the refusal to bend \u2014 and then you would realize respect was the deepest form of attraction.",tags:["#RespectThenDesire","#SteelAndSoul"]},
  "Gr\u00FCner Veltliner":{blurb:"Gr\u00FCner Veltliner would make you laugh before you fell. The wit, the sharpness hidden behind calm \u2014 it is the kind of intelligence that sneaks up on you.",tags:["#WitBeforeLove","#SneaksUpOnYou"]},
  "Muscat":{blurb:"Muscat would charm you openly and completely. The sweetness is real, the warmth is genuine, and the effect is immediate \u2014 you would not even try to resist.",tags:["#OpenCharm","#ImmediateEffect"]},
  "Torront\u00E9s":{blurb:"Torront\u00E9s would dazzle you with color and energy. Vivid, playful, and just dramatic enough to keep things interesting \u2014 this is attraction as spectacle.",tags:["#DazzlingEnergy","#AttractionAsSpectacle"]},
  "Vermentino":{blurb:"Vermentino would make everything feel easier. The warmth, the ease, the Mediterranean calm \u2014 you would feel like you are already on vacation.",tags:["#VacationEnergy","#EasyAttraction"]},
  "Arneis":{blurb:"Arneis would intrigue you with its elusiveness. The more you try to define it, the more interesting it becomes \u2014 and that mystery is exactly the point.",tags:["#MysteryIsThePoint","#ElusiveCharm"]},
  "Falanghina":{blurb:"Falanghina would lift your mood without trying. The cheerfulness is contagious, the energy is effortless, and the charm feels completely genuine.",tags:["#ContagiousCheer","#EffortlessLift"]},
  "Semillon":{blurb:"Semillon would grow on you quietly. Not flashy, not instant \u2014 but one day you would realize it is the most impressive presence in the room.",tags:["#SlowReveal","#QuietlyImpressive"]},
  "Fiano":{blurb:"Fiano would ground you with its quiet substance. No performance, no pretense \u2014 just genuine depth that makes everything else feel a little shallow.",tags:["#DepthWithoutDrama","#GenuineSubstance"]},
  "Garganega":{blurb:"Garganega would glow softly in your direction. Not sparkle, not dazzle \u2014 glow. And that gentle luminosity would be impossible to stop thinking about.",tags:["#GentleGlow","#CannotStopThinking"]},
  "Godello":{blurb:"Godello would attract you with its quiet strength. The restraint is not emptiness \u2014 it is fullness held back, and you would want to be the one who gets to see it all.",tags:["#QuietStrength","#FullnessHeldBack"]},
  "Verdicchio":{blurb:"Verdicchio would impress you with its discipline and clarity. Everything in its place, everything handled \u2014 and that confidence is deeply attractive.",tags:["#DisciplinedCharm","#EverythingHandled"]},
  "Marsanne":{blurb:"Marsanne would hold you with its calm weight. Not flashy, not loud \u2014 just solid, present, and impossible to move. That stability would pull you in.",tags:["#CalmWeight","#ImmovablePull"]},
  "Roussanne":{blurb:"Roussanne would unfold slowly and beautifully. The softness draws you in, the nuance keeps you \u2014 this is the grape that reveals a new layer every time.",tags:["#UnfoldsBeautifully","#NewLayerEveryTime"]},
  "Ribolla Gialla":{blurb:"Ribolla Gialla would fascinate you with its curiosity. Slightly unconventional, always interested in what is interesting \u2014 the kind of mind you want to keep exploring.",tags:["#CuriousMinds","#KeepExploring"]},
  "Xarel-lo":{blurb:"Xarel-lo would earn your admiration through quiet power. The backbone, the discipline, the strength that never needs to prove itself \u2014 deeply attractive.",tags:["#QuietPower","#StrengthWithoutProof"]},
  "Savagnin":{blurb:"Savagnin would captivate you with its fierce individuality. Eccentric, intense, and completely uninterested in fitting in \u2014 the kind of pull you cannot explain but cannot resist.",tags:["#FierceIndividuality","#CannotExplainIt"]}
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
   COMPATIBILITY ("The grape you'd fall for")
   ═══════════════════════════════════════════ */

function normalizeScore(raw) {
  if (raw >= 5)  return 2;
  if (raw >= 2)  return 1;
  if (raw >= -1) return 0;
  if (raw >= -4) return -1;
  return -2;
}

function normalizeProfile(profile) {
  const n = {};
  for (const k of ["S","B","C","E","P"]) n[k] = normalizeScore(profile[k]);
  return n;
}

function compatibilityScore(norm, grape) {
  const gS = grape.scores[0], gB = grape.scores[1], gC = grape.scores[2],
        gE = grape.scores[3], gP = grape.scores[4];

  const diffC = Math.abs(norm.C - gC);
  const diffE = Math.abs(norm.E - gE);
  const diffP = Math.abs(norm.P - gP);
  const diffS = Math.abs(norm.S - gS);
  const diffB = Math.abs(norm.B - gB);

  if (diffP >= 3 && diffC >= 3) return -Infinity;

  const worldview =
    (4 - diffC) + (4 - diffE) + Math.round((5 - diffP) * 1.25);
  const chemPoints = [4, 3, 4, 2, 0];
  const chemistry =
    chemPoints[Math.min(diffS, 4)] + chemPoints[Math.min(diffB, 4)];

  return worldview + chemistry;
}

function findFallFor(profile, excludeNames) {
  const norm = normalizeProfile(profile);
  const allGrapes = REDS.concat(WHITES);
  const eligible = allGrapes.filter(g => !excludeNames.includes(g.name));

  let best = null, bestScore = -Infinity;
  for (const g of eligible) {
    const s = compatibilityScore(norm, g);
    if (s > bestScore) { bestScore = s; best = g; }
    else if (s === bestScore && best) {
      const aShape = g.scores.map(Math.abs).reduce((a,b)=>a+b,0);
      const bShape = best.scores.map(Math.abs).reduce((a,b)=>a+b,0);
      if (aShape > bShape) { best = g; }
      else if (aShape === bShape && g.name < best.name) { best = g; }
    }
  }
  return best;
}

/* ═══════════════════════════════════════════
   "ALSO IN YOUR ORBIT"
   ═══════════════════════════════════════════ */

function findOrbit(profile, excludeNames, count) {
  const allGrapes = REDS.concat(WHITES);
  const eligible = allGrapes
    .filter(g => !excludeNames.includes(g.name))
    .map(g => ({ grape: g, dist: manhattan(profile, g) }));

  eligible.sort((a, b) => {
    if (a.dist !== b.dist) return a.dist - b.dist;
    const aShape = a.grape.scores.map(Math.abs).reduce((s,v)=>s+v,0);
    const bShape = b.grape.scores.map(Math.abs).reduce((s,v)=>s+v,0);
    if (aShape !== bShape) return bShape - aShape;
    const aFam = a.grape.family, bFam = b.grape.family;
    if (aFam !== bFam) return aFam < bFam ? -1 : 1;
    return a.grape.name < b.grape.name ? -1 : 1;
  });

  return eligible.slice(0, count).map(e => e.grape);
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

let lastProfile = null;
let lastRed = null;
let lastWhite = null;
let lastFallFor = null;

function computeAndShowResults() {
  const profile = computeProfile();
  lastProfile = profile;
  const red = findClosest(profile, REDS);
  const white = findClosest(profile, WHITES);
  lastRed = red;
  lastWhite = white;

  $("#red-name").textContent = red.name;
  $("#red-sig").textContent = red.sig;
  $("#red-tannin").textContent = `Tannin: ${red.tannin}`;
  $("#red-blurb").textContent = red.blurb;
  $("#red-expressions").textContent = `Classic expressions: ${red.expr}`;
  $("#red-wiki").href = wikiUrl(red.name);
  renderTags(red.name, "#red-tags");

  $("#white-name").textContent = white.name;
  $("#white-sig").textContent = white.sig;
  $("#white-acidity").textContent = `Acidity: ${white.acidity}`;
  $("#white-blurb").textContent = white.blurb;
  $("#white-expressions").textContent = `Classic expressions: ${white.expr}`;
  $("#white-wiki").href = wikiUrl(white.name);
  renderTags(white.name, "#white-tags");

  const pairingKey = `${red.family}+${white.family}`;
  $("#pairing-text").textContent = PAIRING_BANK[pairingKey] || "";
  $("#pairing-note").textContent = `This is a pairing of ${red.sig} and ${white.sig}.`;
  renderPairingTags(pairingKey);

  resetImageWrap("#red-image-wrap");
  resetImageWrap("#white-image-wrap");
  showGrapeImage(red.name, "#red-image-wrap");
  showGrapeImage(white.name, "#white-image-wrap");

  const fallFor = findFallFor(profile, [red.name, white.name]);
  lastFallFor = fallFor;
  renderFallFor(fallFor);

  renderProfile(profile);

  const excludeNames = [red.name, white.name];
  if (fallFor) excludeNames.push(fallFor.name);
  const orbitGrapes = findOrbit(profile, excludeNames, 4);
  renderOrbit(orbitGrapes);

  setupShareLinks(red, white, fallFor);
  showScreen(results);
}

function resetImageWrap(selector) {
  const wrap = $(selector);
  wrap.classList.remove("no-image");
  wrap.innerHTML = "";
}

function renderTags(grapeName, selector) {
  const wrap = $(selector);
  wrap.innerHTML = "";
  const tags = GRAPE_TAGS[grapeName];
  if (!tags) return;
  tags.forEach(t => {
    const pill = document.createElement("span");
    pill.className = "tag-pill";
    pill.textContent = t;
    wrap.appendChild(pill);
  });
}

function renderPairingTags(pairingKey) {
  const wrap = $("#pairing-tags");
  wrap.innerHTML = "";
  const tags = PAIRING_TAGS[pairingKey];
  if (!tags) return;
  tags.forEach(t => {
    const pill = document.createElement("span");
    pill.className = "tag-pill";
    pill.textContent = t;
    wrap.appendChild(pill);
  });
}

function renderFallFor(grape) {
  if (!grape) {
    $("#fallfor-section").style.display = "none";
    return;
  }
  $("#fallfor-section").style.display = "";
  $("#fallfor-name").textContent = grape.name;
  $("#fallfor-wiki").href = wikiUrl(grape.name);

  const chem = CHEMISTRY_BANK[grape.name];
  $("#fallfor-blurb").textContent = chem ? chem.blurb : "";

  const tagWrap = $("#fallfor-tags");
  tagWrap.innerHTML = "";
  if (chem && chem.tags) {
    chem.tags.forEach(t => {
      const pill = document.createElement("span");
      pill.className = "tag-pill tag-pill-accent";
      pill.textContent = t;
      tagWrap.appendChild(pill);
    });
  }

  resetImageWrap("#fallfor-image-wrap");
  showGrapeImage(grape.name, "#fallfor-image-wrap");
}

function renderOrbit(grapes) {
  const list = $("#orbit-list");
  list.innerHTML = "";
  grapes.forEach((g, i) => {
    const item = document.createElement("div");
    item.className = "orbit-item";

    const imgWrap = document.createElement("div");
    imgWrap.className = "orbit-image-wrap";
    imgWrap.id = `orbit-img-${i}`;

    const info = document.createElement("div");
    info.className = "orbit-info";
    const nameEl = document.createElement("span");
    nameEl.className = "orbit-name";
    nameEl.textContent = g.name;
    const sigEl = document.createElement("span");
    sigEl.className = "orbit-sig";
    sigEl.textContent = g.sig;
    info.appendChild(nameEl);
    info.appendChild(sigEl);

    const tagWrap = document.createElement("div");
    tagWrap.className = "grape-tags orbit-tags";
    const tags = GRAPE_TAGS[g.name];
    if (tags) {
      tags.slice(0, 2).forEach(t => {
        const pill = document.createElement("span");
        pill.className = "tag-pill tag-pill-sm";
        pill.textContent = t;
        tagWrap.appendChild(pill);
      });
    }

    item.appendChild(imgWrap);
    item.appendChild(info);
    item.appendChild(tagWrap);
    list.appendChild(item);
    showGrapeImage(g.name, `#orbit-img-${i}`);
  });
}

const DIMS = [
  { key:"S", left:"Social",      right:"Introspective" },
  { key:"B", left:"Bold",        right:"Delicate" },
  { key:"C", left:"Classic",     right:"Adventurous" },
  { key:"E", left:"Earthy",      right:"Floral" },
  { key:"P", left:"Structured",  right:"Free-Spirited" }
];

function renderProfile(profile) {
  const box = $("#profile-bars");
  box.innerHTML = "";
  const summaryParts = [];

  DIMS.forEach(d => {
    const val = profile[d.key];
    const pct = ((6 - val) / 12) * 100;

    const row = document.createElement("div");
    row.className = "profile-row";

    const isLeft = val > 0;
    const isBalanced = val === 0;
    const leftClass = isLeft ? "profile-label-left active-label" : "profile-label-left";
    const rightClass = (!isLeft && !isBalanced) ? "profile-label-right active-label" : "profile-label-right";

    let leaning;
    if (isBalanced) { leaning = "Balanced"; summaryParts.push("Balanced"); }
    else if (isLeft) { leaning = `Leaning ${d.left}`; summaryParts.push(d.left); }
    else { leaning = `Leaning ${d.right}`; summaryParts.push(d.right); }

    row.innerHTML = `
      <span class="profile-label ${leftClass}">${d.left}</span>
      <div class="profile-track">
        <div class="profile-center-line"></div>
        <div class="profile-dot" style="left:${pct}%"></div>
      </div>
      <span class="profile-label ${rightClass}">${d.right}</span>
      <span class="profile-leaning">${leaning}</span>
    `;
    box.appendChild(row);
  });

  $("#profile-summary").textContent = summaryParts.join(" \u00B7 ");
}

/* ═══════════════════════════════════════════
   SHARE / DOWNLOAD
   ═══════════════════════════════════════════ */

function getShareText(red, white, fallFor) {
  let text = `I took the Grape Personality Quiz!\n\nRed match: ${red.name}\nWhite match: ${white.name}`;
  if (fallFor) text += `\nGrape I'd fall for: ${fallFor.name}`;
  text += `\n\nTry it: ${window.location.href}`;
  return text;
}

let _platformUrls = {};

function setupShareLinks(red, white, fallFor) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(getShareText(red, white, fallFor));
  const shortText = encodeURIComponent(
    `I'm ${red.name} (red) + ${white.name} (white) in the Grape Personality Quiz! What grape are you?`
  );

  _platformUrls = {
    x: `https://x.com/intent/tweet?text=${shortText}&url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    whatsapp: `https://wa.me/?text=${text}`,
    line: `https://social-plugins.line.me/lineit/share?url=${url}&text=${shortText}`
  };
}

function downloadBlob(blob) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "grape-quiz-result.png";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function showConfirm(msg) {
  $("#share-confirm").textContent = msg;
  setTimeout(() => { $("#share-confirm").textContent = ""; }, 5000);
}

async function tryWebShare(blob) {
  if (!navigator.share || !navigator.canShare) return false;
  const file = new File([blob], "grape-quiz-result.png", { type: "image/png" });
  const data = {
    text: getShareText(
      { name: $("#red-name").textContent },
      { name: $("#white-name").textContent },
      lastFallFor
    ),
    files: [file]
  };
  if (!navigator.canShare(data)) return false;
  try { await navigator.share(data); return true; } catch (_) { return false; }
}

async function handleShare(platformUrl, toastMsg) {
  const blob = await generateResultImage(true);
  if (!blob) return;

  if (await tryWebShare(blob)) return;

  downloadBlob(blob);
  if (platformUrl) {
    window.open(platformUrl, "_blank", "noopener");
    showConfirm(toastMsg);
  } else {
    showConfirm(toastMsg);
  }
}

$("#retake-btn").addEventListener("click", () => {
  currentQ = 0;
  answers.fill(null);
  $("#share-confirm").textContent = "";
  showScreen(landing);
});

$("#share-copy-btn").addEventListener("click", () => {
  const text = getShareText(
    { name: $("#red-name").textContent },
    { name: $("#white-name").textContent },
    lastFallFor
  );
  navigator.clipboard.writeText(text).then(() => {
    showConfirm("Copied to clipboard!");
  }).catch(() => {
    showConfirm("Could not copy \u2014 try manually.");
  });
});

$("#share-instagram-btn").addEventListener("click", () =>
  handleShare(null, "Image saved! Open Instagram and share from your gallery.")
);
$("#share-x-btn").addEventListener("click", () =>
  handleShare(_platformUrls.x, "Image saved \u2014 attach it to your post on X!")
);
$("#share-facebook-btn").addEventListener("click", () =>
  handleShare(_platformUrls.facebook, "Image saved \u2014 post it on Facebook!")
);
$("#share-whatsapp-btn").addEventListener("click", () =>
  handleShare(_platformUrls.whatsapp, "Image saved \u2014 attach it in the chat!")
);
$("#share-line-btn").addEventListener("click", () =>
  handleShare(_platformUrls.line, "Image saved \u2014 attach it in the chat!")
);

/* ═══════════════════════════════════════════
   RESULT IMAGE DOWNLOAD (Canvas API)
   ═══════════════════════════════════════════ */

function loadImageAsync(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawWrapped(ctx, text, x, y, maxWidth, lineHeight) {
  const lines = wrapText(ctx, text, maxWidth);
  lines.forEach((ln, i) => { ctx.fillText(ln, x, y + i * lineHeight); });
  return y + lines.length * lineHeight;
}

async function generateResultImage(returnBlob) {
  const W = 1080;
  const measure = document.createElement("canvas");
  measure.width = 1; measure.height = 1;
  const mc = measure.getContext("2d");

  const cardW = 480, cardPad = 28, imgH = 300, gapX = (W - cardW * 2) / 3;
  const cardsY = 110;
  const cardH = imgH + 24 + 32 + 40 + 24 + 22 + 16;
  let yOff = cardsY + cardH + 30;

  let pairingKey, pText, pTags;
  if (lastRed && lastWhite) {
    pairingKey = `${lastRed.family}+${lastWhite.family}`;
    pText = PAIRING_BANK[pairingKey];
    pTags = PAIRING_TAGS[pairingKey];
  }

  const ffW = 540, ffImgSz = 160;
  let fallForName = "", chem = null;
  if (lastFallFor) {
    fallForName = lastFallFor.name;
    chem = CHEMISTRY_BANK[fallForName];
  }

  const summaryText = ($("#profile-summary") || {}).textContent || "";

  const estH = 3000;
  const H = estH;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#FDF6EC";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#722F37";
  ctx.fillRect(0, 0, W, 8);

  ctx.fillStyle = "#4A1A21";
  ctx.font = "bold 52px 'Playfair Display', Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText("Your Grape Pairing", W / 2, 80);

  const redName = lastRed ? lastRed.name : "";
  const whiteName = lastWhite ? lastWhite.name : "";
  const redSrc = GRAPE_IMAGES[redName];
  const whiteSrc = GRAPE_IMAGES[whiteName];
  const fallSrc = GRAPE_IMAGES[fallForName];

  const [redImg, whiteImg, fallImg] = await Promise.all([
    redSrc ? loadImageAsync(redSrc).catch(() => null) : null,
    whiteSrc ? loadImageAsync(whiteSrc).catch(() => null) : null,
    fallSrc ? loadImageAsync(fallSrc).catch(() => null) : null
  ]);

  function drawCard(img, grape, label, color, x, startY) {
    ctx.fillStyle = "#FFFFFF";
    roundRect(ctx, x, startY, cardW, cardH, 16);
    ctx.fill();
    ctx.strokeStyle = color; ctx.lineWidth = 2;
    roundRect(ctx, x, startY, cardW, cardH, 16);
    ctx.stroke();

    ctx.fillStyle = "#F8F0E3";
    roundRect(ctx, x, startY, cardW, imgH, 16);
    ctx.fill();

    if (img) {
      const pad = 20;
      const areaW = cardW - pad * 2, areaH = imgH - pad * 2;
      const sc = Math.min(areaW / img.width, areaH / img.height);
      const dw = img.width * sc, dh = img.height * sc;
      ctx.save();
      roundRect(ctx, x, startY, cardW, imgH, 16);
      ctx.clip();
      ctx.drawImage(img, x + (cardW - dw) / 2, startY + (imgH - dh) / 2, dw, dh);
      ctx.restore();
    }

    let y = startY + imgH + 24;
    ctx.fillStyle = color; ctx.font = "bold 16px 'Inter', sans-serif"; ctx.textAlign = "center";
    ctx.fillText(label, x + cardW / 2, y); y += 32;

    ctx.fillStyle = "#4A1A21"; ctx.font = "bold 34px 'Playfair Display', Georgia, serif";
    ctx.fillText(grape.name, x + cardW / 2, y); y += 28;

    const meta = grape.tannin
      ? `${grape.sig}  \u00B7  Tannin: ${grape.tannin}`
      : `${grape.sig}  \u00B7  Acidity: ${grape.acidity}`;
    ctx.font = "italic 17px 'Inter', sans-serif"; ctx.fillStyle = "#8C7268";
    ctx.fillText(meta, x + cardW / 2, y); y += 24;

    const tags = GRAPE_TAGS[grape.name];
    if (tags) { ctx.font = "14px 'Inter', sans-serif"; ctx.fillStyle = "#9B4D56"; ctx.fillText(tags.join("   "), x + cardW / 2, y); }

    return startY + cardH;
  }

  const redBottom = lastRed ? drawCard(redImg, lastRed, "RED MATCH", "#722F37", gapX, cardsY) : cardsY;
  const whiteBottom = lastWhite ? drawCard(whiteImg, lastWhite, "WHITE MATCH", "#A3944A", gapX + cardW + gapX, cardsY) : cardsY;
  yOff = Math.max(redBottom, whiteBottom) + 30;

  if (pText) {
    const pairX = 60, pairW = W - 120;
    ctx.font = "15px 'Inter', sans-serif";
    const pLines = wrapText(ctx, pText, pairW - 40);
    const pairH = 28 + 24 + pLines.length * 20 + 12 + (pTags ? 20 : 0) + 8;

    ctx.fillStyle = "#FFFFFF";
    roundRect(ctx, pairX, yOff, pairW, pairH, 14); ctx.fill();
    ctx.fillStyle = "#C9A94E";
    ctx.fillRect(pairX, yOff + 12, 4, pairH - 24);

    let py = yOff + 28;
    ctx.fillStyle = "#4A1A21"; ctx.font = "bold 24px 'Playfair Display', Georgia, serif"; ctx.textAlign = "left";
    ctx.fillText("Why This Pairing Works", pairX + 20, py); py += 24;

    ctx.font = "15px 'Inter', sans-serif"; ctx.fillStyle = "#5A3E35";
    py = drawWrapped(ctx, pText, pairX + 20, py, pairW - 40, 20); py += 12;

    if (pTags) { ctx.font = "14px 'Inter', sans-serif"; ctx.fillStyle = "#7A6B2A"; ctx.fillText(pTags.join("   "), pairX + 20, py); }

    yOff += pairH + 24;
  }

  if (lastFallFor) {
    ctx.fillStyle = "#4A1A21"; ctx.font = "bold 28px 'Playfair Display', Georgia, serif"; ctx.textAlign = "center";
    ctx.fillText("The Grape You\u2019d Fall For", W / 2, yOff + 6);
    yOff += 30;

    const ffX = W / 2 - ffW / 2;

    let measY = yOff + 20;
    if (fallImg) measY += ffImgSz + 12;
    measY += 18;
    if (chem && chem.tags) measY += 20;
    if (chem && chem.blurb) { ctx.font = "15px 'Inter', sans-serif"; measY += wrapText(ctx, chem.blurb, ffW - 48).length * 20 + 8; }
    const ffH = measY - yOff + 16;

    ctx.fillStyle = "#FFFFFF";
    roundRect(ctx, ffX, yOff, ffW, ffH, 16); ctx.fill();
    ctx.strokeStyle = "#C9A94E"; ctx.lineWidth = 2;
    roundRect(ctx, ffX, yOff, ffW, ffH, 16); ctx.stroke();

    let dy = yOff + 20;
    if (fallImg) {
      const sc = Math.min(ffImgSz / fallImg.width, ffImgSz / fallImg.height);
      const dw = fallImg.width * sc, dh = fallImg.height * sc;
      ctx.drawImage(fallImg, W / 2 - dw / 2, dy + (ffImgSz - dh) / 2, dw, dh);
      dy += ffImgSz + 12;
    }
    ctx.fillStyle = "#4A1A21"; ctx.font = "bold 30px 'Playfair Display', Georgia, serif"; ctx.textAlign = "center";
    ctx.fillText(fallForName, W / 2, dy); dy += 18;
    if (chem && chem.tags) { ctx.font = "14px 'Inter', sans-serif"; ctx.fillStyle = "#7A6B2A"; ctx.fillText(chem.tags.join("   "), W / 2, dy); dy += 20; }
    if (chem && chem.blurb) { ctx.font = "15px 'Inter', sans-serif"; ctx.fillStyle = "#5A3E35"; ctx.textAlign = "left"; drawWrapped(ctx, chem.blurb, ffX + 24, dy, ffW - 48, 20); }

    yOff += ffH + 28;
  }

  ctx.fillStyle = "#4A1A21"; ctx.font = "bold 26px 'Playfair Display', Georgia, serif"; ctx.textAlign = "center";
  ctx.fillText("Your Personality Profile", W / 2, yOff);
  yOff += 36;

  if (lastProfile) {
    DIMS.forEach(d => {
      const val = lastProfile[d.key];
      const pct = (6 - val) / 12;
      const trackX = 200, trackW = W - 400, trackY = yOff + 8;

      ctx.font = "bold 17px 'Inter', sans-serif";
      ctx.textAlign = "right"; ctx.fillStyle = val > 0 ? "#722F37" : "#8C7268";
      ctx.fillText(d.left, trackX - 14, yOff + 14);
      ctx.textAlign = "left"; ctx.fillStyle = val < 0 ? "#722F37" : "#8C7268";
      ctx.fillText(d.right, trackX + trackW + 14, yOff + 14);

      ctx.fillStyle = "#F0E6D3"; roundRect(ctx, trackX, trackY, trackW, 12, 6); ctx.fill();

      const centerX = trackX + trackW / 2;
      ctx.strokeStyle = "#D4C98A"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(centerX, trackY - 4); ctx.lineTo(centerX, trackY + 16); ctx.stroke();

      const dotX = trackX + pct * trackW;
      ctx.beginPath(); ctx.arc(dotX, trackY + 6, 10, 0, Math.PI * 2);
      ctx.fillStyle = "#722F37"; ctx.fill();
      ctx.strokeStyle = "#FFFFFF"; ctx.lineWidth = 3; ctx.stroke();

      yOff += 46;
    });
  }

  yOff += 16;
  if (summaryText) {
    ctx.font = "bold 16px 'Inter', sans-serif"; ctx.fillStyle = "#722F37"; ctx.textAlign = "center";
    ctx.fillText(summaryText, W / 2, yOff);
    yOff += 30;
  }

  yOff += 10;
  ctx.fillStyle = "#8C7268"; ctx.font = "16px 'Inter', sans-serif"; ctx.textAlign = "center";
  ctx.fillText("chewei888.github.io/grape-quiz", W / 2, yOff);
  yOff += 30;

  const finalH = Math.min(yOff, H);
  const outCanvas = document.createElement("canvas");
  outCanvas.width = W; outCanvas.height = finalH;
  outCanvas.getContext("2d").drawImage(canvas, 0, 0);

  return new Promise(resolve => {
    outCanvas.toBlob(blob => {
      if (!blob) { resolve(null); return; }
      if (returnBlob) { resolve(blob); return; }
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "grape-quiz-result.png";
      a.click();
      URL.revokeObjectURL(a.href);
      resolve(blob);
    }, "image/png");
  });
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

$("#download-btn").addEventListener("click", () => {
  generateResultImage();
});
