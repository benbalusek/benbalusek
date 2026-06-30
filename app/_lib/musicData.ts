import type { StaticImageData } from "next/image";

import smallImg1 from "@/public/music/01-album-sm.jpg";
import smallImg2 from "@/public/music/02-album-sm.jpg";
import smallImg3 from "@/public/music/03-album-sm.jpg";
import smallImg4 from "@/public/music/04-album-sm.jpg";
import smallImg5 from "@/public/music/05-album-sm.jpg";
import smallImg6 from "@/public/music/06-album-sm.jpg";
import smallImg7 from "@/public/music/07-album-sm.jpg";
import smallImg8 from "@/public/music/08-album-sm.jpg";
import smallImg9 from "@/public/music/09-album-sm.jpg";
import smallImg10 from "@/public/music/10-album-sm.jpg";
import smallImg11 from "@/public/music/11-album-sm.jpg";

import mediumImg1 from "@/public/music/01-album-md.jpg";
import mediumImg2 from "@/public/music/02-album-md.jpg";
import mediumImg3 from "@/public/music/03-album-md.jpg";
import mediumImg4 from "@/public/music/04-album-md.jpg";
import mediumImg5 from "@/public/music/05-album-md.jpg";
import mediumImg6 from "@/public/music/06-album-md.jpg";
import mediumImg7 from "@/public/music/07-album-md.jpg";
import mediumImg8 from "@/public/music/08-album-md.jpg";
import mediumImg9 from "@/public/music/09-album-md.jpg";
import mediumImg10 from "@/public/music/10-album-md.jpg";
import mediumImg11 from "@/public/music/11-album-md.jpg";

export type Music = {
  id: number;
  smallSrc: StaticImageData;
  mediumSrc: StaticImageData;
  alt: string;
  songTitle: string;
  lyrics: string;
  songUrl: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  bandcampUrl: string;
  youTubeUrl: string;
};

