import React from 'react';
import './Projects.css';
import './ChibiDecorations.css';

// Importando os chibis
import chibi1 from '../chibis/Chibi 1.png';
import chibi3 from '../chibis/Chibi 3.png';
import chibi4 from '../chibis/Chibi 4.png';
import chibi5 from '../chibis/Chibi 5.png';
import chibi6 from '../chibis/Chibi 6.png';

const Projects = () => {
  const projects = [
    {
      title: 'Netflix Clone',
      description: 'Clone da interface do Netflix desenvolvido em React.js com funcionalidades de navegação e reprodução.',
      tech: ['React.js', 'CSS3', 'JavaScript'],
      category: 'React',
      chibi: {
        image: chibi1,
        position: 'project-chibi-1'
      }
    },
    {
      title: 'Epic Games Clone',
      description: 'Recriação da loja Epic Games utilizando Angular com design responsivo e moderno.',
      tech: ['Angular', 'TypeScript', 'SCSS'],
      category: 'Angular',
      chibi: {
        image: chibi3,
        position: 'project-chibi-2'
      }
    },
    {
      title: 'URL Shortener',
      description: 'Encurtador de URLs desenvolvido em JavaScript puro com interface intuitiva.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      category: 'JavaScript',
      chibi: {
        image: chibi4,
        position: 'project-chibi-3'
      }
    },
    {
      title: 'Image Gallery',
      description: 'Galeria de imagens interativa com filtros e animações suaves em React.',
      tech: ['React.js', 'CSS3', 'JavaScript'],
      category: 'React',
      chibi: {
        image: chibi5,
        position: 'project-chibi-4'
      }
    },
    {
      title: 'World Tours',
      description: 'Aplicação de turismo mundial desenvolvida em Angular com mapas interativos.',
      tech: ['Angular', 'TypeScript', 'API Integration'],
      category: 'Angular',
      chibi: {
        image: chibi6,
        position: 'project-chibi-5'
      }
    },
    {
      title: 'Geometric Art Generator',
      description: 'Gerador de arte geométrica com algoritmos matemáticos em JavaScript.',
      tech: ['JavaScript', 'Canvas API', 'CSS3'],
      category: 'JavaScript',
      chibi: {
        image: chibi1,
        position: 'project-chibi-6'
      }
    }
  ];

  const categories = ['Todos', 'React', 'Angular', 'JavaScript'];
  const [activeCategory, setActiveCategory] = React.useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Meus Projetos</h2>
        <p className="projects-subtitle">
          Mais de 101 repositórios no GitHub demonstrando minha jornada de desenvolvimento
        </p>
        
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Chibi decorativo */}
              <img 
                src={project.chibi.image} 
                alt="Chibi decorativo" 
                className={`project-chibi ${project.chibi.position}`} 
              />
              
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-category">{project.category}</div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href="https://github.com/DevZank?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver Código
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="github-link-section">
          <a 
            href="https://github.com/DevZank?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-btn"
          >
            Ver Todos os Projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
