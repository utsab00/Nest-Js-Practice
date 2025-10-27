import { DataSource } from 'typeorm';
import { Todo } from './src/todo/todo.entity'; // Use actual import, or wildcard

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'testdb',
    entities: [Todo], // ✅ directly import entity for CLI
    // migrations: ['dist/migrations/*.js'], // ✅ compiled JS migrations
    migrations: ['src/migrations/*.ts'],
});