export const albums: Music[] = [
  {
    id: 1,
    smallSrc: smallImg1,
    mediumSrc: mediumImg1,
    alt: "Early Days by Medvedi",
    songTitle: "Take Me Back",
    lyrics: `Oh take me back to where I used to be when I was younger
    Take me back to where I used to be when I was younger

    Oh we were so afraid of life
    With every time I got your letter
    I thought that things would change
    You thought the same thing

    Ya and we both thought things were so oh unforgiving
    And life never seems to say goodbye when I’m ready
    I hope you’re ready for this time

    Take me back to where I used to be when I was younger
    Take me back to where I used to be when I was younger

    I remember that day I left 
    And I remember the night before
    You always swore you’d stay forever by my side

    So take me back to where I used to be when I was younger
    Take me back to where I used to be when I was younger

    No matter where I’m headed I will stay in your life
    No matter where I’m headed I will stay by your side`,
    songUrl: "https://open.spotify.com/embed/track/7xh38HerzK6FvQHP0okKO1",
    spotifyUrl: "https://open.spotify.com/album/67wGQ2Q8k1kbWHxFlqPyLy",
    appleMusicUrl: "https://music.apple.com/us/album/early-days/1749123781",
    bandcampUrl: "https://medvedi.bandcamp.com/album/early-days",
    youTubeUrl: "https://youtu.be/4H2zEKk3S6I",
  },
  {
    id: 2,
    smallSrc: smallImg2,
    mediumSrc: mediumImg2,
    alt: "Half Asleep on the Floor by Medvedi",
    songTitle: "Taylor Wanted to Call This Song Beorn",
    lyrics: `Why can’t we lay our burdens down
    And let them be taken as they are
    It’s you and me that are falling to the ground
    I can’t carry all this weight around

    Lord give me a peace in my heart
    Cause everything just falls apart

    I’m on my own for the first time in a while
    But I’ve been back there through phone calls and seldom letters
    It’s hard to live when you feel like you’re alone
    God take my life and lead me back to my home

    What do I have to offer
    But my words and my frail decisions
    What do I have to offer
    Take my life and make it yours`,
    songUrl: "https://open.spotify.com/embed/track/41cLjZ4SmHjUD9WRJwJCsM",
    spotifyUrl: "https://open.spotify.com/album/2R9uvE3bBX6CNKW2163saB",
    appleMusicUrl:
      "https://music.apple.com/us/album/half-asleep-on-the-floor-ep/1749001780",
    bandcampUrl: "https://medvedi.bandcamp.com/album/half-asleep-on-the-floor",
    youTubeUrl: "https://youtu.be/boHZ9-_Vvdw",
  },
  {
    id: 3,
    smallSrc: smallImg3,
    mediumSrc: mediumImg3,
    alt: "Coppertone Girls by Medvedi",
    songTitle: "Eight Years",
    lyrics: `Today, I lost myself
    I didn’t know where to go
    I was afraid of tomorrow
    I’m still not quite sure where I’m headed
    I don’t quite understand the logic 
    That’s inside of your head
    I don’t quite understand 
    The logic inside of mine
    Mine

    You told me you would leave
    And I still don’t know why I make
    So much of myself about you
    I’m afraid that I’ll end up
    Just like the man that you became
    I’m done with these phone calls
    And acting like we are family every time
    Every time

    Don’t come crying back to me
    Crying back to me`,
    songUrl: "https://open.spotify.com/embed/track/5MzqKRJm4xiAo5eKOLd5LO",
    spotifyUrl: "https://open.spotify.com/album/7bmXmtPCpNcRWwq4u621Ix",
    appleMusicUrl:
      "https://music.apple.com/us/album/coppertone-girls-single/1748716438",
    bandcampUrl: "https://medvedi.bandcamp.com/album/coppertone-girls",
    youTubeUrl: "https://youtu.be/5Ub4gP0Jqw8",
  },
  {
    id: 4,
    smallSrc: smallImg4,
    mediumSrc: mediumImg4,
    alt: "BUG by Medvedi",
    songTitle: "Northern California",
    lyrics: `I hope that you call back soon
    And I hope that this drive wasn’t just for nothing
    And I hope that you call back soon
    Or I might have to just call again

    I don’t know why I left
    I could’ve traveled with you when you got out of school
    And I don’t know why I left
    Sometimes it’s hard not to regret

    So please don’t forget about me
    Please don’t forget about who I was
    Please don’t forget about me
    Just try your best not to forget

    I hope that you call back soon
    And I hope that this drive wasn’t just for nothing
    And I hope that you call back soon
    Or I might have to just drive back home 

    So please don’t forget about me
    Please don’t forget about who I was
    Please don’t forget about me
    Just try your best not to forget
    Just try your best not to forget
    Just try your best not to forget me`,
    songUrl: "https://open.spotify.com/embed/track/4mejw7A3nHxYmhlDzzbJWo",
    spotifyUrl: "https://open.spotify.com/album/0vtCt25l0dXZLl2HaBf3eh",
    appleMusicUrl: "",
    bandcampUrl: "https://medvedi.bandcamp.com/album/bug",
    youTubeUrl: "https://youtu.be/NnswvL1rdXM",
  },
  {
    id: 5,
    smallSrc: smallImg5,
    mediumSrc: mediumImg5,
    alt: "Upside Down by Medvedi",
    songTitle: "Hare or Tortoise",
    lyrics: `I let you in 
    The moment that you said 
    I love you for the thing that you are
    I want this to be heaven
    Cause I’m scared there isn’t one anywhere else

    If it’s a race to the top I’ll finish at the bottom
    I’m the hare and I don’t care to beat the tortoise
    When all’s said and done, I’ll only leave behind a chorus
    So you’ll sing along and feel alright

    Life moves slow when you let it
    If there ain’t time to meet the goal don’t sweat it
    It’s all in your head
    We gotta take care of each other
    We gotta take care of each other

    If it’s a race to the top I’ll finish at the bottom
    I’m the hare and I don’t care to beat the tortoise
    When all’s said and done, I’ll only leave behind a chorus
    So you’ll sing along and feel alright`,
    songUrl: "https://open.spotify.com/embed/track/6J3fzIQxthotvr47EAQRgI",
    spotifyUrl: "https://open.spotify.com/album/0SBYiHSIjaaVEhZCQ2uY8E",
    appleMusicUrl: "https://music.apple.com/us/album/upside-down/1293436053",
    bandcampUrl: "https://medvedi.bandcamp.com/album/upside-down",
    youTubeUrl: "https://youtu.be/A4hkSsZlWZQ",
  },
  {
    id: 6,
    smallSrc: smallImg6,
    mediumSrc: mediumImg6,
    alt: "Dreams by Medvedi",
    songTitle: "Holiday",
    lyrics: `Holiday
    A million miles away
    Will I go or will I stay?
    Will I pass away?

    Can’t conceive not to be
    All I know is all I see
    Do you see me in your dreams?
    Learn to think to learn to look to
    Learn to find out that you don’t know anything

    Holding on
    Cause I can’t let things go
    A part of you is a part of my soul
    A part of me is somewhere

    Can’t conceive not to be
    All I know is all I see
    Do you see me in your dreams?
    Learn to think to learn to look to
    Learn to find out that you don’t know anything

    `,
    songUrl: "https://open.spotify.com/embed/track/41zlhZVGvA7vmhyVzoONOV",
    spotifyUrl: "https://open.spotify.com/album/3VeoeQjJjCxUGdUdWVqk1n",
    appleMusicUrl:
      "https://music.apple.com/us/album/dreams-acoustic-ep/1368574612",
    bandcampUrl: "https://medvedi.bandcamp.com/album/dreams",
    youTubeUrl: "https://youtu.be/QKcZK1_YKn8",
  },
  {
    id: 7,
    smallSrc: smallImg7,
    mediumSrc: mediumImg7,
    alt: "Unwind by Medvedi",
    songTitle: "Information Age",
    lyrics: `Streetlights, where are you?
    What do you see?
    I see the moon
    Seeing the world away from you
    On my bed
    Wherever I decide to sleep
    I wish you were there
    On my bed

    No more space for the objects we create
    I want to let go
    The information age didn’t give us what we need
    Time to change

    Waking from a dream
    This city breathes
    I hold my breath, listening
    For a vision we haven’t seen
    Who are we
    If we refuse to show empathy?
    Look in the mirror
    Who are we?

    We know but we don’t want to change
    We change but we don’t want to know
    We know but we don’t want to change
    You know but you don’t want to know
    Oh there ain’t no place left to go
    We know but we don’t want to know
    Oh I know but I don’t want to change
    We change but we don’t want to know

    No more space for the objects we create
    I want to let go
    The information age didn’t give us what we need
    Time to change

    No more hate, no more
    No more shame, no more
    No more fear, no more
    No more greed, no more
    No more doubt, no more
    No more regret, no more`,
    songUrl: "https://open.spotify.com/embed/track/3AsbOorkkaKh5KjyQZkrct",
    spotifyUrl: "https://open.spotify.com/album/4m7JITAWPIkfBO7V7VlDXV",
    appleMusicUrl: "https://music.apple.com/us/album/unwind/1414643546",
    bandcampUrl: "https://medvedi.bandcamp.com/album/unwind",
    youTubeUrl: "https://youtu.be/JWNAiDOyiZg",
  },
  {
    id: 8,
    smallSrc: smallImg8,
    mediumSrc: mediumImg8,
    alt: "New World by Medvedi",
    songTitle: "New World",
    lyrics: `These days
    Stuck in a mirror
    I stare at my phone when it tells me to
    Out of view, out of space
    Is what we create worth all that we take away

    I, I know you want change
    But change don’t come unless it comes from you
    I know you want peace but saving trees won’t grow economies
    I know you want a new world, well so do I
    I know you want to write it all down
    Take a train to the coast
    Haunt my brain as your words become part of your ghost

    Undiagnosed
    As we take more than we need from everything
    Call an attack
    When we don’t get what we want, we don’t just push back

    I, I know you want change
    But change don’t come unless it comes from you
    I know you want peace but polices are bought by industries
    I know you want a new world, another time
    I know you want to get the hell out
    Sleep outside by a stream
    Have a vision of all as you fall back asleep

    I know you well
    I know you want a new world`,
    songUrl: "https://open.spotify.com/embed/track/6ZxEatD5lf2kEwPYPILRAF",
    spotifyUrl: "https://open.spotify.com/album/4STans97CKa1wiwzfMssQS",
    appleMusicUrl:
      "https://music.apple.com/us/album/new-world-single/1444547590",
    bandcampUrl: "https://medvedi.bandcamp.com/album/new-world",
    youTubeUrl: "https://youtu.be/vqSmRVXyCvo",
  },
  {
    id: 9,
    smallSrc: smallImg9,
    mediumSrc: mediumImg9,
    alt: "Death and Rebirth by Medvedi",
    songTitle: "Addicted",
    lyrics: `Doors open
    I can see the world is suffering
    Pictures are crawling through my head
    Are we content with ignorance?
    Standing near where you made your bed
    Building it up to not forget
    While you’re creating, I’ll be sitting
    And the world all goes to shit

    Addicted to my phone
    Addicted to myself
    I’m addicted to your love
    Addicted to getting stoned

    Call my name
    I’ll respond that it’s all in vein
    Seeking solace from your pain
    For all you take, what’s left to gain
    I am the spirit in your dreams
    The nothingness held inside a frame
    Broken, abandoned, rearranged
    The cause of my own misfortune

    Addicted to my fridge
    Addicted to my sins
    I’m addicted to my thoughts
    Addicted to Netflix
    Addicted to time
    Addicted to my mind
    I’m addicted to biting my nails
    Addicted to sex

    Where do we go when we’re on top of it all?
    Let me just float and watch the world sink below
    Let it all fade

    Back into where it came
    Yours is a piece of me
    But peace is so fleeting
    Selling our hearts for gold
    Your authenticity was sold
    Though I’d pay a little more
    I’ll take what I can hold

    Addicted to my stuff
    Addicted to my songs
    I’m addicted to your likes
    Addicted to pain
    Addicted to girls
    Addicted to caffeine
    I’m addicted to getting drunk
    Addicted to TV

    I don’t know where I’m going
    I hold a piece of you close and watch the sun be reborn
    Let it all go`,
    songUrl: "https://open.spotify.com/embed/track/020nJJPJz3iM90DG4uZcAK",
    spotifyUrl: "https://open.spotify.com/album/4KFx6D52IPvpPOBYe522wM",
    appleMusicUrl:
      "https://music.apple.com/us/album/death-and-rebirth/1533671864",
    bandcampUrl: "https://medvedi.bandcamp.com/album/death-and-rebirth",
    youTubeUrl: "https://youtu.be/mqaY1toX7ZM",
  },
  {
    id: 10,
    smallSrc: smallImg10,
    mediumSrc: mediumImg10,
    alt: "I to Eye by Medvedi",
    songTitle: "Here In My World",
    lyrics: `Walking in this place
    I can see patterns in the space
    Pictures are singing their embrace
    I can be happy

    If when looking at a tree
    I can see it is just a tree
    A living, perceiving entity
    We are this place

    Here in my world
    I can hear the birds
    I read your pain online
    I feel your pain

    Talking in your sleep
    I respond, Taylor, you hear me
    Are you still inside your dream
    Are you happy

    Waking up at dawn
    I can see the sun is being born
    Clouds above are making love
    Was I dreaming

    Our car is freezing cold
    On the side of this old road
    My bladder might explode
    We are living

    Here in my world
    I can hear the birds
    I saw your pain online
    I feel your pain

    Here in my world
    I drive through deserts
    You are the thing you need
    You are me`,
    songUrl: "https://open.spotify.com/embed/track/33qlMqUktu3fFkspCbie5u",
    spotifyUrl: "https://open.spotify.com/album/4YzZObqZsOArHN9HUhdrpT",
    appleMusicUrl: "https://music.apple.com/us/album/i-to-eye/6785355961",
    bandcampUrl: "https://medvedi.bandcamp.com/album/i-to-eye",
    youTubeUrl: "https://youtu.be/dNootUwC1WQ",
  },
  {
    id: 11,
    smallSrc: smallImg11,
    mediumSrc: mediumImg11,
    alt: "Sun and Silhouettes by Medvedi",
    songTitle: "Silhouettes",
    lyrics: `Breathing your sweet air
    Birds swimming in the wind
    In time, all is felt
    Bury your sword and call it vein
    To fight for gain
    In pain, we are one
    Relive the steady flow
    You’re in my room then I’m on the road

    Silhouettes
    Paint the world below
    With every single step
    With every single breath
    We feel, perceive

    Fetching the dog in me
    Your inner grace is felt as balls are chased
    Being a beast, I roam
    These barren peaks my feet call home

    Silhouettes
    Paint the world below
    With every single step
    With every single breath
    We feel, perceive

    Sitting on my floor
    Though words adore, we savor more
    Laughing, your soul in me
    That inner peace buried beneath

    Silhouettes
    Against my window
    The sound as the wind pulls
    The leaves on the tree
    Outside my bedroom
    What abundance you store
    What vast enormity
    New worlds are formed
    With every morning
    Tiny creatures sing out
    Birds chant in melody
    The sea resounds
    And I play my tune`,
    songUrl: "https://open.spotify.com/embed/track/5EvKXIVouRrS9kHjayOvvX",
    spotifyUrl: "https://open.spotify.com/album/4UmoTmO3C1EwY6YbyYqCQ2",
    appleMusicUrl:
      "https://music.apple.com/us/album/sun-and-silhouettes-single/6785334050",
    bandcampUrl: "https://medvedi.bandcamp.com/album/sun-and-silhouettes",
    youTubeUrl: "https://youtu.be/IPqiiFNkRxo",
  },
];
