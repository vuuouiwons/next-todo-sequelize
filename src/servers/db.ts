import { Sequelize, DataTypes, Model } from 'sequelize';
import pg from 'pg';

// Verify the environment variable exists
const DATABASE_URL = 'postgres://user:password@postgres_db:5432/todolist_nextjs'

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  dialectModule: pg, // Crucial for Next.js App Router compatibility
  logging: false,
  dialectOptions: {},
});

// Define the Todo Model (This remains exactly the same)
class Todo extends Model {
  declare id: number;
  declare title: string;
  declare completed: boolean;
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Todo',
  }
);

// Synchronize the model with the database
sequelize.sync();

export { sequelize, Todo };