import Pelicula from '../models/pelicula.model.js'

async function getPeliculas() {
    const data = await Pelicula.findAll();
    return data;
}

async function getPelicula(id) {
    const data = await Pelicula.findByPk(id);
    return data;
}

async function createPelicula(body) {
    const data = await Pelicula.create(body);
    return data;
}

async function updatePelicula(id, body) {
    const pelicula = await Pelicula.findByPk(id);
    if (!pelicula) return null;

    await pelicula.update(body);
    return pelicula;
}

async function deletePelicula(id) {
    const pelicula = await Pelicula.findByPk(id);
    if (!pelicula) return null;

    await pelicula.destroy();
    return true;
}

export default {getPeliculas,getPelicula,createPelicula,updatePelicula,deletePelicula}