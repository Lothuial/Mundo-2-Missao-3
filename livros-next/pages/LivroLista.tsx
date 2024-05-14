import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Menu } from '../componentes/Menu';
import Livro from '../classes/modelo/Livros';
import { LinhaLivro } from '../componentes/LinhaLivro';
import 'bootstrap/dist/css/bootstrap.css';

const baseURL = 'http://localhost:3000/api/livros';

const LivroLista = () => {
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregado, setCarregado] = useState(false);

    const obterLivro = async () => {
        const promise = await fetch(baseURL);
        const data = await promise.json();
        setLivros(data);
        setCarregado(true);
    };

    const excluirLivro = async (codigo: number) => {
        const excluindo = await fetch (`${baseURL}/${codigo}`, {method: 'DELETE'});
        return excluindo.ok;
    };

    const excluir = async (codigo: number) => {
        const excluindo = await excluirLivro(codigo);
        if (excluindo) {setCarregado(false)};
    };

    useEffect(() => {
        if (!carregado) {obterLivro().then(() => setCarregado(true))}}, 
        [carregado]);

        return (
            <div>
                <Head>
                    <title>Catálogo de Livros</title>
                </Head>
                <Menu/>
                <main>
                    <div className="container-fluid">
                        <h1>Catálogo de Livros</h1>
                        <table className='table'>
                            <thead>
                                <tr className='table-dark'>
                                    <th className='col-2'>Título</th>
                                    <th className='col-4'>Resumo</th>
                                    <th className='col-2'>Editora</th>
                                    <th className='col-2'>Autores</th>
                                </tr>
                            </thead>
                            <tbody>
                                {livros.map(livro => (
                                    <LinhaLivro
                                    key={livro.codigo}
                                    livro={livro}
                                    excluir={() => excluir(livro.codigo)}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        )
}

export default LivroLista