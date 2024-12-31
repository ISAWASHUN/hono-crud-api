import { sql } from "drizzle-orm"
import {int, integer, sqliteTable, text} from "drizzle-orm/sqlite-core"

export const todoTable = sqliteTable("todo_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  description: text(),
  completed: integer({ mode: 'boolean' }),
  created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
  updated_at: text().default(sql`(CURRENT_TIMESTAMP)`),
})
