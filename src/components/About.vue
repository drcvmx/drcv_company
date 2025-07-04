<template>
  <section id="nosotros" class="about section">
    <div class="container">
      <div class="about__header">
        <h2 class="about__title gradient-text">DRCV COMPANY: Quiénes Somos</h2>
      </div>
      
      <div class="about__content">
        <div class="about__story">
          <div class="story-card card">
            <div class="story-card__icon">
              <CalendarDaysIcon class="w-8 h-8" />
            </div>
            <h3 class="story-card__title">Nuestra Historia</h3>
            <p class="story-card__text">
              Fundada el 7 de abril de 2024, DRCV COMPANY nació con la misión de transformar 
              ideas en aplicaciones web funcionales y que mejoren la vida de las personas. 
              Nos apasiona la tecnología y nos comprometemos a ofrecer soluciones de software 
              de la más alta calidad.
            </p>
          </div>
          
          <div class="story-card card">
            <div class="story-card__icon">
              <EyeIcon class="w-8 h-8" />
            </div>
            <h3 class="story-card__title">Nuestra Visión</h3>
            <p class="story-card__text">
              Ser líderes en el desarrollo de aplicaciones web, reconocidos por nuestra 
              innovación, excelencia técnica y el impacto positivo que generamos en 
              nuestros clientes y sus usuarios.
            </p>
          </div>
        </div>
        
        <div class="about__values">
          <h3 class="values__title">Nuestros Valores</h3>
          <div class="values__grid">
            <div 
              v-for="value in values" 
              :key="value.id"
              class="value-item"
            >
              <div class="value-item__icon">
                <component :is="value.icon" class="w-6 h-6" />
              </div>
              <h4 class="value-item__title">{{ value.name }}</h4>
              <p class="value-item__description">{{ value.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="about__differentiator">
          <div class="differentiator-card card">
            <div class="differentiator-card__content">
              <h3 class="differentiator-card__title">Lo que nos distingue</h3>
              <p class="differentiator-card__text">
                Nuestra habilidad para combinar una obsesión por los detalles en el frontend 
                con una ingeniería robusta en el backend y DevOps, creando soluciones 
                integrales que simplemente funcionan y deleitan.
              </p>
            </div>
            <div class="differentiator-card__visual">
              <div class="tech-stack">
                <div class="tech-layer frontend">
                  <span>Frontend</span>
                  <div class="tech-icons">
                    <div class="tech-icon">React</div>
                    <div class="tech-icon">Vue</div>
                    <div class="tech-icon">Next.js</div>
                  </div>
                </div>
                <div class="tech-layer backend">
                  <span>Backend</span>
                  <div class="tech-icons">
                    <div class="tech-icon">Python</div>
                    <div class="tech-icon">Django</div>
                    <div class="tech-icon">Flask</div>
                  </div>
                </div>
                <div class="tech-layer devops">
                  <span>DevOps</span>
                  <div class="tech-icons">
                    <div class="tech-icon">Docker</div>
                    <div class="tech-icon">K8s</div>
                    <div class="tech-icon">AWS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about__team">
          <h3 class="team__title">Nuestro Equipo</h3>
          <div class="team__description">
            <p>
              Somos un equipo de desarrolladores apasionados por la tecnología y comprometidos 
              con la excelencia. Cada miembro aporta experiencia única y una perspectiva 
              innovadora para crear soluciones que realmente marquen la diferencia.
            </p>
          </div>
          
          <div class="team__stats">
            <div class="stat-item">
              <span class="stat-item__value">5+</span>
              <span class="stat-item__label">Años de Experiencia</span>
            </div>
            <div class="stat-item">
              <span class="stat-item__value">50+</span>
              <span class="stat-item__label">Proyectos Completados</span>
            </div>
            <div class="stat-item">
              <span class="stat-item__value">100%</span>
              <span class="stat-item__label">Clientes Satisfechos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  CalendarDaysIcon, 
  EyeIcon,
  LightBulbIcon,
  UsersIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  EyeSlashIcon as TransparencyIcon
} from '@heroicons/vue/24/outline'

const values = [
  {
    id: 'innovation',
    name: 'Innovación',
    icon: LightBulbIcon,
    description: 'Buscamos constantemente nuevas formas de resolver problemas y mejorar procesos.'
  },
  {
    id: 'collaboration',
    name: 'Colaboración',
    icon: UsersIcon,
    description: 'Trabajamos estrechamente con nuestros clientes como socios estratégicos.'
  },
  {
    id: 'quality',
    name: 'Calidad',
    icon: ShieldCheckIcon,
    description: 'Nos comprometemos con los más altos estándares en cada línea de código.'
  },
  {
    id: 'user-focus',
    name: 'Enfoque en el Usuario',
    icon: UserGroupIcon,
    description: 'Diseñamos pensando siempre en la experiencia y necesidades del usuario final.'
  },
  {
    id: 'transparency',
    name: 'Transparencia',
    icon: TransparencyIcon,
    description: 'Mantenemos comunicación clara y honesta en todos nuestros procesos.'
  }
]
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.about {
  background: var(--color-bg-darker);
  
  &__header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
  }
  
  &__title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
  }
  
  &__content {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  &__story {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-3xl);
  }
  
  &__values {
    margin-bottom: var(--spacing-3xl);
  }
  
  &__differentiator {
    margin-bottom: var(--spacing-3xl);
  }
  
  &__team {
    text-align: center;
  }
}

