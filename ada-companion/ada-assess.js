// The two self-assessments, lifted from the app's own assessment.js.
// Six readings move quietly behind the answers:
// carry · open · pace · people · body · trust

export const ARRIVAL = [
  { kind: 'Right now', title: 'The week before this — how has it actually been?', options: [
    ['Full. I have been running to get here.', { carry: 3, pace: 2, body: -1 }],
    ['Ordinary. Nothing heavy, nothing special.', { carry: 0, pace: 0 }],
    ['Heavy. Something is sitting on me.', { carry: 3, open: -1, trust: -1 }],
    ['Light. I have had some space already.', { carry: -2, pace: -1, trust: 1 }]
  ] },
  { kind: 'An honest reaction', title: 'You walk into a circle of forty people you do not know. First thing you feel?', options: [
    ['Curious. I want to know who is here.', { people: 3, open: 2 }],
    ['I look for the edge of the room.', { people: -2, open: -1 }],
    ['Fine, as long as no one asks me to share.', { open: -2, people: 0 }],
    ['Relief. This is where I come alive.', { people: 3, open: 3 }]
  ] },
  { kind: 'A real situation', title: 'A workshop asks you to close your eyes and stay with what comes. What happens?', options: [
    ['I go in. That is what I am here for.', { open: 3, body: 2, trust: 1 }],
    ['I try, and my head keeps commenting.', { body: -2, open: 0 }],
    ['I go along with it and stay on the surface.', { open: -2, body: -1 }],
    ['Something usually surfaces, and it is a lot.', { open: 2, carry: 2, body: 2 }]
  ] },
  { kind: 'A quiet pattern', title: 'Given a free afternoon here, what would you honestly do?', options: [
    ['Find water and lie down.', { pace: 3, body: 2, people: -1 }],
    ['See what is on and go to something.', { pace: -2, people: 1 }],
    ['Find people I like and stay with them.', { people: 3, pace: 0 }],
    ['Walk alone and see where I end up.', { people: -2, pace: 2, body: 1 }]
  ] },
  { kind: 'Underneath it all', title: 'What are you most quietly hoping six days will do?', options: [
    ['Let me rest properly for once.', { pace: 3, carry: 2 }],
    ['Shake something loose that has been stuck.', { open: 2, carry: 2 }],
    ['Put me back among people.', { people: 3, open: 2 }],
    ['Make something clearer that I keep avoiding.', { trust: -1, open: 1 }]
  ] },
  { kind: 'An honest reaction', title: 'Someone here asks how you are, and means it. What comes out?', options: [
    ['The real answer. I do not have the energy to perform.', { open: 3, carry: 1 }],
    ['Something true but small. I test the water first.', { open: 0 }],
    ['I turn it around and ask about them.', { open: -2, people: 1 }],
    ['“Good, thanks.” Even if it is not.', { open: -3, carry: 1 }]
  ] },
  { kind: 'Checking in', title: 'When did you last notice what your body was asking for?', options: [
    ['Today. I usually know.', { body: 3, trust: 2 }],
    ['I notice once it is already too late.', { body: -2, trust: -1 }],
    ['I notice and then override it.', { body: 0, trust: -2, carry: 1 }],
    ['Honestly, I have not been listening for a while.', { body: -3, trust: -2 }]
  ] },
  { kind: 'Right now', title: 'And your energy, walking in — where is it?', options: [
    ['Radiant. I arrived already lit.', { body: 2, carry: -1 }],
    ['Full. Ready for all of it.', { body: 1, pace: -1 }],
    ['Steady. Nothing more, nothing less.', {}],
    ['Tender. Handle with some care.', { carry: 1, open: 1 }],
    ['Spent. I made it here, barely.', { carry: 2, body: -1, pace: 2 }]
  ] },
  { kind: 'The plan', title: 'You have a full list of workshops you want. Halfway through day two you are tired. Then what?', options: [
    ['I go anyway. I paid for this.', { pace: -3, trust: -2, carry: 1 }],
    ['I drop things without much thought.', { pace: 2, trust: 2 }],
    ['I agonise, then usually go.', { pace: -2, trust: -1 }],
    ['I would rather have nothing planned at all.', { pace: 3, trust: 1 }]
  ] }
];

