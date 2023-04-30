import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import Movie from "./Movie ";
import Actor from "./Actor";

const ActorMovie = sequelize.define('ActorMovie', {
    movie_id: {
        type: DataTypes.NUMBER,
        references: {
            model: Movie,
            key: 'id'
        },
        allowNull: false
    },
    actor_id: {
        type: DataTypes.STRING,
        references: {
            model: Actor,
            key: 'id'
        },
        allowNull: false
    }
},{
    tableName: 'actor_movies',
    timestamps: true
});

export default ActorMovie;