.story-card {
  text-align: center;
  
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: var(--gradient-card);
    border-radius: var(--radius-md);
    margin: 0 auto var(--spacing-md);
    color: var(--color-primary-cyan);
  }
  
  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
  }
  
  &__text {
    color: var(--color-text-secondary);
    line-height: 1.7;
  }
}

.values {
  &__title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: var(--spacing-xl);
    color: var(--color-text-primary);
  }
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
  }
}

.value-item {
  text-align: center;
  padding: var(--spacing-lg);
  background: var(--color-bg-card);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    background: var(--color-bg-card-hover);
  }
  
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: var(--gradient-card);
    border-radius: var(--radius-sm);
    margin: 0 auto var(--spacing-md);
    color: var(--color-primary-cyan);
  }
  
  &__title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
  }
  
  &__description {
    color: var(--color-text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
  }
}

.differentiator-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  
  @media (max-width: $breakpoint-lg) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  &__title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    color: var(--color-primary-cyan);
  }
  
  &__text {
    color: var(--color-text-secondary);
    line-height: 1.7;
    font-size: 1.1rem;
  }
}

.tech-stack {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.tech-layer {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  
  &.frontend {
    background: linear-gradient(135deg, rgba(255, 20, 147, 0.1) 0%, rgba(255, 20, 147, 0.05) 100%);
    border: 1px solid rgba(255, 20, 147, 0.2);
  }
  
  &.backend {
    background: linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, rgba(0, 191, 255, 0.05) 100%);
    border: 1px solid rgba(0, 191, 255, 0.2);
  }
  
  &.devops {
    background: linear-gradient(135deg, rgba(0, 128, 255, 0.1) 0%, rgba(0, 128, 255, 0.05) 100%);
    border: 1px solid rgba(0, 128, 255, 0.2);
  }
  
  > span {
    font-weight: 600;
    color: var(--color-text-primary);
    min-width: 80px;
  }
}

.tech-icons {
  display: flex;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
}

.tech-icon {
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  color: var(--color-text-secondary);
}

.team {
  &__title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
    color: var(--color-text-primary);
  }
  
  &__description {
    max-width: 600px;
    margin: 0 auto var(--spacing-xl);
    
    p {
      color: var(--color-text-secondary);
      line-height: 1.7;
      font-size: 1.1rem;
    }
  }
  
  &__stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--spacing-lg);
    max-width: 600px;
    margin: 0 auto;
  }
}

.stat-item {
  text-align: center;
  
  &__value {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--spacing-xs);
  }
  
  &__label {
    color: var(--color-text-secondary);
    font-size: 0.95rem;
  }
}
</style>