export const CLOSING = [
  { kind: 'Right now', title: 'Compared to the day you arrived, what is the weight like?', options: [
    ['Lighter. Something actually left.', { carry: -3, trust: 1 }],
    ['About the same.', { carry: 0 }],
    ['Heavier, but in a way that feels honest.', { carry: 1, open: 2 }],
    ['Different weight. Not the one I came with.', { carry: -1, open: 2 }]
  ] },
  { kind: 'An honest reaction', title: 'Being around this many people, six days in?', options: [
    ['I found my people. I did not expect that.', { people: 3, open: 3 }],
    ['Good, and I am ready for quiet.', { people: 1, pace: 2 }],
    ['I kept more to myself than I imagined.', { people: -2 }],
    ['I stayed on the edge the whole time.', { people: -3, open: -2 }]
  ] },
  { kind: 'A real situation', title: 'Was there a moment you let something in that you would normally hold off?', options: [
    ['Yes, and it changed the week.', { open: 3, trust: 2 }],
    ['Once or twice, briefly.', { open: 1 }],
    ['I got close and pulled back.', { open: -1, trust: -1 }],
    ['No. I stayed behind the glass.', { open: -3 }]
  ] },
  { kind: 'A quiet pattern', title: 'How did you actually spend the days, in the end?', options: [
    ['Slower than planned, and it was right.', { pace: 3, trust: 3 }],
    ['I did most of what I meant to.', { pace: -1 }],
    ['I ran myself thin.', { pace: -3, carry: 2, trust: -2 }],
    ['I abandoned the plan entirely.', { pace: 3, trust: 2 }]
  ] },
  { kind: 'Underneath it all', title: 'What did the days actually give you — not what you hoped for?', options: [
    ['Rest, in my body, not just my head.', { pace: 3, body: 3 }],
    ['Something shifted that I cannot name yet.', { open: 2, carry: -2 }],
    ['People. Real ones.', { people: 3, open: 2 }],
    ['Clarity about something I was avoiding.', { trust: 2, open: 1 }]
  ] },
  { kind: 'An honest reaction', title: 'How much of yourself did people here actually meet?', options: [
    ['Most of it. More than usual.', { open: 3, trust: 2 }],
    ['A good part.', { open: 1 }],
    ['The presentable part.', { open: -2 }],
    ['Barely any. I kept it neat.', { open: -3, carry: 1 }]
  ] },
  { kind: 'Checking in', title: 'Do you know now what your body needs?', options: [
    ['Yes, clearly.', { body: 3, trust: 3 }],
    ['Better than when I arrived.', { body: 2, trust: 1 }],
    ['I know but I doubt it.', { body: 1, trust: -2 }],
    ['Still not really listening.', { body: -3, trust: -2 }]
  ] },
  { kind: 'Going home', title: 'What is the thing you are most likely to lose within two weeks?', options: [
    ['The slowness.', { pace: 2, carry: 1 }],
    ['The openness with people.', { open: 2, people: 1 }],
    ['Whatever I understood here.', { trust: -1 }],
    ['Nothing. Something in me actually changed.', { trust: 3, open: 2 }]
  ] },
  { kind: 'Looking back', title: 'Which day is the one you would keep?', options: [
    ['Tuesday — arriving, before anything was asked of me.', { pace: 2, carry: -1 }],
    ['Wednesday — the breath, and the sky moving.', { body: 3, open: 1 }],
    ['Thursday — when I stopped performing.', { open: 3, trust: 1 }],
    ['Friday — the singing, the dancing, the people.', { people: 3, open: 2 }],
    ['Saturday — the fire, the heart of it.', { open: 2, body: 2 }],
    ['Sunday — quiet, and finally settled.', { pace: 3, body: 2 }]
  ] },
  { kind: 'Right now', title: 'And your energy, six days in — where is it?', options: [
    ['Radiant. Lit from somewhere behind the eyes.', { body: 2, carry: -2 }],
    ['Full. And I want to keep some of it.', { body: 1 }],
    ['Steady. Level, in a good way.', {}],
    ['Tender. Open, and a little raw.', { open: 1, carry: 1 }],
    ['Spent. In the best possible way.', { pace: 1, body: 1 }]
  ] },
  { kind: 'An honest reaction', title: 'What surprised you most about yourself here?', options: [
    ['How much I needed to rest.', { pace: 3, body: 2, carry: 1 }],
    ['How easily I talked to strangers.', { people: 3, open: 3 }],
    ['How much I was holding.', { carry: 2, open: 2 }],
    ['How little I needed in order to feel good.', { trust: 3, pace: 2 }],
    ['Nothing, really.', { open: -1 }]
  ] }
];

