import { DataTypes } from "sequelize";
import sequelize from '../../config/sequelize';
import Address from "./Address";

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

User.hasOne(Address, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

export default User;