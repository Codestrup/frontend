const BASE_URL = "https://api.codestrup.in";
// const BASE_URL = "http://localhost:8080";

export const ApiConfig = {
  verifyCertificateCode: `${BASE_URL}/verifyCertificateCode`,
  getFeaturedJobData: `${BASE_URL}/getFeaturedJobData`,
  loadjobs: `${BASE_URL}/loadjobs`,
  getRatingByIntershipId: `${BASE_URL}/api/getRatingByIntershipId`,
  createOrder: `${BASE_URL}/create-order`,
  getAllAchievers: `${BASE_URL}/getAllAchievers`,

  //AI courses
  courses: `${BASE_URL}/api/learningCenter/getAllCourse`,
  prompt: `${BASE_URL}/api/prompt`,
  generate: `${BASE_URL}/api/generate`,
  image: `${BASE_URL}/api/image`,
  course: `${BASE_URL}/api/course`,
  update: `${BASE_URL}/api/update`,

  //aptiude
  generateAptitude: `${BASE_URL}/api/generatePrompt`, //generate
  aptitude: `${BASE_URL}/api/aptitudeCreate`, //course
  apptitudePrompt: `${BASE_URL}/api/createPrompt`, //prompt
  apptitudeImage: `${BASE_URL}/api/createImage`, //image
  getAppAptitude: `${BASE_URL}/api/learningCenter/getAllAptitude`, //courses
  updateAptitude: `${BASE_URL}/api/updateAptitude`, //update

  //interview questions
  getAllInterviewQuetion: `${BASE_URL}/api/learningCenter/getAllInterviewQuestion`, //courses
  prompt: `${BASE_URL}/api/prompt`, //prompt
  generate: `${BASE_URL}/api/generate`, //generate
  image: `${BASE_URL}/api/image`, //image
  interviewQuetionCreate: `${BASE_URL}/api/interviewQuetionCreate`, //course
  updateinterviewQuetion: `${BASE_URL}/api/updateinterviewQuetion`, //update
  //Testimonial
  getAllTesti: `${BASE_URL}/getAllTesti`,
};
