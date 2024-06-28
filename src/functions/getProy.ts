
async function fetchProjects() {
  try {
      const response = await fetch('http://localhost:4321/api/proyects/getProyects');
      if (!response.ok) {
          throw new Error('Failed to fetch projects');
      }
      const projects = await response.json();
      console.log('Projects:', projects);
      // Hacer algo con los proyectos, por ejemplo, mostrarlos en tu interfaz de usuario
  } catch (error) {
      console.error('Error fetching projects:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
  }
}

export default fetchProjects;