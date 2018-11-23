const initialProjects = [
  {
    "project_name": "read something"
  },
  {
    "project_name": "write something"
  }
]

const getProjects = () =>
  cy.request('/project')
    .its('body')


const add = item =>
  cy.request('POST', '/project', item)
    .its('body')
    .its('project')


const deleteProject = item =>
  cy.request('DELETE', `/project/${item._id}`)

const deleteAll = () =>
  getProjects()
    .each(deleteProject)

const setUp = () => {
  initialProjects.forEach(add)
}
const tearDown = () => {
  deleteAll()

}

beforeEach(setUp)
afterEach(tearDown)

/* eslint-env mocha */
describe('projects API', () => {
  it('get all projects', () => {
    cy.request('/project')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it('loads 2 items', () => {
    cy.request('/project')
      .its('body')
      .should('have.length', 2)
  })

  it('add a project', () => {
    const project = {project_name:'test_project'}
    const newProject = cy.request('POST', '/project', project)
      .its('body')
      .its('project')
      .its('project_name')
      .should('to.equal', project.project_name)
  })

})