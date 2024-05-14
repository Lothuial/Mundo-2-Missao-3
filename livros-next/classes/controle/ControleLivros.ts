import Livro from '../modelo/Livros'

const livros: Array<Livro> = [
    {
       codigo: 1,
       codEditora: 1,
       titulo: 'Use a Cabeça: Java',
       resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (POO) e Java.',
       autores: ['Bert Bates', 'Kathy Sierra']
    },
    {
       codigo: 2,
       codEditora: 2,
       titulo: 'Java, Como Programar',
       resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel',
       autores: ['Paul Deitel', 'Harvey Deitel']
    },
    {
       codigo: 3,
       codEditora: 3,
       titulo: 'Core Java for the Impatient',
       resumo: 'Readers familiar with Horstmann\u2019s original, two-volume \u201cCore Java\u201d books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.',
       autores: ['Cay Horstmann']
    }
 ];

export default class ControleLivros {
    livros: Array<Livro>;

    constructor(livros: Array<Livro>) {
        this.livros = livros;
    }

    obterLivros() {
        return livros;
    }

    incluir(livro: Livro) {
      livro.codigo = livros.length > 0 ? livros.at(-1)!.codigo + 1 : 1;
      livros.push(livro);
    }
  
    excluir(codigo: number) {
      const index = livros.findIndex((livro) => livro.codigo === codigo);
      livros.splice(index, 1);
    }
}