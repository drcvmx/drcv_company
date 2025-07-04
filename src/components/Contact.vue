<template>
  <section id="contacto" class="contact section">
    <div class="container">
      <div class="contact__header">
        <h2 class="contact__title gradient-text">Conectemos. Hagamos tu Próximo Proyecto Realidad.</h2>
      </div>
      
      <div class="contact__content">
        <div class="contact__info">
          <div class="info-card card">
            <h3 class="info-card__title">¿Listo para comenzar?</h3>
            <p class="info-card__text">
              Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a 
              transformar tu visión en una realidad digital que impacte positivamente 
              a tus usuarios.
            </p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <EnvelopeIcon class="w-5 h-5" />
                <div>
                  <span class="contact-method__label">Email</span>
                  <a href="mailto:drcv.work.code@gmail.com" class="contact-method__value">
                    drcv.work.code@gmail.com
                  </a>
                </div>
              </div>
              
              <div class="contact-method">
                <PhoneIcon class="w-5 h-5" />
                <div>
                  <span class="contact-method__label">Teléfono</span>
                  <a href="tel:+527291850233" class="contact-method__value">
                    +52 7291850233
                  </a>
                </div>
              </div>
              
              <div class="contact-method">
                <MapPinIcon class="w-5 h-5" />
                <div>
                  <span class="contact-method__label">Ubicación</span>
                  <span class="contact-method__value">
                    México
                  </span>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h4 class="social-links__title">Síguenos</h4>
              <div class="social-links__list">
                <a href="https://www.linkedin.com/in/dante-ricardo-chavez-verdeja-501388361/" class="social-link" aria-label="LinkedIn">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/drcvmx" class="social-link" aria-label="GitHub">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact__form">
          <form @submit.prevent="handleSubmit" class="form card">
            <h3 class="form__title">Envíanos un mensaje</h3>
            
            <div class="form__row">
              <div class="form__group">
                <label for="name" class="form__label">Nombre *</label>
                <input
                  id="name"
                  v-model="store.contactForm.name"
                  type="text"
                  class="form__input"
                  :class="{ 'form__input--error': errors.name }"
                  required
                />
                <span v-if="errors.name" class="form__error">{{ errors.name }}</span>
              </div>
              
              <div class="form__group">
                <label for="email" class="form__label">Email *</label>
                <input
                  id="email"
                  v-model="store.contactForm.email"
                  type="email"
                  class="form__input"
                  :class="{ 'form__input--error': errors.email }"
                  required
                />
                <span v-if="errors.email" class="form__error">{{ errors.email }}</span>
              </div>
            </div>
            
            <div class="form__row">
              <div class="form__group">
                <label for="phone" class="form__label">Teléfono</label>
                <input
                  id="phone"
                  v-model="store.contactForm.phone"
                  type="tel"
                  class="form__input"
                />
              </div>
              
              <div class="form__group">
                <label for="company" class="form__label">Empresa</label>
                <input
                  id="company"
                  v-model="store.contactForm.company"
                  type="text"
                  class="form__input"
                />
              </div>
            </div>
            
            <div class="form__group">
              <label for="message" class="form__label">Mensaje *</label>
              <textarea
                id="message"
                v-model="store.contactForm.message"
                class="form__textarea"
                :class="{ 'form__input--error': errors.message }"
                rows="5"
                placeholder="Cuéntanos sobre tu proyecto..."
                required
              ></textarea>
              <span v-if="errors.message" class="form__error">{{ errors.message }}</span>
            </div>
            
            <button 
              type="submit" 
              class="btn btn-primary form__submit"
              :disabled="store.isLoading"
            >
              <span v-if="!store.isLoading">Enviar Mensaje</span>
              <span v-else class="loading-spinner">
                <ArrowPathIcon class="w-5 h-5 animate-spin" />
                Enviando...
              </span>
            </button>
            
            <div v-if="submitMessage" class="form__message" :class="submitMessageClass">
              {{ submitMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useMainStore } from '../stores/main.js'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'

const store = useMainStore()
const errors = reactive({})
const submitMessage = ref('')
const submitMessageClass = ref('')

const validateForm = () => {
  Object.keys(errors).forEach(key => delete errors[key])
  
  if (!store.contactForm.name.trim()) {
    errors.name = 'El nombre es requerido'
  }
  
  if (!store.contactForm.email.trim()) {
    errors.email = 'El email es requerido'
  } else if (!/\S+@\S+\.\S+/.test(store.contactForm.email)) {
    errors.email = 'El email no es válido'
  }
  
  if (!store.contactForm.message.trim()) {
    errors.message = 'El mensaje es requerido'
  }
  
  return Object.keys(errors).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) return
  
  try {
    const result = await store.submitContactForm()
    
    if (result.success) {
      submitMessage.value = result.message
      submitMessageClass.value = 'form__message--success'
    } else {
      submitMessage.value = result.message
      submitMessageClass.value = 'form__message--error'
    }
    
    setTimeout(() => {
      submitMessage.value = ''
      submitMessageClass.value = ''
    }, 5000)
  } catch (error) {
    submitMessage.value = 'Error inesperado. Por favor, intenta de nuevo.'
    submitMessageClass.value = 'form__message--error'
  }
}
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.contact {
  background: linear-gradient(135deg, rgba(255, 20, 147, 0.02) 0%, rgba(0, 191, 255, 0.02) 100%);
  
  &__header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
  }
  
  &__title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    max-width: 800px;
    margin: 0 auto;
  }
  
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
      gap: var(--spacing-2xl);
    }
  }
}

