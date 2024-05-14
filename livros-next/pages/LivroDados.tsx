import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Menu } from '../componentes/Menu';
import Livro from '../classes/modelo/Livros';
import { useRouter } from 'next/router';
import ControleEditora from '../classes/controle/ControleEditora';
import 'bootstrap/dist/css/bootstrap.css';

const baseURL = 'http://localhost:3000/api/livros';

const LivroDados = () => {
    const controleEditora = new ControleEditora([]);
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora, text: editora.nome}));
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const navigate = useRouter().push;

    const incluirLivro = async (livro: Livro) => {
        const incluindo = await fetch(baseURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(livro),
        });
        return incluindo.ok;
    };

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const livro = new Livro(0, codEditora, titulo, resumo, autores.split('\n'));
        const incluindo = await incluirLivro(livro);
        if (incluindo) {navigate('/LivroLista')};
    };

    return (
        <div>
            <Head>
                <title>Adicionar Livros</title>
            </Head>
            <Menu/>
            <main>
                <div className='container-fluid'>
                    <h1>Dados do Livro</h1>
                    <form onSubmit={incluir}>
                        <div className='form-group'>
                            <label htmlFor='title'>Título</label>
                            <input className='form-control' id='title' type='text'  value={titulo} onChange= {(temp) => setTitulo(temp.target.value)}/>
                            <label className='mt-2' htmlFor='summary'>Resumo</label>
                            <textarea className='form-control' id='summary' rows={3} value= {resumo} onChange={(temp) => setResumo(temp.target.value)}/>
                            <label className='mt-2' htmlFor='publisher'>Editora</label>
                            <select className='form-control' id='publisher' value= {codEditora} onChange= {tratarCombo}>
                                {opcoes.map((items) => (<option key={items.value}  value={items.value}>{items.text}</option>))}
                            </select>
                            <label className='mt-2' htmlFor='authors'>Autores</label>
                            <textarea className='form-control' id='authors' rows={3}    value= {autores}   onChange={(temp) => setAutores(temp.target.value)}/>
                            <button className='btn btn-primary mt-2' type='submit'>Salvar   Livro</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default LivroDados;