export const KEYS = ['carry', 'open', 'pace', 'people', 'body', 'trust'];

export const READING_LABEL = {
  carry: 'What you carry', open: 'How open you are', pace: 'The pace you want',
  people: 'People', body: 'Living in your body', trust: 'Trusting yourself'
};

export function score(answers, set) {
  const out = { carry: 0, open: 0, pace: 0, people: 0, body: 0, trust: 0 };
  answers.forEach((ai, qi) => {
    if (ai == null || !set[qi]) return;
    const eff = set[qi].options[ai][1] || {};
    KEYS.forEach(k => { if (eff[k]) out[k] += eff[k]; });
  });
  return out;
}

// A first reading, written on arrival — one paragraph, no numbers.
export function arrivalReading(r) {
  const lines = ['Welcome to the island. You answered as you are, and I read every word with care.'];
  if (r.carry >= 4) lines.push('You have come in heavy. Not broken, loaded. The first day could simply be for putting some of it down, and nothing else.');
  else if (r.carry <= -1) lines.push('You have arrived with room in you already. That is rarer than you think, and worth spending well.');
  else lines.push('You arrive somewhere in the middle: not depleted, not light. A week that could go either way, depending on what you say yes to.');

  if (r.pace >= 4) lines.push('You want stillness more than you want programme. I will not fill your days.');
  else if (r.pace <= -3) lines.push('You want momentum, and you will probably over-book yourself by Friday. I will say something when you do.');

  if (r.body <= -3) lines.push('You have not been listening to your body for a while. Most of what I suggest will be an invitation back into it.');
  else if (r.body >= 4) lines.push('Your body already tells you things and you already listen. I will mostly stay out of the way.');

  if (r.open <= -3) lines.push('You keep a good distance from people, and that is allowed here. Nothing will ask you to share.');
  else if (r.open >= 5) lines.push('You open quickly. Six days is long enough for that to cost something, so I will remind you to close the door sometimes.');

  const out = lines.slice(0, 4);
  out.push('Arrive with ease, move with flow. I will hold the rest.');
  return out;
}

