import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Actor = sequelize.define('Actor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'actors',
    timestamps: true
});

export default Actor;