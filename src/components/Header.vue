<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <!-- Logo -->
        <div class="nav__logo">
          <img src="/public_webp/drcv_company.webp" alt="DRCV COMPANY" class="nav__logo-img" />
        </div>
        
        <!-- Desktop Menu -->
        <ul class="nav__menu" :class="{ 'nav__menu--open': store.isMenuOpen }">
          <li v-for="item in menuItems" :key="item.id" class="nav__item">
            <a 
              :href="item.href" 
              class="nav__link"
              :class="{ 'nav__link--active': store.currentSection === item.id }"
              @click="handleMenuClick(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        
        <!-- CTA Button -->
        <a href="#contacto" class="btn btn-primary nav__cta">
          Empecemos Tu Proyecto
        </a>
        
        <!-- Mobile Menu Button -->
        <button 
          class="nav__toggle"
          @click="store.toggleMenu()"
          :class="{ 'nav__toggle--active': store.isMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMainStore } from '../stores/main.js'

const store = useMainStore()
const isScrolled = ref(false)

const menuItems = [
  { id: 'home', label: 'Inicio', href: '#inicio' },
  { id: 'services', label: 'Servicios', href: '#servicios' },
  { id: 'technologies', label: 'Tecnologías', href: '#tecnologias' },
  { id: 'projects', label: 'Proyectos', href: '#proyectos' },
  { id: 'about', label: 'Sobre Nosotros', href: '#nosotros' },
  { id: 'contact', label: 'Contacto', href: '#contacto' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleMenuClick = (sectionId) => {
  store.setCurrentSection(sectionId)
  store.closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 26, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--transition-normal);
  
  &--scrolled {
    background: rgba(10, 10, 26, 0.95);
    box-shadow: var(--shadow-lg);
  }
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  
  &__logo {
    flex-shrink: 0;
    
    &-img {
      height: 40px;
      width: auto;
    }
  }
  
  &__menu {
    display: flex;
    list-style: none;
    gap: var(--spacing-lg);
    margin: 0;
    padding: 0;
    
    @media (max-width: $breakpoint-lg) {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background: var(--color-bg-dark);
      flex-direction: column;
      padding: var(--spacing-lg);
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all var(--transition-normal);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      
      &--open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    }
  }
  
  &__item {
    position: relative;
  }
  
  &__link {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: 500;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
    position: relative;
    
    &:hover {
      color: var(--color-primary-cyan);
    }
    
    &--active {
      color: var(--color-primary-cyan);
      
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 2px;
        background: var(--gradient-primary);
        border-radius: 1px;
      }
    }
  }
  
  &__cta {
    @media (max-width: $breakpoint-lg) {
      display: none;
    }
  }
  
  &__toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-xs);
    
    @media (max-width: $breakpoint-lg) {
      display: flex;
    }
    
    span {
      width: 25px;
      height: 3px;
      background: var(--color-text-primary);
      border-radius: 2px;
      transition: all var(--transition-fast);
    }
    
    &--active {
      span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }
      
      span:nth-child(2) {
        opacity: 0;
      }
      
      span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    }
  }
}
</style>