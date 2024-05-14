import ControleLivros from '../../../classes/controle/ControleLivros';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {codigo} = req.query as {codigo: string};
    console.log(`codigo = ${codigo}`);
    try {
        const controleLivros = new ControleLivros([]);
        if (req.method === "DELETE") {
            controleLivros.excluir(Number(codigo));
            res.status(200).json({message: "O livro foi excluído!"});
        }
        else {
            res.status(405).json({message: "Método não permitido"})
        }
    }
    catch (temp) {
        res.status(500).json({message: "Erro do servidor"})
    }
}