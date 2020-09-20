# FIFA 21 - Top 100 Best players

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), that has as objective learn more about Next.js and Typescript with the [EA Sports FIFA 21 Top 100 players database](https://www.ea.com/games/fifa/fifa-21/ratings/ratings-database) consuming their API services using [SWR library](https://swr.vercel.app/):

- [Top 100 players pageable list](https://ratings-api.ea.com/v2/entities/fifa-21?filter=&sort=ranking:ASC&limit=20&offset=0)

- [Specific player select](https://ratings-api.ea.com/v2/entities/fifa-21?filter=primaryKey:158023)

- [Specific player picture](https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/f20assets/player-headshots/158023.png)

- [Specific player UT Card](https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/f20assets/player-shields/158023.png)


## Features - TODO

- List players pageble [100%]
- Select a player [100%]
- Animate UT card select [100%]
- Deploy on Vercel [100%]

## Techs used

 - [Next.js](https://nextjs.org/)
 - [SWR library](https://swr.vercel.app/)
 - [React Redux 7.2](https://react-redux.js.org/)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
