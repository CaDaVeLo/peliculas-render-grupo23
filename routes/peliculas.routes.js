import express from 'express'
import peliculasService from '../services/peliculas.service.js'
import verificarToken from '../middlewares/auth.js'

const router = express.Router()

router.get('/', verificarToken, async (req, res) => {
    const peliculas = await peliculasService.getPeliculas()
    res.send(peliculas)
})

router.get('/:id', verificarToken, async (req, res) => {
    const pelicula = await peliculasService.getPelicula(req.params.id)
    if (!pelicula) return res.status(404).send('No encontrada')
    res.send(pelicula)
})

router.post('/', verificarToken, async (req, res) => {
    const nueva = await peliculasService.createPelicula(req.body)
    res.status(201).send(nueva)
})

router.put('/:id', verificarToken, async (req, res) => {
    const actualizada = await peliculasService.updatePelicula(req.params.id, req.body)
    if (!actualizada) return res.status(404).send('No encontrada')
    res.send(actualizada)
})

router.delete('/:id', verificarToken, async (req, res) => {
    const eliminada = await peliculasService.deletePelicula(req.params.id)
    if (!eliminada) return res.status(404).send('No encontrada')
    res.send('Eliminada correctamente')
})

export default router