import ControleEditora from '../../../classes/controle/ControleEditora';
import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codEditora } = req.query as { codEditora: string };
  try {
    const controleEditora = new ControleEditora([]);
    const editora = controleEditora.getNomeEditora(Number(codEditora));
    if (editora) {
      res.status(200).json(editora);
    }
    else {
      res.status(405).json({
        message: "Método não permitido"
      });
    }
  }
  catch (temp) {
    res.status(500).json({
      message: "Erro do servidor"
    });
  }
}