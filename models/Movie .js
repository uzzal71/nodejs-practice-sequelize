import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Movie = sequelize.define('Movie', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'movies',
    timestamps: true
});

export default Movie;