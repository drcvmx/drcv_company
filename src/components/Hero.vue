<template>
  <section id="inicio" class="hero">
    <div class="hero__background">
      <div class="hero__particles"></div>
    </div>
    
    <div class="container">
      <div class="hero__content">
        <div class="hero__text">
          <h1 class="hero__title fade-in-up">
            <span class="gradient-text">DRCV COMPANY:</span><br>
            Impulsando tu Visión en la Web
          </h1>
          
          <p class="hero__subtitle fade-in-up">
            <strong>Desarrollo Web y Facilitando la Vida de los Usuarios.</strong>
          </p>
          
          <p class="hero__description fade-in-up">
            Desde nuestra fundación el 7 de abril de 2024, hemos estado creando aplicaciones web 
            intuitivas y de alto rendimiento que no solo cumplen objetivos de negocio, sino que 
            también transforman la experiencia del usuario. Combinamos la innovación de React, 
            Next.js y Vue con la robustez de Python (Flask, Django), bases de datos avanzadas 
            y soluciones DevOps.
          </p>
          
          <div class="hero__actions fade-in-up">
            <a href="#servicios" class="btn btn-primary">
              Explora Nuestros Servicios
              <ChevronRightIcon class="w-5 h-5" />
            </a>
            <a href="#proyectos" class="btn btn-secondary">
              Ver Proyectos
            </a>
          </div>
        </div>
        
        <div class="hero__visual">
          <div class="hero__code-block float">
            <div class="code-header">
              <div class="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="code-title">app.py</span>
            </div>
            <div class="code-content">
              <pre><code>{{ codeExample }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const codeExample = `from flask import Flask, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route('/api/status')
def get_status():
    return jsonify({
        'status': 'active',
        'company': 'DRCV COMPANY',
        'mission': 'Facilitando la vida',
        'timestamp': datetime.now()
    })

if __name__ == '__main__':
    app.run(debug=True)`
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 120px;
  overflow: hidden;
  
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(0, 191, 255, 0.1) 0%, transparent 70%);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(45deg, transparent 30%, rgba(255, 20, 147, 0.05) 50%, transparent 70%),
        linear-gradient(-45deg, transparent 30%, rgba(0, 128, 255, 0.05) 50%, transparent 70%);
    }
  }
  
  &__particles {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(2px 2px at 20px 30px, rgba(0, 191, 255, 0.3), transparent),
      radial-gradient(2px 2px at 40px 70px, rgba(255, 20, 147, 0.3), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(0, 128, 255, 0.3), transparent);
    background-repeat: repeat;
    background-size: 100px 100px;
    animation: float 20s linear infinite;
  }
  
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
    align-items: center;
    position: relative;
    z-index: 1;
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
      gap: var(--spacing-2xl);
      text-align: center;
    }
  }
  
  &__title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);

    @media (max-width: $breakpoint-sm) {
      font-size: clamp(2rem, 7vw, 2.5rem);
    }
  }
  
  &__subtitle {
    font-size: 1.5rem;
    color: var(--color-primary-cyan);
    margin-bottom: var(--spacing-lg);
    font-weight: 600;

    @media (max-width: $breakpoint-sm) {
      font-size: 1.2rem;
    }
  }
  
  &__description {
    font-size: 1.1rem;
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-xl);
    max-width: 600px;
  }
  
  &__actions {
    display: flex;
    gap: var(--spacing-md);
    flex-wrap: wrap;
    
    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-sm);
    }
  }
  
  &__visual {
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: $breakpoint-lg) {
      order: -1;
    }
  }
  
  &__code-block {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    overflow: hidden;
    max-width: 400px;
    width: 100%;
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-lg);

    @media (max-width: $breakpoint-sm) {
      max-width: 100%;
    }
  }
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  .code-dots {
    display: flex;
    gap: 6px;
    
    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      
      &:nth-child(1) { background: #ff5f57; }
      &:nth-child(2) { background: #ffbd2e; }
      &:nth-child(3) { background: #28ca42; }
    }
  }
  
  .code-title {
    font-family: var(--font-family-mono);
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }
}

.code-content {
  padding: var(--spacing-md);
  
  pre {
    margin: 0;
    font-family: var(--font-family-mono);
    font-size: 0.85rem;
    line-height: 1.6;
    color: var(--color-text-primary);
    overflow-x: auto;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  
  code {
    color: var(--color-primary-cyan);
    word-break: break-word;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>