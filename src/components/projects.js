import Snuggle from 'react-snuggle'
import ProjectItem from './projectItem';

const Projects = () => {


    return (
        <div className='px-16 flex flex-col items-center justify-center'>
            <h3 className='font-bold text-slate-600 text-3xl'>Portafolio</h3>
            <h2 className='font-bold text-4xl text-red-500 pb-16'>Proyectos trabajados</h2>
            <Snuggle>
                <ProjectItem
                    image={`/images/projects/alcostal.png`}
                    title={'Alcostal'}
                    description={'Proyecto para generar un enlace directo entre el Agricultor y el consumidor'}
                    tags={['Laravel', 'Next.js', 'GraphQL', 'LottieFiles']} />
                <ProjectItem image={`https://picsum.photos/602/400`} />
                <ProjectItem image={`https://picsum.photos/604/600`} />
                <ProjectItem image={`https://picsum.photos/500/600`} />
                <ProjectItem image={`https://picsum.photos/401/600`} />
                <ProjectItem image={`https://picsum.photos/602/400`} />
                <ProjectItem image={`https://picsum.photos/604/600`} />
                <ProjectItem image={`https://picsum.photos/500/600`} />
                <ProjectItem image={`https://picsum.photos/401/600`} />
                <ProjectItem image={`https://picsum.photos/602/400`} />
                <ProjectItem image={`https://picsum.photos/604/600`} />
            </Snuggle>
        </div>

    );

}

export default Projects;