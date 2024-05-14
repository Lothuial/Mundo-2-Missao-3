import ControleLivros from '../../../classes/controle/ControleLivros';
import type { NextApiRequest, NextApiResponse } from 'next';

export const controleLivros = new ControleLivros([]);

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === "GET") {
            const livros = controleLivros.obterLivros();
            res.status(200).json(livros);
        }
        else if (req.method === "POST") {
            const livroAdd = req.body;
            controleLivros.incluir(livroAdd);
            res.status(200).json({message: "O livro foi adicionado!"});
        }
        else {
            res.status(405).json({message: "Método não permitido"});
        }
    }
    catch (temp) {
        res.status(500).json({message: "Erro do servidor"});
    }
}