import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { TodoModule } from './todo/todo.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'testdb',
      autoLoadEntities: true,
      synchronize: false, // ❌ disable in production, use migrations instead
    }),
    TodoModule,
    // TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
