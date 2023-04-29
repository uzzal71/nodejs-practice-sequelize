import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import Player from "./Player";

const Team = sequelize.define('Team', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Team.hasMany(Player, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

export default Team;