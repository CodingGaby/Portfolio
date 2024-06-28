import { db, Proyect } from 'astro:db';

export default async function() {
  await db.insert(Proyect).values(
    [
      { 
        id: crypto.randomUUID(),
        name: "SpaceXLaunches",
        desc: "Aplicación en Astro ocupando la api \"SpaceXdata\" para mostrar los lanzamientos de SpaceX",
        homePage: "https://spacexlaunches-b.vercel.app/",
        img: "https://firebasestorage.googleapis.com/v0/b/imgspor.appspot.com/o/spacex.png?alt=media&token=2e200b65-f9c6-4cf3-963c-4bcf6d2e6b01"
      },
      {
        id: crypto.randomUUID(),
        name: "SnakeJS",
        desc: "Juego Snake creado con JavaScript",
        homePage: "https://jsnake.vercel.app/",
        img: "https://firebasestorage.googleapis.com/v0/b/imgspor.appspot.com/o/Screenshot%202024-03-26%20123829.png?alt=media&token=ca233e29-6c6a-4bc8-8321-6f8f4ffa9148"
      },
      {
        id: crypto.randomUUID(),
        name: "Caira",
        desc: "Proyecto de HackTec-Puebla, usando tecnologias de AstroJS, Caira es una red social académica enfocada en la distribucion de articulos de investigacion para socios de Ellucian",
        homePage: "https://caira.vercel.app/",
        img: "https://firebasestorage.googleapis.com/v0/b/imgspor.appspot.com/o/Screenshot%202024-03-26%20123829.png?alt=media&token=ca233e29-6c6a-4bc8-8321-6f8f4ffa9148"
      },
    ]
  )
}