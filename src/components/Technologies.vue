<template>
  <section id="tecnologias" class="technologies section">
    <div class="container">
      <div class="technologies__header">
        <h2 class="technologies__title gradient-text">Nuestro Ecosistema Tecnológico</h2>
        <p class="technologies__subtitle">
          Dominamos un amplio espectro de tecnologías de vanguardia para construir 
          soluciones a medida que impulsan tu negocio.
        </p>
      </div>
      
      <div class="technologies__categories">
        <Transition name="fade" mode="out-in">
          <div 
            v-if="currentCategory"
            :key="currentCategory.id"
            class="tech-category card"
          >
            <div class="tech-category__header">
              <component :is="currentCategory.icon" class="w-8 h-8" />
              <h3 class="tech-category__title">{{ currentCategory.name }}</h3>
            </div>
            
            <div class="tech-category__grid">
              <div 
                v-for="tech in currentCategory.technologies" 
                :key="tech.name"
                class="tech-item"
                @mouseenter="setActiveTech(tech.name)"
                @mouseleave="setActiveTech(null)"
              >
                <div class="tech-item__icon">
                  <img v-if="tech.logo" :src="tech.logo" :alt="tech.name" />
                  <span v-else class="tech-item__placeholder">{{ tech.name.charAt(0) }}</span>
                </div>
                <span class="tech-item__name">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      
      <div class="technologies__methodologies">
        <h3 class="methodologies__title">Metodologías de Trabajo</h3>
        <div class="methodologies__list">
          <div 
            v-for="methodology in methodologies" 
            :key="methodology.name"
            class="methodology-item"
          >
            <div class="methodology-item__icon">
              <component :is="methodology.icon" class="w-6 h-6" />
            </div>
            <div class="methodology-item__content">
              <h4 class="methodology-item__name">{{ methodology.name }}</h4>
              <p class="methodology-item__description">{{ methodology.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CircleStackIcon, 
  CloudIcon,
  CogIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'

const activeTech = ref(null)
const currentCategoryIndex = ref(0)
let carouselInterval = null

const setActiveTech = (techName) => {
  activeTech.value = techName
}

const techCategories = ref([
  {
    id: 'frontend',
    name: 'Frontend',
    icon: CodeBracketIcon,
    technologies: [
      { name: 'React', logo: '/public_webp/img/react.webp' },
      { name: 'Next.js', logo: '/public_webp/img/nextjs.webp' },
      { name: 'Vue.js' , logo: '/public_webp/img/vue.webp'},
      { name: 'JavaScript', logo: '/public_webp/img/javascript.webp' },
      { name: 'TypeScript', logo: '/public_webp/img/typescript.webp' },
      { name: 'HTML5', logo: '/public_webp/img/html.webp' },
      { name: 'CSS3', logo: '/public_webp/img/css.webp' },
      { name: 'SASS/LESS' , logo: '/public_webp/img/sass.webp'}
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: ServerIcon,
    technologies: [
      { name: 'Python', logo: '/public_webp/img/python.webp' },
      { name: 'Flask', logo: '/public_webp/img/flaskw.webp'},
      { name: 'Django', logo: '/public_webp/img/django.webp' },
      { name: 'FastAPI', logo: '/public_webp/img/fastapi.webp' },
      { name: 'Node.js', logo: '/public_webp/img/nodejs.webp' },
      { name: 'Docker', logo: '/public_webp/img/docker.webp' },
      { name: 'Kubernetes', logo: '/public_webp/img/kubernetes.webp' }
    ]
  },
  {
    id: 'database',
    name: 'Bases de Datos',
    icon: CircleStackIcon,
    technologies: [
      { name: 'Oracle', logo: '/public_webp/img/oracle.webp' },
      { name: 'Supabase', logo: '/public_webp/img/supabase.webp' },
      { name: 'MySQL', logo: '/public_webp/img/mysql.webp' },
      { name: 'Firebase', logo: '/public_webp/img/firebase.webp' },
      { name: 'PostgreSQL', logo: '/public_webp/img/postgresql.webp' },
      { name: 'MongoDB', logo: '/public_webp/img/mongodb.webp' }
    ]
  }
])

const currentCategory = computed(() => {
  return techCategories.value[currentCategoryIndex.value]
})

onMounted(() => {
  carouselInterval = setInterval(() => {
    currentCategoryIndex.value = (currentCategoryIndex.value + 1) % techCategories.value.length
  }, 5000)
})

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
})

const methodologies = [
  {
    name: 'Agile',
    icon: ArrowPathIcon,
    description: 'Desarrollo iterativo y colaborativo con entregas frecuentes'
  },
  {
    name: 'Scrum',
    icon: CogIcon,
    description: 'Framework ágil para gestión de proyectos complejos'
  }
]
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.technologies {
  background: var(--color-bg-darker);
  
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
  
  &__categories {
    position: relative; 
    overflow: hidden; /* Oculta cualquier desbordamiento durante la transición */
    margin-bottom: var(--spacing-3xl);
    height: 650px; /* Altura fija para desktop */
    /* transition: height 0.5s ease; REMOVIDO */

    display: flex; 
    justify-content: center; 
    align-items: flex-start; 

    @media (max-width: $breakpoint-md) {
      height: auto; /* Altura automática en móviles */
      min-height: 800px; /* Aumentado drásticamente para depuración en móviles */
    }
  }
  
  &__methodologies {
    text-align: center;
  }
}

.tech-category {
  width: 100%; 
  max-width: 700px; 
  position: absolute; /* Crucial para superponer y evitar movimiento lateral */
  top: 0; 
  left: 50%; 
  transform: translateX(-50%); 
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-xl);
  display: flex; 
  flex-direction: column; 
  
  &__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
    color: var(--color-primary-cyan);
  }
  
  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
    gap: var(--spacing-md);

    @media (max-width: $breakpoint-md) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Ajuste para móviles */
    }
  }
}

.tech-item {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  cursor: pointer;
  text-align: center; 
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  
  &__icon {
    width: 40px; 
    height: 40px; 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-sm);
    background: var(--gradient-card);
    
    img {
      width: 28px; 
      height: 28px; 
      object-fit: contain;
    }
  }
  
  &__placeholder {
    font-weight: 600;
    color: var(--color-primary-cyan);
    font-size: 1.2rem; 
  }
  
  &__name {
    flex: 1;
    font-weight: 500;
    color: var(--color-text-primary);
  }
}

.methodologies {
  &__title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
    color: var(--color-text-primary);
  }
  
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
    max-width: 800px;
    margin: 0 auto;
  }
}

.methodology-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  text-align: left;
  
  &__icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background: var(--gradient-card);
    color: var(--color-primary-purple);
  }
  
  &__name {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    color: var(--color-text-primary);
  }
  
  &__description {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.5;
  }
}

/* Transiciones del carrusel */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>