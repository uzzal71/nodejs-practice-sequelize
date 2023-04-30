import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import Actor from "./Actor";

const Movie = sequelize.define('Movie', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'movies',
    timestamps: true
});

Movie.belongsToMany(Actor, {
    through: 'actor_movies'
});

export default Movie;