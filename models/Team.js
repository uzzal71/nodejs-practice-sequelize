import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Team = sequelize.define('Team', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Team;