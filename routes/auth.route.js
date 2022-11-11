import { Router } from 'express'
import { login , register} from '../controllers/auth.controller.js'
import { body } from 'express-validator'
import { validationResultExpress } from '../middlewares/validationResultExpress.js'

const router = Router()

router.post('/login', [
    body('email', 'Formato de email incorrecto').trim().isEmail().normalizeEmail(),
    body( 'password', 'password minimo 6 caracteres' ).trim().isLength( { min:6 } )
], validationResultExpress,login)

router.post('/register', [
    body('email', 'Formato de email incorrecto').trim().isEmail().normalizeEmail(),
    body( 'password', 'password minimo 6 caracteres' ).trim().isLength( { min:6 } ),
    body( 'password', 'Formato de password incorecto' ).trim().custom( (value, { req })=>{
        if (value !== req.body.repassword) {
            throw new Error( 'No coinciden las contraseñas' )
        }
        return value
        } )
    ],validationResultExpress, register)

export default router
