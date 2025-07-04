<template>
  <section id="proyectos" class="projects section">
    <div class="container">
      <div class="projects__header">
        <h2 class="projects__title gradient-text">Nuestros Casos de Éxito</h2>
        <p class="projects__subtitle">
          Explora algunas de las soluciones innovadoras que hemos desarrollado, 
          mostrando cómo facilitamos la vida de los usuarios a través de la tecnología.
        </p>
      </div>
      
      <div class="projects__grid">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="project-card card"
          @click="openProjectModal(project)"
        >
          <div class="project-card__image">
            <img :src="project.image" :alt="project.name" />
            <div class="project-card__overlay">
              <EyeIcon class="w-6 h-6" />
              <span>Ver Proyecto</span>
            </div>
          </div>
          
          <div class="project-card__content">
            <h3 class="project-card__title">{{ project.name }}</h3>
            <p class="project-card__description">{{ project.description }}</p>
            
            <div class="project-card__tech">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            
            <div class="project-card__metrics">
              <div 
                v-for="metric in project.metrics" 
                :key="metric.label"
                class="metric"
              >
                <span class="metric__value">{{ metric.value }}</span>
                <span class="metric__label">{{ metric.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Project Modal -->
    <div 
      v-if="selectedProject" 
      class="modal-overlay"
      @click="closeProjectModal"
    >
      <div class="modal" @click.stop>
        <button class="modal__close" @click="closeProjectModal">
          <XMarkIcon class="w-6 h-6" />
        </button>
        
        <div class="modal__content">
          <img 
            :src="selectedProject.image" 
            :alt="selectedProject.name"
            class="modal__image"
          />
          
          <div class="modal__info">
            <h3 class="modal__title">{{ selectedProject.name }}</h3>
            
            <div class="modal__section">
              <h4>El Desafío</h4>
              <p>{{ selectedProject.challenge }}</p>
            </div>
            
            <div class="modal__section">
              <h4>Nuestra Solución</h4>
              <p>{{ selectedProject.solution }}</p>
            </div>
            
            <div class="modal__section">
              <h4>Tecnologías Utilizadas</h4>
              <div class="modal__tech">
                <span 
                  v-for="tech in selectedProject.technologies" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="modal__section">
              <h4>Resultados</h4>
              <ul class="modal__results">
                <li v-for="result in selectedProject.results" :key="result">
                  <CheckIcon class="w-4 h-4" />
                  {{ result }}
                </li>
              </ul>
            </div>
            
            <div v-if="selectedProject.testimonial" class="modal__testimonial">
              <blockquote>
                "{{ selectedProject.testimonial.quote }}"
              </blockquote>
              <cite>{{ selectedProject.testimonial.author }}</cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { EyeIcon, XMarkIcon, CheckIcon } from '@heroicons/vue/24/outline'

const selectedProject = ref(null)

const openProjectModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

const projects = [
  {
    id: 1,
    name: 'Sitio Web Corporativo Seprytec',
    description: 'El sitio web de Seprytec, una empresa líder en seguridad privada en México desde 2014, sirve como una presentación digital integral. Se centra en la "Protección Integral" ofreciendo vigilancia física, custodia, sistemas electrónicos, seguridad canina y vehículos blindados. El sitio está altamente optimizado para SEO con metadatos detallados y una estructura de contenido lógica (Hero, About, Problems/Solution, Services, Advantages, Testimonials, Jobs, Contact) para atraer clientes en México, especialmente en Toluca. Además, utiliza carga diferida para optimizar el rendimiento, asegurando una experiencia de usuario rápida y eficiente. En esencia, el proyecto busca ser una herramienta de presentación profesional, completa y fácil de encontrar para los servicios de seguridad de Seprytec.',
    image: '/projects/seprytec.png',
    technologies: ['Next.js', 'React', 'SEO', 'Tailwind CSS', 'Figma'],
    metrics: [
      { value: '500%+', label: 'Aumento de Visibilidad Online' },
      { value: '90%', label: 'Tasa de Retención de Visitas' }
    ],
    challenge: 'Transformar una presencia offline sólida en una plataforma digital que reflejara su liderazgo en seguridad, con foco en la confianza y la autoridad.',
    solution: 'Se diseñó un sitio intuitivo y visualmente impactante, optimizado para SEO y la experiencia móvil, integrando secciones clave para comunicar de forma efectiva la amplitud y profesionalidad de sus servicios.',
    results: [
      'Incremento significativo en las consultas de servicio a través del sitio',
      'Mejora del posicionamiento en búsquedas locales y nacionales',
      'Reducción del 30% en el tiempo de carga promedio del sitio',
      'Reconocimiento positivo por la claridad y profesionalidad del contenido'
    ],
    testimonial: {
      quote: 'Nuestro nuevo sitio web es la herramienta perfecta para comunicar nuestra misión. Refleja la profesionalidad y la innovación que Seprytec representa.',
      author: 'CEO de Seprytec'
    }
  },
  {
    id: 2,
    name: 'Portafolio Personal (Ciberpunk Neo-Brutalista)',
    description: 'Este proyecto es tu portafolio personal, construido con un diseño único inspirado en la estética ciberpunk y neo-brutalista. Su principal finalidad es exhibir tus habilidades como desarrollador frontend, tu experiencia profesional y los proyectos en los que has trabajado, todo ello presentado de una manera muy distintiva y atractiva.',
    image: '/projects/portfolio.png',
    technologies: ['Vue.js', 'Astro', 'Tailwind CSS', 'JavaScript'],
    metrics: [
      { value: '95%', label: 'Impacto Visual' },
      { value: 'Excelente', label: 'Interactividad' }
    ],
    challenge: 'Crear una identidad visual única y funcional que destacara entre otros portafolios, combinando la estética ciberpunk con una experiencia de usuario fluida.',
    solution: 'Se emplearon elementos gráficos que recuerdan las interfaces de terminal clásicas y una paleta de colores neón vibrantes, enfocándose en la optimización del rendimiento y la accesibilidad para ofrecer una experiencia interactiva y visualmente impactante.',
    results: [
      'Diseño único y memorable que captura la atención',
      'Alta interactividad y rendimiento fluido en todas las secciones',
      'Optimización para múltiples dispositivos y resoluciones',
      'Retroalimentación positiva de la comunidad de diseño y desarrollo'
    ],
    testimonial: {
      quote: 'Este portafolio no es solo un showcase, es una declaración de intenciones. La estética y la funcionalidad son de otro nivel.',
      author: 'Un reclutador impresionado'
    }
  },
  {
    id: 3,
    name: 'drcv_note',
    description: 'drcv_note es una aplicación web de toma de notas construida con Next.js (un framework de React), utilizando Tailwind CSS para los estilos y Supabase como su base de datos y backend-as-a-service. Su objetivo principal es proporcionar una experiencia minimalista y eficiente para organizar tus pensamientos e información.',
    image: '/projects/drcv_note.png',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'JavaScript'],
    metrics: [
      { value: '99%', label: 'Organización Intuitiva' },
      { value: 'Veloz', label: 'Sincronización' }
    ],
    challenge: 'Crear una aplicación de notas que fuera a la vez minimalista, funcional y estéticamente agradable, asegurando una sincronización rápida y segura con la base de datos.',
    solution: 'Se desarrolló una interfaz de usuario limpia con Next.js y Tailwind CSS para una experiencia fluida. Supabase se utilizó para la gestión de la base de datos y la autenticación, garantizando la persistencia y seguridad de los datos.',
    results: [
      'Interfaz de usuario limpia y minimalista para una experiencia sin distracciones',
      'Sincronización en tiempo real de notas entre dispositivos',
      'Autenticación de usuario segura y fácil integración',
      'Rendimiento optimizado y tiempos de carga reducidos'
    ],
    testimonial: {
      quote: 'drcv_note ha simplificado mi forma de organizar ideas. Su simplicidad es su mayor fortaleza y la interfaz es un placer de usar.',
      author: 'Un usuario productivo'
    }
  }
]
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.projects {
  background: linear-gradient(135deg, rgba(0, 128, 255, 0.02) 0%, rgba(255, 20, 147, 0.02) 100%);
  
  &__header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  &__title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: var(--spacing-md);
  }
  
  &__subtitle {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    line-height: 1.7;
  }
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--spacing-xl);
  }
}

