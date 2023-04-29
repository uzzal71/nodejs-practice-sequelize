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
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Player.belongsTo(Team, {
    foreignKey: {
        name: 'team_id',
        allowNull: false
    }
})

export default Player;