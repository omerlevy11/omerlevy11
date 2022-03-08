import * as React from 'react';
import TechCard from '../techCards/techCard'
import angular from '../../assets/angular-logo.png'
import git from '../../assets/git-logo.png'
import java from '../../assets/java-logo.png'
import kotlin from '../../assets/kotlin-logo.svg'
import nestjs from '../../assets/nestjs-logo.svg'
import nodejs from '../../assets/nodejs-logo.png'
import react from '../../assets/react-logo.png'
import scss from '../../assets/scss-logo.png'
import sql from '../../assets/sql-logo.png'
import ts from '../../assets/ts-logo.png'
import vue from '../../assets/vue.png'
import c from '../../assets/c.png'
import cpp from '../../assets/cpp.png'
import csh from '../../assets/csh.png'
import flutter from '../../assets/flutter.png'
import elastic from '../../assets/elastic.png'
import mongo from '../../assets/mongo.png'
import express from '../../assets/Expressjs.png'
import './technologies.css'
const cards = [
    { tech: 'Angular', image: angular },
    { tech: 'Git', image: git },
    { tech: 'Java', image: java },
    { tech: 'Kotlin', image: kotlin },
    { tech: 'Nest.Js', image: nestjs },
    { tech: 'Node.Js', image: nodejs },
    { tech: 'React', image: react },
    { tech: 'Scss', image: scss },  
    { tech: 'SQL', image: sql },
    { tech: 'TypeScript', image: ts },
    { tech: 'vue.Js', image: vue },
    { tech: 'C', image: c },
    { tech: 'C++', image: cpp },
    { tech: 'C#', image: csh },
    { tech: 'Flutter', image: flutter },
    { tech: 'MongoDB', image: mongo },
    { tech: 'Vue.Js', image: elastic },
    { tech: 'Express.Js', image: express },
];
const cardElemts = cards.map((card) => <TechCard key={card.tech}tech={card.tech} image={card.image} />)
const Technologies = () => {
    return (
        <article className="skills content-article">
            <span className="content-article-title"></span>
            <section className="skills-body content-article-body">
                {cardElemts}
            </section>
        </article>
    );
};
export default Technologies;