import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import Team from "./Team";

const Player = sequelize.define('Player', {
    team_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Team,
            key: 'id'
        },
        allowNull: false
    }
});

export default Player;