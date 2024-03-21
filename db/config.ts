import { defineDb } from 'astro:db';
import { defineTable, column, NOW } from 'astro:db';

const Proyects = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    desc: column.text(),
    homePage: column.text()
  },
});

export default defineDb({
  tables: {
    Proyects
  },
})

