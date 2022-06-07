import { 
  BlogContainer, 
  Header, 
  Text,
  KeySection,
  SubSection,
  ResourcesSection
} from './BlogArticleStyles';

const Blog = () => {
  return (
    <BlogContainer>
      <Header>How to Contribute on the "Starter" Project</Header>
      <Text>When I first started programming, what I wanted more than anything was to collaborate on a team with other developers and gain real-world experience, build in-demand and highly sought after skills, and have a safe space to ask questions freely and learn with others.</Text>
      <Text>The problem is, to gain these things typically requires being employed by a company doing these things, and those companies don't hire you unless you know how to do those things.</Text>
      <Text>Starter is a place for <b>everyone</b></Text>
      <Text>To create code and develop professionally and personally with others of all skill levels and walks of life</Text>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dw32XYwMbMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <KeySection>Install Prerequisite Software</KeySection>

        <SubSection>Git</SubSection>
        <Text>Git is a software for tracking changes in any set of files, like the Google source code, a book being written digitally by an author or any open-source sofftware development project. It's going to help you coordinate work with other programmers to collaboratively develop source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.</Text>
        <Text>If you're not using Windows operating system, please see More Resources below.</Text>
        <iframe src="https://youtube.com/embed/4xqVv2lTo40" height="300" width="500" title="GIT install"></iframe> 

        <ResourcesSection>More Resources:</ResourcesSection>
        <Text><a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">Git Documentation</a></Text>
        <Text>Other resources</Text>
        <Text>Other resources</Text>
        
        <SubSection>Node.js and NPM</SubSection>
        <Text>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.</Text>
        <Text>npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.</Text>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3F5IaPqj7ds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <ResourcesSection>More Resources:</ResourcesSection>
        <Text><a href="https://nodejs.org/en/" target="_blank">Node.js Documentation</a></Text>
        <Text>Other resources</Text>
        <Text>Other resources</Text>

        <SubSection>Visual Studio Code</SubSection>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JPZsB_6yHVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Text>Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.</Text>
        <ResourcesSection>More Resources:</ResourcesSection>

        <Text>Download Visual Studio Code <a href="https://code.visualstudio.com/download" target="_blank">from here</a></Text>
        <Text><a href='https://code.visualstudio.com/docs' target="_blank">VSCode Documentation</a></Text>
        <Text>Other resources</Text>
        <Text>Other resources</Text>



      <KeySection>Create a Github Account</KeySection>
      <a href="https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account" target="_blank">Signup here</a>



      <KeySection>Setup the Project on your Computer</KeySection>
      {/* <p>Add a link to the Starter repository</p> */}
      <a href="https://github.com/O1-Network/starter-dev" target="_blank">Starter-dev</a>
      <Text>A video that guides to setup "starter-dev" working on their local machine </Text>



      <KeySection>Get Involved and Repeat</KeySection>
      
    </BlogContainer>
  );
}

export default Blog;