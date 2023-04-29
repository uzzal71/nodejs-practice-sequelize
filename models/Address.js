import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Address = sequelize.define('Address', {});

export default Address;