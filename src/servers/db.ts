import { Sequelize, DataTypes, Model } from 'sequelize';
import pg from 'pg';
import { DATABASE_URL } from '@/config/db';

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  dialectModule: pg,
  logging: false,
  dialectOptions: {},
});

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

sequelize.sync();

export { sequelize, Todo };