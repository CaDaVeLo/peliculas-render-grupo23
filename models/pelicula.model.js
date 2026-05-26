import { DataTypes } from 'sequelize'
import db from './db.js'

const Pelicula = db.define('Pelicula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.INTEGER
    },
    genero: {
        type: DataTypes.STRING
    },
    duracion: {
        type: DataTypes.INTEGER
    }

})

export default Pelicula