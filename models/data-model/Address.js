import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";
import User from "./User";

const Address = sequelize.define('Address', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    }
});

Address.belongsTo(User, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    }
})

export default Address;