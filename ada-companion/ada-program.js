export const DAYS = [
  { key: 'tue', label: 'Tuesday', short: 'Tue', theme: 'We Are', color: '#B5766A' },
  { key: 'wed', label: 'Wednesday', short: 'Wed', theme: 'Infinite', color: '#D9A552' },
  { key: 'thu', label: 'Thursday', short: 'Thu', theme: 'All One', color: '#C98878' },
  { key: 'fri', label: 'Friday', short: 'Fri', theme: 'Beautiful', color: '#B23A31' },
  { key: 'sat', label: 'Saturday', short: 'Sat', theme: 'Connected', color: '#E6916C' },
  { key: 'sun', label: 'Sunday', short: 'Sun', theme: 'Sacred Truth', color: '#F9DBDD' }
];

const S = { temple: 'The Temple', shala: 'Beach Shala', dome: 'Breath Dome', grove: 'The Grove', hearth: 'The Hearth', deck: 'Sunset Deck', garden: 'Sound Garden', chai: 'Chai Temple', point: 'The Point' };
const ev = (d, st, s, e, t, w) => ({ id: d + '-' + st + '-' + s.replace(':', ''), s, e, t, w, st, stName: S[st] });

export const PROGRAM = [
  [
    ev(0, 'shala', '14:00', '15:15', 'Landing In The Body · Gentle Yoga', 'Amara'),
    ev(0, 'grove', '14:30', '15:30', 'Welcome Circle · How The Island Works', 'the ADA team'),
    ev(0, 'dome', '15:30', '16:30', 'First Breath · Meeting The Dome', 'Betika'),
    ev(0, 'hearth', '16:00', '17:30', 'Cacao, Openly · A First Ceremony', 'Mama Rama'),
    ev(0, 'garden', '17:00', '18:00', 'Learning The Mantra', 'Jaya'),
    ev(0, 'deck', '18:00', '20:00', 'Sunset Set · Selva', 'DJ set'),
    ev(0, 'temple', '20:30', '22:30', 'Opening Ceremony · We Are', 'all the guides'),
    ev(0, 'chai', '22:30', '23:30', 'Midnight Chai', 'Yara')
  ],
  [
    ev(1, 'shala', '06:30', '07:30', 'Sunrise Sadhana', 'Amara'),
    ev(1, 'dome', '08:00', '09:30', 'Breath & Cold · Level One', 'Betika'),
    ev(1, 'shala', '10:00', '11:15', 'Kundalini Rising', 'Noor'),
    ev(1, 'grove', '10:00', '11:30', 'The Science Of Awe', 'Stefan'),
    ev(1, 'hearth', '10:30', '12:00', 'Bread Of The Island · Baking Ritual', 'Ines'),
    ev(1, 'deck', '12:30', '14:00', 'Kaya Dub', 'DJ set'),
    ev(1, 'chai', '13:00', '14:30', 'Chai Ceremony', 'Yara'),
    ev(1, 'garden', '15:00', '16:30', 'Voice As Medicine', 'Jaya'),
    ev(1, 'grove', '16:15', '17:45', 'Dreams, Taken Seriously', 'Selena'),
    ev(1, 'shala', '18:00', '19:30', 'Yoga Nidra At Golden Hour', 'Amara'),
    ev(1, 'temple', '20:30', '22:00', 'Sound Bath Under The Stars', 'Ravi'),
    ev(1, 'deck', '22:30', '23:30', 'Slow Set · Ohm Selecta', 'DJ set')
  ],
  [
    ev(2, 'shala', '06:30', '07:30', 'Sunrise Sadhana', 'Amara'),
    ev(2, 'dome', '08:00', '09:30', 'Breath & Cold · Going Deeper', 'Betika'),
    ev(2, 'shala', '10:00', '11:30', 'Contact Improvisation', 'Mira & Tom'),
    ev(2, 'grove', '10:00', '11:15', 'Sitting With Strangers · Council Practice', 'Elif'),
    ev(2, 'hearth', '11:00', '12:30', 'Clay, Together · Two-Handed Pottery', 'Ines'),
    ev(2, 'deck', '12:30', '14:00', 'Selva', 'DJ set'),
    ev(2, 'chai', '13:00', '14:30', 'Chai Ceremony', 'Yara'),
    ev(2, 'garden', '15:00', '16:30', 'Singing In Harmony', 'Jaya'),
    ev(2, 'grove', '16:30', '17:45', 'The Myth Of The Separate Self', 'Stefan'),
    ev(2, 'shala', '18:00', '20:00', 'Ecstatic Dance · All One', 'Ohm Selecta'),
    ev(2, 'temple', '20:30', '22:00', 'Fire Circle · Stories From The Road', 'the whole tribe'),
    ev(2, 'point', '22:30', '23:30', 'Stargazing On The Point', 'Ravi')
  ],
  [
    ev(3, 'shala', '06:30', '07:30', 'Sunrise Sadhana', 'Amara'),
    ev(3, 'dome', '08:00', '09:30', 'Ice & Intention', 'Betika'),
    ev(3, 'hearth', '10:00', '11:30', 'Flower Crowns & Braids', 'Ines'),
    ev(3, 'grove', '10:00', '11:15', 'Beauty As A Practice', 'Selena'),
    ev(3, 'shala', '10:30', '12:00', 'Acroyoga', 'Mira & Tom'),
    ev(3, 'deck', '12:30', '14:00', 'Kaya Dub', 'DJ set'),
    ev(3, 'chai', '13:00', '14:30', 'Chai Ceremony', 'Yara'),
    ev(3, 'garden', '14:45', '16:15', 'Songwriting By The River', 'Luka'),
    ev(3, 'hearth', '16:15', '17:30', 'Adorning The Temple', 'the whole tribe'),
    ev(3, 'shala', '18:00', '19:30', 'Sunset Flow · Live Cello', 'Amara & Luka'),
    ev(3, 'temple', '20:30', '22:30', 'Concert · Navina', 'Live concert'),
    ev(3, 'deck', '22:30', '23:45', 'Night Set · Selva', 'DJ set')
  ],
  [
    ev(4, 'shala', '06:30', '07:30', 'Sunrise Sadhana', 'Amara'),
    ev(4, 'dome', '09:00', '10:30', 'The Wisdom Of Breath & Cold', 'Betika'),
    ev(4, 'garden', '10:15', '11:45', 'Mantra Singing Workshop', 'Jaya'),
    ev(4, 'grove', '10:30', '11:45', 'Attachment, Honestly', 'Elif'),
    ev(4, 'deck', '12:00', '14:00', 'Drumming Jam Session', 'Luka'),
    ev(4, 'chai', '13:00', '14:30', 'Chai Ceremony', 'Yara'),
    ev(4, 'hearth', '13:45', '15:45', 'Cacao & Sound Journey', 'Mama Rama'),
    ev(4, 'grove', '16:15', '17:45', 'Reading Your Birth Chart, Simply', 'Selena'),
    ev(4, 'shala', '16:15', '17:30', 'Partner Yoga · Borrowed Weight', 'Mira & Tom'),
    ev(4, 'shala', '18:00', '20:00', 'Ecstatic Dance · Connected', 'Ohm Selecta'),
    ev(4, 'temple', '20:30', '22:30', 'The Awakening Fire Ceremony', 'all the guides'),
    ev(4, 'temple', '22:30', '23:00', 'Mantra Under The Stars', 'the whole tribe')
  ],
  [
    ev(5, 'shala', '06:30', '07:45', 'The Last Sunrise Sadhana', 'Amara'),
    ev(5, 'dome', '09:00', '10:00', 'One More Cold One', 'Betika'),
    ev(5, 'grove', '10:30', '11:45', 'Taking It Home · A Practical Talk', 'Elif'),
    ev(5, 'garden', '11:00', '12:00', 'Quiet Strings', 'Luka'),
    ev(5, 'chai', '13:00', '15:00', 'The Long Chai', 'Yara'),
    ev(5, 'hearth', '14:00', '15:30', 'Letters To Yourself · Writing Ritual', 'Selena'),
    ev(5, 'shala', '16:00', '17:15', 'Closing The Body · Restorative', 'Amara'),
    ev(5, 'temple', '18:00', '20:00', 'Closing Ceremony · Sacred Truth', 'all the guides'),
    ev(5, 'temple', '20:30', '22:00', 'The Last Fire', 'the whole tribe')
  ]
];
