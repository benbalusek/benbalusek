import type { StaticImageData } from "next/image";

import smallImg1 from "@/public/music/01-small.jpg";
import smallImg2 from "@/public/music/02-small.jpg";
import smallImg3 from "@/public/music/03-small.jpg";
import smallImg4 from "@/public/music/04-small.jpg";
import smallImg5 from "@/public/music/05-small.jpg";
import smallImg6 from "@/public/music/06-small.jpg";

import mediumImg1 from "@/public/music/01-medium.jpg";
import mediumImg2 from "@/public/music/02-medium.jpg";
import mediumImg3 from "@/public/music/03-medium.jpg";
import mediumImg4 from "@/public/music/04-medium.jpg";
import mediumImg5 from "@/public/music/05-medium.jpg";
import mediumImg6 from "@/public/music/06-medium.jpg";

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
    alt: "Sun and Moon and Silhouettes by Kali Yuga",
    songTitle: "Sun and Moon",
    lyrics: `Where are you now?
    The past is inside of us
    How do I love?
    What’s holding me down?
    What’s lost is what’s yet to be found
    And I know
    Your face in my dreams
    The world is alive, everything inside us
    All form entropy
    Your words, they sing

    Light, take me home
    See the moon, feeling your soul
    Love, all is love
    Sun and moon, know they are one

    Who are we now?
    The earth holds the truth in the ground
    I want to tear it all down
    The heavens they speak for themselves
    And I know
    What they look like
    Turn off your phone, go outside
    And drive out past city lights
    Your world, it shines

    Light, take me home
    See the moon, feeling your soul
    Love, all is love
    Sun and moon, know they are one`,
    songUrl: "https://open.spotify.com/embed/track/51QyP2wiN59iQ8XLmS4h9Y",
    spotifyUrl: "https://open.spotify.com/album/5aDSZl3OuQuX7IQ52ltUpx",
    appleMusicUrl:
      "https://music.apple.com/us/album/sun-and-moon-and-silhouettes-single/1748810460",
    bandcampUrl:
      "https://kaliyugatx.bandcamp.com/album/sun-and-moon-and-silhouettes",
    youTubeUrl: "https://www.youtube.com/watch?v=HGHQ91F-gxU",
  },
  {
    id: 2,
    smallSrc: smallImg2,
    mediumSrc: mediumImg2,
    alt: "I to Eye by Ben Balusek",
    songTitle: "Here in my World",
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
    songUrl: "https://open.spotify.com/embed/track/1YfCcuHSIa1tZES6RiDvbE",
    spotifyUrl: "https://open.spotify.com/album/37LEqtDHssistvvpWhp383",
    appleMusicUrl: "https://music.apple.com/us/album/i-to-eye/1748716700",
    bandcampUrl: "https://benbalusek.bandcamp.com/album/i-to-eye",
    youTubeUrl: "https://www.youtube.com/watch?v=93LHq_egNFw",
  },
  {
    id: 3,
    smallSrc: smallImg3,
    mediumSrc: mediumImg3,
    alt: "Addicted by Medvedi",
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
    youTubeUrl: "https://youtu.be/mqaY1toX7ZM?si=rIOTPEIvZRv0Bnkw",
  },
  {
    id: 4,
    smallSrc: smallImg4,
    mediumSrc: mediumImg4,
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
    youTubeUrl: "https://www.youtube.com/watch?v=vqSmRVXyCvo",
  },

  {
    id: 5,
    smallSrc: smallImg5,
    mediumSrc: mediumImg5,
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
    youTubeUrl: "https://www.youtube.com/watch?v=JWNAiDOyiZg",
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
    youTubeUrl: "https://www.youtube.com/watch?v=QKcZK1_YKn8",
  },
];