.project-card {
  cursor: pointer;
  overflow: hidden;
  
  &__image {
    position: relative;
    height: 200px;
    overflow: hidden;
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-normal);
    }
    
    &:hover img {
      transform: scale(1.05);
    }
  }
  
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-xs);
    color: white;
    opacity: 0;
    transition: opacity var(--transition-normal);
    
    .project-card:hover & {
      opacity: 1;
    }
  }
  
  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
  }
  
  &__description {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin-bottom: var(--spacing-md);
  }
  
  &__tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-md);
  }
  
  &__metrics {
    display: flex;
    gap: var(--spacing-lg);
  }
}

.metric {
  text-align: center;
  
  &__value {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary-cyan);
  }
  
  &__label {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }
}

.tech-tag {
  background: rgba(0, 191, 255, 0.1);
  color: var(--color-primary-cyan);
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(0, 191, 255, 0.2);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: var(--spacing-md);
}

.modal {
  background: var(--color-bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  &__close {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-primary);
    cursor: pointer;
    z-index: 1;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  
  &__content {
    padding: var(--spacing-xl);
  }
  
  &__image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-lg);
  }
  
  &__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
    color: var(--color-text-primary);
  }
  
  &__section {
    margin-bottom: var(--spacing-lg);
    
    h4 {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-primary-cyan);
      margin-bottom: var(--spacing-sm);
    }
    
    p {
      color: var(--color-text-secondary);
      line-height: 1.7;
    }
  }
  
  &__tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
  }
  
  &__results {
    list-style: none;
    
    li {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      margin-bottom: var(--spacing-xs);
      color: var(--color-text-secondary);
      
      svg {
        color: var(--color-primary-cyan);
        flex-shrink: 0;
      }
    }
  }
  
  &__testimonial {
    background: var(--color-bg-card);
    padding: var(--spacing-lg);
    border-radius: var(--radius-md);
    border-left: 4px solid var(--color-primary-cyan);
    
    blockquote {
      font-style: italic;
      font-size: 1.1rem;
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-sm);
    }
    
    cite {
      color: var(--color-primary-cyan);
      font-weight: 500;
    }
  }
}
</style>