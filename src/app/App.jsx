import '../App.css'
import ProjectCard from "../components/project-card/ProjectCard.jsx";

function App() {

  return (
    <>
       <main>
           <h1 className="text-3xl font-bold">Hi! My name is Folasade.</h1>
           <h2 className="text-2xl">I am a full-stack developer.</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et  egestas velit, sed consequat nisi. Nunc iaculis consequat lacinia.  Integer blandit dolor eget urna porta lobortis. In eget velit eu erat  ultricies efficitur at sit amet purus. Maecenas pharetra venenatis mi,  vel porttitor elit consequat nec. Vestibulum sit amet posuere nulla. Sed varius metus tortor, vel pretium quam commodo et. Fusce ultricies nisl  ac neque consequat dictum. Vivamus vitae ex justo. Nulla convallis felis non massa eleifend, quis dictum nulla suscipit. Mauris ac tincidunt  felis.</p>

           <section id="projects">

               <h2 className="text-2xl">My Projects</h2>
               <div className="filter-button-container">
                   <span className="font-bold">Filter By:</span>
               <button className="secondaryButton">Frontend Dev</button>
                   <button className="secondaryButton">Backend Dev</button>
                   <button className="secondaryButton">UX Research</button>
                   <button className="secondaryButton">Technical Writing</button>

               </div>
               <ProjectCard />
               <ProjectCard />
           </section>
    </main>
        </>
  )
}

export default App;
