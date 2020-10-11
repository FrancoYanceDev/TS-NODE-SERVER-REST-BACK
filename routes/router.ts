import {Router, Request, Response} from 'express';

const router = Router();
router
    .get('/mensajes', (req: Request, res: Response) => {
        res.json({
            ok : true,
            mensaje : 'ok'
        });
    })


    // x-www-form-urlencoded, verbo POST
    .post('/mensajes', (req: Request, res: Response) =>{
        const cuerpo = req.body.data;
        
        res.json({
            ok: true,
            cuerpo: cuerpo
        });
    })

    .post('/mensajes/:id', (req: Request, res: Response) =>{
        const cuerpo = req.body.data;           //Body form
        const dataUrl = req.params.id;         //Paràmetros en la URL
        
        res.json({
            ok: true,
            cuerpo: cuerpo,
            dataUrl
        });
    });

export default router;