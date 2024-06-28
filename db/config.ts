import { defineDb } from 'astro:db';
import { defineTable, column } from 'astro:db';

const Proyect = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text({ unique: true }),
    desc: column.text(),
    homePage: column.text(),
    img: column.text()
  },
});

const Experience = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text({ unique: true }),
    desc: column.text(),
    homePage: column.text(),
    img: column.text()
  },
});

export default defineDb({
  tables: {
    Proyect
  },
})

