/**
 * API Configuration
 * Centralized configuration for all API endpoints and settings
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.sawalancer.com'

export const API_ENDPOINTS = {
  // Contact & Forms
  CONTACT_FORM: '/contact/submit',
  NEWSLETTER_SUBSCRIBE: '/newsletter/subscribe',

  // Projects
  PROJECTS: '/projects',
  PROJECT_DETAILS: (id) => `/projects/${id}`,

  // Blog
  BLOG_POSTS: '/blog',
  BLOG_POST: (id) => `/blog/${id}`,

  // Services
  SERVICES: '/services',
  SERVICE_DETAILS: (id) => `/services/${id}`,

  // Testimonials
  TESTIMONIALS: '/testimonials',

  // Jobs/Careers
  JOBS: '/careers/jobs',
  JOB_APPLICATION: '/careers/apply'
}

/**
 * API Client Factory
 * Handles all HTTP requests with proper error handling and auth
 */
class APIClient {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`

    const config = {
      headers: {
        ...this.defaultHeaders,
        ...options.headers
      },
      ...options
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new APIError(
          response.status,
          response.statusText,
          await response.text()
        )
      }

      const contentType = response.headers.get('content-type')
      if (contentType?.includes('application/json')) {
        return await response.json()
      }

      return response.text()
    } catch (error) {
      if (error instanceof APIError) {
        throw error
      }
      throw new APIError(0, 'Network Error', error.message)
    }
  }

  get(endpoint, options = {}) {
    return this.request(endpoint, { method: 'GET', ...options })
  }

  post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options
    })
  }

  put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options
    })
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, { method: 'DELETE', ...options })
  }
}

/**
 * Custom Error Class for API Errors
 */
class APIError extends Error {
  constructor(status, statusText, message) {
    super(message)
    this.status = status
    this.statusText = statusText
    this.name = 'APIError'
  }
}

// Create and export a singleton instance
export const apiClient = new APIClient()

/**
 * Service methods for specific endpoints
 */
export const contactService = {
  submitForm: (formData) =>
    apiClient.post(API_ENDPOINTS.CONTACT_FORM, formData),
}

export const newsletterService = {
  subscribe: (email) =>
    apiClient.post(API_ENDPOINTS.NEWSLETTER_SUBSCRIBE, { email }),
}

export const projectService = {
  getAll: () =>
    apiClient.get(API_ENDPOINTS.PROJECTS),
  getById: (id) =>
    apiClient.get(API_ENDPOINTS.PROJECT_DETAILS(id)),
}

export const blogService = {
  getAll: () =>
    apiClient.get(API_ENDPOINTS.BLOG_POSTS),
  getById: (id) =>
    apiClient.get(API_ENDPOINTS.BLOG_POST(id)),
}

export const servicesService = {
  getAll: () =>
    apiClient.get(API_ENDPOINTS.SERVICES),
  getById: (id) =>
    apiClient.get(API_ENDPOINTS.SERVICE_DETAILS(id)),
}

export const testimonialsService = {
  getAll: () =>
    apiClient.get(API_ENDPOINTS.TESTIMONIALS),
}

export const careersService = {
  getJobs: () =>
    apiClient.get(API_ENDPOINTS.JOBS),
  applyForJob: (applicationData) =>
    apiClient.post(API_ENDPOINTS.JOB_APPLICATION, applicationData),
}

export default apiClient
