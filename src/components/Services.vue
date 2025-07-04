<template>
  <section id="servicios" class="services section">
    <div class="container">
      <div class="services__header">
        <h2 class="services__title gradient-text">Nuestros Servicios Integrales</h2>
        <p class="services__subtitle">
          En DRCV COMPANY, cubrimos el ciclo de vida completo del desarrollo de software, 
          desde la conceptualización hasta la implementación y el mantenimiento, siempre 
          con la mira en facilitar la vida de tus usuarios.
        </p>
      </div>
      
      <div class="services__grid">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="service-card card"
          @mouseenter="setActiveService(service.id)"
          @mouseleave="setActiveService(null)"
        >
          <div class="service-card__icon">
            <component :is="service.icon" class="w-8 h-8" />
          </div>
          
          <h3 class="service-card__title">{{ service.title }}</h3>
          <p class="service-card__emphasis">{{ service.emphasis }}</p>
          
          <ul class="service-card__features">
            <li v-for="feature in service.features" :key="feature">
              <CheckIcon class="w-4 h-4" />
              {{ feature }}
            </li>
          </ul>
          
          <div class="service-card__tech">
            <span class="service-card__tech-label">Tecnologías:</span>
            <div class="service-card__tech-tags">
              <span 
                v-for="tech in service.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CircleStackIcon, 
  CloudIcon, 
  LightBulbIcon,
  CheckIcon 
} from '@heroicons/vue/24/outline'

const activeService = ref(null)

const setActiveService = (serviceId) => {
  activeService.value = serviceId
}

const services = [
  {
    id: 'frontend',
    title: 'Desarrollo de Aplicaciones Web',
    emphasis: 'Creamos experiencias de usuario excepcionales y de alto impacto, diseñadas para ser intuitivas y atractivas.',
    icon: CodeBracketIcon,
    features: [
      'Diseño y desarrollo UI/UX',
      'Single Page Applications (SPAs)',
      'Progressive Web Apps (PWAs)',
      'Interfaces dinámicas y responsivas',
      'Optimización del rendimiento frontend'
    ],
    technologies: ['React.js', 'Next.js', 'Vue.js']
  },
  {
    id: 'backend',
    title: 'Desarrollo Backend y APIs',
    emphasis: 'Construimos la columna vertebral de tu aplicación, garantizando seguridad, escalabilidad y eficiencia.',
    icon: ServerIcon,
    features: [
      'Arquitecturas robustas y escalables',
      'APIs RESTful y GraphQL',
      'Integración de sistemas de terceros',
      'Servicios avanzados',
      'Microservicios'
    ],
    technologies: ['Python', 'Flask', 'Django']
  },
  {
    id: 'database',
    title: 'Gestión de Bases de Datos',
    emphasis: 'Diseñamos y optimizamos tus sistemas de datos para garantizar integridad, velocidad y disponibilidad.',
    icon: CircleStackIcon,
    features: [
      'Diseño de esquemas',
      'Migración de datos',
      'Optimización de consultas',
      'Gestión de grandes volúmenes',
      'Backup y recuperación'
    ],
    technologies: ['Oracle', 'Supabase', 'MySQL', 'Firebase']
  },
  {
    id: 'devops',
    title: 'Servicios DevOps y Cloud',
    emphasis: 'Agilizamos tus procesos de desarrollo y despliegue, asegurando eficiencia y confiabilidad en la nube.',
    icon: CloudIcon,
    features: [
      'Automatización CI/CD',
      'Despliegue con Docker',
      'Orquestación con Kubernetes',
      'Hosting y Networking',
      'Monitoreo y alertas'
    ],
    technologies: ['Docker', 'Kubernetes', 'AWS', 'GCP']
  },
  {
    id: 'consulting',
    title: 'Consultoría Tecnológica',
    emphasis: 'Ofrecemos asesoramiento experto para guiar tu estrategia tecnológica y arquitectura de software.',
    icon: LightBulbIcon,
    features: [
      'Análisis de requisitos',
      'Diseño de arquitectura',
      'Auditorías de código',
      'Planificación de proyectos',
      'Optimización de procesos'
    ],
    technologies: ['Agile', 'Scrum', 'DevOps', 'Cloud']
  }
]
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.services {
  background: linear-gradient(135deg, rgba(255, 20, 147, 0.02) 0%, rgba(0, 191, 255, 0.02) 100%);
  
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
    
    @media (max-width: $breakpoint-sm) {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }
  }
}

.service-card {
  position: relative;
  
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: var(--gradient-card);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
    color: var(--color-primary-cyan);
  }
  
  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
  }
  
  &__emphasis {
    font-size: 1rem;
    color: var(--color-primary-cyan);
    font-weight: 500;
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
  }
  
  &__features {
    list-style: none;
    margin-bottom: var(--spacing-lg);
    
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
  
  &__tech {
    &-label {
      font-weight: 600;
      color: var(--color-text-primary);
      display: block;
      margin-bottom: var(--spacing-xs);
    }
    
    &-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-xs);
    }
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
</style>