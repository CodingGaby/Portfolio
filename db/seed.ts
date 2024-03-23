import { db, Proyect } from 'astro:db';

export default async function() {
  await db.insert(Proyect).values([
    { 
      id: 1,
      name: "SpaceXLaunches",
      desc: "Aplicación en Astro ocupando la api \"SpaceXdata\" para mostrar los lanzamientos de SpaceX",
      homePage: "https://spacexlaunches-b.vercel.app/",
      img: "https://firebasestorage.googleapis.com/v0/b/imgspor.appspot.com/o/spacex.png?alt=media&token=2e200b65-f9c6-4cf3-963c-4bcf6d2e6b01"
    },
  ])
}