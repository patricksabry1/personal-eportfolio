export const AboutMeCard = () => import('../..\\components\\AboutMeCard.vue' /* webpackChunkName: "components/about-me-card" */).then(c => wrapFunctional(c.default || c))
export const AcademicsCard = () => import('../..\\components\\AcademicsCard.vue' /* webpackChunkName: "components/academics-card" */).then(c => wrapFunctional(c.default || c))
export const ProfileCard = () => import('../..\\components\\ProfileCard.vue' /* webpackChunkName: "components/profile-card" */).then(c => wrapFunctional(c.default || c))
export const ProjectsCard = () => import('../..\\components\\ProjectsCard.vue' /* webpackChunkName: "components/projects-card" */).then(c => wrapFunctional(c.default || c))
export const ResumeCard = () => import('../..\\components\\ResumeCard.vue' /* webpackChunkName: "components/resume-card" */).then(c => wrapFunctional(c.default || c))
export const SkillsCard = () => import('../..\\components\\SkillsCard.vue' /* webpackChunkName: "components/skills-card" */).then(c => wrapFunctional(c.default || c))
export const WorkExperienceCard = () => import('../..\\components\\WorkExperienceCard.vue' /* webpackChunkName: "components/work-experience-card" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
