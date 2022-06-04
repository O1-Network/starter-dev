import { BlogContainer } from './BlogArticleStyles';

const Blog = () => {
  return (
    <BlogContainer>
      <h1>How to Contribute on this Project</h1>
      <p>When I first started programming, what I wanted more than anything was to collaborate on a team with other developers and gain real-world experience that allowed me to land my dream job, build in-demand and highly sought after skills, and have a safe space to ask questions freely and learn with others.</p>
      <p>The problem is, to gain these things requires being employed by a company doing these things, and those companies don't hire you unless you know how to do those things.</p>
      <p>Starter is a place for anyone to meet and create code with others at their level.  We want you to learn with others who are just as new as you.</p>
      
      <h2>Install Prerequisite Software</h2>
        <h3>Install Git</h3>
        <p>Explanation of what Git is and why we need it for involvement.</p>
        <p>Youtube video teaching people how to set up Git (SIMPLE) JUST INSTALLATION FOR WINDOWS.  If you are using a different operating system please click More Resources below.</p>
        <iframe src="https://youtube.com/embed/4xqVv2lTo40" height="300" width="500" title="GIT install"></iframe> 
        <h3>More Resources:</h3>
        <ul>
          <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">Git Documentation</a>
          <li>Other resources</li>
        </ul>
        <h3>Install Node.js and NPM</h3>
        <p>Explanation of what Node.js and NPM is and why we need it for involvement.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3F5IaPqj7ds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3>More Resources:</h3>
        <ul>
          <a href="https://nodejs.org/en/" target="_blank">Node.js Documentation</a>
          <li>Other resources</li>
        </ul>
        <h3>Install Visual Studio Code</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JPZsB_6yHVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Explanation of what VSCode is and why we need it for involvement.</p>
        <p>Explanation of what VSCode and NPM are and why we need it for involvement.</p>
        <p>Youtube video teaching people how to set up VSCode and NPM (SIMPLE) JUST INSTALLATION</p>
        <h3>More Resources:</h3>
        <ul>
          <li>Download Visual Studio Code <a href="https://code.visualstudio.com/download" target="_blank">from here</a></li>
          <li><a href='https://code.visualstudio.com/docs' target="_blank">VSCode Documentation</a> </li>
          <li>Other resources</li>
        </ul>
      <h2>Create a Github Account</h2>
      <a href="https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account" target="_blank">Signup here</a>

      <h2>Setup the Project on your Computer</h2>
      {/* <p>Add a link to the Starter repository</p> */}
      <a href="https://github.com/O1-Network/starter-dev" target="_blank">Starter-dev</a>

      <p>A video that guides to setup "starter-dev" working on their local machine </p>
      <h2>Get Involved and Repeat</h2>
      
    </BlogContainer>
  );
}

export default Blog;