.info-card {
  &__title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
  }
  
  &__text {
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: var(--spacing-xl);
  }
}

.contact-methods {
  margin-bottom: var(--spacing-xl);
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  
  svg {
    color: var(--color-primary-cyan);
    margin-top: 2px;
    flex-shrink: 0;
  }
  
  &__label {
    display: block;
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: 2px;
  }
  
  &__value {
    color: var(--color-text-secondary);
    text-decoration: none;
    
    &:hover {
      color: var(--color-primary-cyan);
    }
  }
}

.social-links {
  &__title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
  }
  
  &__list {
    display: flex;
    gap: var(--spacing-sm);
  }
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-bg-card);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--color-primary-cyan);
    color: var(--color-bg-dark);
    transform: translateY(-2px);
  }
}

.form {
  &__title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xl);
    color: var(--color-text-primary);
  }
  
  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
    
    @media (max-width: $breakpoint-sm) {
      grid-template-columns: 1fr;
    }
  }
  
  &__group {
    margin-bottom: var(--spacing-md);
  }
  
  &__label {
    display: block;
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-xs);
  }
  
  &__input,
  &__textarea {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-sm);
    color: var(--color-text-primary);
    font-family: inherit;
    transition: all var(--transition-fast);
    
    &:focus {
      outline: none;
      border-color: var(--color-primary-cyan);
      background: rgba(255, 255, 255, 0.08);
    }
    
    &::placeholder {
      color: var(--color-text-secondary);
    }
    
    &--error {
      border-color: #ff4444;
    }
  }
  
  &__textarea {
    resize: vertical;
    min-height: 120px;
  }
  
  &__error {
    display: block;
    color: #ff4444;
    font-size: 0.85rem;
    margin-top: var(--spacing-xs);
  }
  
  &__submit {
    width: 100%;
    margin-top: var(--spacing-md);
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
  
  &__message {
    margin-top: var(--spacing-md);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
    text-align: center;
    
    &--success {
      background: rgba(34, 197, 94, 0.1);
      color: #22c55e;
      border: 1px solid rgba(34, 197, 94, 0.2);
    }
    
    &--error {
      background: rgba(239, 68, 68, 0.1);
      color: #ef4444;
      border: 1px solid rgba(239, 68, 68, 0.2);
    }
  }
}

.loading-spinner {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>