import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import Movie from "./Movie ";
import ActorMovie from "./ActorMovie";

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
    through: ActorMovie
});

export default Actor;