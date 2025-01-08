import React from 'react';
import { AboutContainer, Title, Paragraph } from '../components/AboutStyle';

const About = () => {
    return (
        <AboutContainer>
            <Title>Sobre</Title>
            <Paragraph>
                Sou desenvolvedor FullStack e atualmente estou cursando Análise 
                e Desenvolvimento de Sistemas, consolidando minha base acadêmica
                para complementar minha experiência prática. Tenho um forte 
                conhecimento em diversas tecnologias modernas, incluindo
                JavaScript e TypeScript para desenvolvimento Front-end e 
                Back-end, frameworks e bibliotecas como React para interfaces
                de usuário dinâmicas, e MySQL para gerenciamento eficiente 
                de bancos de dados relacionais. Além disso, sou proficiente 
                em Python e Git, com uma sólida compreensão de HTML e CSS
                para construção de interfaces acessíveis e responsivas.
                Minha abordagem de desenvolvimento é pautada pela busca 
                constante por soluções inovadoras e otimizadas, 
                com foco na criação de aplicações de alto desempenho, 
                escalabilidade robusta e interfaces intuitivas. 
                Valorizo a atenção aos detalhes tanto no design da experiência 
                do usuário quanto na arquitetura de sistemas, 
                garantindo eficiência no processamento de dados e 
                manutenibilidade de código. Busco contribuir para projetos 
                desafiadores que impulsionem a inovação tecnológica e 
                proporcionem experiências excepcionais para os usuários finais.
            </Paragraph>
        </AboutContainer>
    );
};

export default About;
