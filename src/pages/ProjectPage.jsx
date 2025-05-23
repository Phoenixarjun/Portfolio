import React from 'react';
import ProjectLayout from '../layouts/ProjectLayout';
import { useParams } from 'react-router-dom';
import projects from '../project';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return <div>Project Not Found!</div>;
  }

  return (
    <>
      <Navbar />
      <ProjectLayout project={project} />
      <Footer 
      status={0}
      name = "Naresh B A"
      />
    </>
  );
}

export default ProjectPage;
