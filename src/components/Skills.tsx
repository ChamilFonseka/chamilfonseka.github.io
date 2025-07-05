const Skills = () => {
    return (
        <section>
            <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2 justify-center">

                <Skill skill="Java" />
                <Skill skill="TypeScript" />
                <Skill skill="JavaScript" />
                <Skill skill="Kotlin" />
                <Skill skill="Python" />

                <Skill skill="Spring Boot" />
                <Skill skill="Spring Cloud" />
                <Skill skill="Node.js" />

                <Skill skill="HTML5" />
                <Skill skill="CSS3" />
                <Skill skill="Angular" />
                <Skill skill="React" />
                <Skill skill="Next.js" />
                <Skill skill="Lit" />
                <Skill skill="jQuery" />
                <Skill skill="Tailwind CSS" />
                <Skill skill="GSAP" />

                <Skill skill="Maven" />
                <Skill skill="Gradle" />
                <Skill skill="NPM" />
                <Skill skill="PNPM" />

                <Skill skill="Postgresql" />
                <Skill skill="Oracle " />
                <Skill skill="Microsoft SQL Server" />

                <Skill skill="Redis" />
                <Skill skill="MongoDB" />
                <Skill skill="Apache Cassandra" />
                <Skill skill="Apache Druid" />
                <Skill skill="Amazon DynamoDB" />

                <Skill skill="Apache Kafka" />
                <Skill skill="Apache ActiveMQ" />
                <Skill skill="Amazon Simple Queue Service" />

                <Skill skill="Apache Tomcat" />
                <Skill skill="WildFly" />
                <Skill skill="JBoss" />

                <Skill skill="Generative AI" />
                <Skill skill="Spring AI" />
                <Skill skill="LangChain4j" />
                <Skill skill="LangChain" />
                <Skill skill="LangGraph" />

                <Skill skill="Docker" />
                <Skill skill="Kubernetes" />
                <Skill skill="Helm" />

                <Skill skill="Grafana" />
                <Skill skill="Prometheus" />

                <Skill skill="Git" />
                <Skill skill="GitHub" />
                <Skill skill="GitLab" />
                <Skill skill="Bitbucket" />
                <Skill skill="AWS CodeCommit" />

                <Skill skill="CI/CD" />
                <Skill skill="DevOps" />
                <Skill skill="Jenkins" />
                <Skill skill="GitHub Actions" />
                <Skill skill="GitLab CI/CD" />
                <Skill skill="AWS CodePipeline" />

                <Skill skill="GitOps" />
                <Skill skill="Argo CD" />
                
                <Skill skill="Infrastructure As Code" />
                <Skill skill="AWS CloudFormation" />
                <Skill skill="Terraform" />

                <Skill skill="Amazon Web Services" />
                <Skill skill="Microsoft Azure" />
                <Skill skill="Cloudflare" />

                <Skill skill="Serverless Computing" />
                <Skill skill="AWS Lambda" />
                <Skill skill="Azure Functions" />
                <Skill skill="Cloudflare Workers" />

                <Skill skill="Microservices" />
                <Skill skill="RESTful APIs" />
                <Skill skill="GraphQL" />
                <Skill skill="GRPC" />

                <Skill skill="Unit Testing" />
                <Skill skill="Junit" />
                <Skill skill="TestNG" />
                <Skill skill="Mockito" />
                <Skill skill="Playwright" />
                <Skill skill="Web Test Runner" />

                <Skill skill="Design Patterns & Principles" />
                <Skill skill="Object-Oriented Programming" />
                <Skill skill="Agile Methodologies" />
                <Skill skill="Scrum" />
            </div>
            <hr className="my-4" />
        </section>
    );
};
export default Skills;

const Skill = ({ skill }: { skill: string; }) => {
    return (
        <span className="border-1 px-2 py-1 rounded-2xl shrink-0">{skill}</span>
    );
};