// The letter home — written by comparing the two sets.
export function letter(a, b) {
  const d = {}; KEYS.forEach(k => { d[k] = (b[k] || 0) - (a[k] || 0); });
  const moved = KEYS.slice().sort((x, y) => Math.abs(d[y]) - Math.abs(d[x]));
  const say = {
    carry: [d.carry < 0 ? 'You put weight down. It is measurably lighter in here than it was on Tuesday.' : 'You are carrying more than when you arrived. But you named it, which is not the same as being burdened by it.'],
    open: [d.open > 0 ? 'You opened. On the first night you would not have answered these questions the way you just did.' : 'You stayed guarded, and you were honest about it. That is its own kind of open.'],
    pace: [d.pace > 0 ? 'You slowed down. You planned a full week and then let most of it go, and you were right to.' : 'You pushed. There was more in the days than there was in you, and you went anyway.'],
    people: [d.people > 0 ? 'You let people in. That was not the plan you arrived with.' : 'You spent the week closer to yourself than to anyone else here.'],
    body: [d.body > 0 ? 'You came back into your body. Five days ago you could not have told me what it wanted.' : 'Your body is still waiting for you to listen. It will keep waiting; it is patient.'],
    trust: [d.trust > 0 ? 'You trust yourself more than you did on Tuesday. Of everything here, that is the one worth protecting.' : 'You still doubt what you know. Nothing here fixed that, and nothing was going to in six days.']
  };
  const body = moved.slice(0, 3).filter(k => Math.abs(d[k]) >= 1).map(k => say[k][0]);
  if (!body.length) body.push('Six days, and the readings barely moved. Sometimes that means it was not the right week. Sometimes it means you were already where you needed to be.');
  body.unshift('Six days on the island, and this is what they moved in you.');
  body.push('With love and care. Your tribe.');
  return body;
}

// Three intention proposals, written from the arrival reading.
export function intentions(r) {
  const cand = [];
  if ((r.carry || 0) >= 3) cand.push([Math.abs(r.carry), 'I put things down before I pick things up.']);
  if ((r.open || 0) <= -2) cand.push([Math.abs(r.open), 'I answer honestly, even if my voice shakes.']);
  if ((r.body || 0) <= -2) cand.push([Math.abs(r.body), 'I let my body decide before my head votes.']);
  if ((r.pace || 0) >= 3) cand.push([Math.abs(r.pace), 'I am allowed to do less than everyone around me.']);
  if ((r.pace || 0) <= -2) cand.push([Math.abs(r.pace), 'I leave room in the days I fill.']);
  if ((r.people || 0) >= 3) cand.push([Math.abs(r.people), 'I go toward people while it is easy here.']);
  if ((r.people || 0) <= -2) cand.push([Math.abs(r.people), 'My own company counts as company.']);
  if ((r.trust || 0) <= -1) cand.push([Math.abs(r.trust), 'I trust the first answer I feel.']);
  cand.sort((a, b) => b[0] - a[0]);
  const out = cand.map(c => c[1]);
  ['I meet the island as I am, not as I planned to be.', 'I say one true thing a day.', 'I let the days be bigger than my plan for them.'].forEach(t => { if (out.length < 3 && out.indexOf(t) < 0) out.push(t); });
  return out.slice(0, 3);
}

// What to protect when you get home — written from what moved.
export function takeHome(a, b) {
  const d = {}; KEYS.forEach(k => { d[k] = (b[k] || 0) - (a[k] || 0); });
  const moves = [];
  if (d.pace > 0) moves.push([d.pace, 'One slow morning a week would keep the island alive. No plan before noon, the way it was here.']);
  if (d.open > 0) moves.push([d.open, 'The thing you told the fire would survive being told to one person at home, too.']);
  if (d.people > 0) moves.push([d.people, 'The tribe would love to hear from you in the first days, while the sand is still in your bag.']);
  if (d.body > 0) moves.push([d.body, 'Cold water exists at home too. It will be waiting, whenever you want that feeling back.']);
  if (d.trust > 0) moves.push([d.trust, 'You have been acting on what you need the same day you feel it. That muscle travels home with you.']);
  if (d.carry < 0) moves.push([Math.abs(d.carry), 'Whatever you put down here does not need to be picked up again.']);
  moves.sort((x, y) => y[0] - x[0]);
  const out = moves.slice(0, 2).map(m => m[1]);
  out.push('A line before sleep is enough to keep the door open, whenever you want it open.');
  return out;
}

export function deltas(a, b) {
  return KEYS.map(k => ({
    key: k, label: READING_LABEL[k],
    from: a[k] || 0, to: b[k] || 0, diff: (b[k] || 0) - (a[k] || 0)
  })).sort((x, y) => Math.abs(y.diff) - Math.abs(x.diff));
}
