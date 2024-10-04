import { db, Project } from 'astro:db';

export default async function() {
  await db.insert(Project).values(
    [
      { 
        id: crypto.randomUUID(),
        name: "SpaceXLaunches",
        desc: "An application built with AstroJS that uses the SpaceXdata API to display the latest SpaceX launches.",
        homePage: "https://spacexlaunches-b.vercel.app/",
        img: "https://firebasestorage.googleapis.com/v0/b/imgspor.appspot.com/o/spacex.png?alt=media&token=2e200b65-f9c6-4cf3-963c-4bcf6d2e6b01"
      },
      {
        id: crypto.randomUUID(),
        name: "SnakeJS",
        desc: "A modern take on the classic Snake game, built with JavaScript, HTML, and CSS. The game features responsive design.",
        homePage: "https://jsnake.vercel.app/",
        img: "https://firebasestorage.googleapis.com/v0/b/imgspor.appspot.com/o/Screenshot%202024-03-26%20123829.png?alt=media&token=ca233e29-6c6a-4bc8-8321-6f8f4ffa9148"
      },
    ]
  )
}