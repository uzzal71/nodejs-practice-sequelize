import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Movie = sequelize.define('Movie', {});

export default Movie;