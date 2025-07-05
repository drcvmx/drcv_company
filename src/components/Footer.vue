<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__brand">
          <img src="/public_webp/drcv_company.webp" alt="DRCV COMPANY" class="footer__logo" />
          <p class="footer__tagline">
            Desarrollo Web y Facilitando la Vida de los Usuarios.
          </p>
        </div>
        
        <div class="footer__links">
          <div class="footer__section">
            <h4 class="footer__section-title">Empresa</h4>
            <ul class="footer__list">
              <li><a href="#nosotros">Sobre Nosotros</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div class="footer__section">
            <h4 class="footer__section-title">Contacto</h4>
            <ul class="footer__list">
              <li>
                <a href="mailto:drcv.work.code@gmail.com">
                  drcv.work.code@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+527291850233">
                  +52 7291850233
                </a>
              </li>
            </ul>
            
            <div class="footer__social">
              <a href="https://www.linkedin.com/in/dante-ricardo-chavez-verdeja-501388361/" class="footer__social-link" aria-label="LinkedIn">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/drcvmx" class="footer__social-link" aria-label="GitHub">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer__bottom">
        <div class="footer__copyright">
          <p>&copy; 2024 DRCV COMPANY. Todos los derechos reservados.</p>
        </div>
        
        <div class="footer__legal">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
.footer {
  background: var(--color-bg-darker);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-3xl) 0 var(--spacing-lg);
  
  &__content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--spacing-3xl);
    margin-bottom: var(--spacing-2xl);
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
      gap: var(--spacing-2xl);
    }
  }
  
  &__brand {
    max-width: 300px;
  }
  
  &__logo {
    height: 50px;
    width: auto;
    margin-bottom: var(--spacing-md);
  }
  
  &__tagline {
    color: var(--color-text-secondary);
    line-height: 1.6;
    font-size: 1.1rem;
  }
  
  &__links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-xl);
  }
  
  &__section {
    &-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-md);
    }
  }
  
  &__list {
    list-style: none;
    
    li {
      margin-bottom: var(--spacing-xs);
      
      a {
        color: var(--color-text-secondary);
        text-decoration: none;
        transition: color var(--transition-fast);
        
        &:hover {
          color: var(--color-primary-cyan);
        }
      }
    }
  }
  
  &__social {
    display: flex;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-md);
    
    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background: rgba(255, 255, 255, 0.05);
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
  }
  
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--spacing-lg);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      gap: var(--spacing-md);
      text-align: center;
    }
  }
  
  &__copyright {
    p {
      color: var(--color-text-secondary);
      margin: 0;
    }
  }
  
  &__legal {
    display: flex;
    gap: var(--spacing-lg);
    
    a {
      color: var(--color-text-secondary);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color var(--transition-fast);
      
      &:hover {
        color: var(--color-primary-cyan);
      }
    }
  }
}
</style>