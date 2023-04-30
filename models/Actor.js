import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import Movie from "./Movie ";

const Actor = sequelize.define('Actor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'actors',
    timestamps: true
});

Actor.belongsToMany(Movie, {
    through: 'actor_movies'
});

export default Actor;