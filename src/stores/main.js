import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isMenuOpen: false,
    currentSection: 'home',
    isLoading: false,
    contactForm: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    }
  }),
  
  getters: {
    getContactForm: (state) => state.contactForm,
    getIsMenuOpen: (state) => state.isMenuOpen,
    getCurrentSection: (state) => state.currentSection
  },
  
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    
    closeMenu() {
      this.isMenuOpen = false
    },
    
    setCurrentSection(section) {
      this.currentSection = section
    },
    
    updateContactForm(field, value) {
      this.contactForm[field] = value
    },
    
    resetContactForm() {
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      }
    },
    
    async submitContactForm() {
      this.isLoading = true
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log('Form submitted:', this.contactForm)
        this.resetContactForm()
        return { success: true, message: 'Mensaje enviado correctamente' }
      } catch (error) {
        return { success: false, message: 'Error al enviar el mensaje' }
      } finally {
        this.isLoading = false
      }
    }
  }
})