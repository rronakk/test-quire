import axios from "axios";
export default {

  /** PROJECT LEVEL */
  postProject: data => {
    return axios.post("/api/project/", data);
  },
  getProjects: () => {
    return axios.get("/api/project/");
  },
  // searchProject: pId => {
  //   return axios.get(`/api/project/${pId}`);
  // },
  deleteProject: pId => {
    return axios.delete(`/api/project/${pId}`);
  },
  updateProject: (data, pId) => {
    return axios.put(`/api/project/${pId}`, data);
  },

  postSuite: data => {
    return axios.post(`/api/suite/`, data);
  },
  getSuites: pId => {
    return axios.get(`/api/library/${pId}/suite1/`);
  },
  deleteSuite: sId => {
    return axios.delete(`/api/suite1/${sId}`);
  },
  updateSuite: (data, sId) => {
    return axios.put(`/api/suite1/${sId}`, data);
  },
}