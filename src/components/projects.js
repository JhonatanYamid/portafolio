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
                    description={'Proyecto personal pensado para generar un enlace directo entre el Agricultor y el consumidor (En Construcción)'}
                    tags={['Laravel', 'Next.js', 'GraphQL', 'LottieFiles','Tailwind', 'MySql']} />
                <ProjectItem
                    image={`/images/projects/kendy.png`}
                    title={'Plásticos Kendy'}
                    description={'Catálogo de productos web de plástico para la empresa Kendy'}
                    tags={['WordPress', 'JavaScript', 'CSS3']} />
                <ProjectItem
                    image={`/images/projects/ca-shield.png`}
                    title={'CA Shield'}
                    description={'Landing page para la empresa CA Shield'}
                    tags={['WordPress', 'CSS3']} />
                <ProjectItem
                    image={`/images/projects/alsak.png`}
                    title={'Alsak'}
                    description={'Landing page para la empresa Alsak'}
                    tags={['WordPress', 'CSS3']} />
                <ProjectItem
                    image={`/images/projects/cripto.png`}
                    title={'Cotizador Criptomonedas'}
                    description={"Proyecto cotizador de criptomonedas, creado para practicar el consumo de API'S REST en React"}
                    tags={['React', 'REST', 'Styled Components']} />
                <ProjectItem
                    image={`/images/projects/pintuco-sl.png`}
                    title={'Pintuco Santa Lucia'}
                    description={"E-Commerce para la empresa Pintuco Santa Lucia, con integración a pasarela de pagos 'PayU'"}
                    tags={['WordPress', 'JavaScript', 'CSS3', 'PayU']} />
                <ProjectItem
                    image={`/images/projects/wenco.png`}
                    title={'Wenco'}
                    description={'Catálogo de productos web para la empresa Wenco'}
                    tags={['WordPress', 'CSS3']} />
                <ProjectItem
                    image={`/images/projects/brokers.png`}
                    title={'Brokers Soluciones'}
                    description={'Página web para el arriendo y compra directa de propiedades, evitando procesos intermedios y por lo tanto costos (En Construcción)'}
                    tags={['Laravel']} />
                <ProjectItem
                    image={`/images/projects/anten.png`}
                    title={'Anten'}
                    description={'Proyecto univesitario construido para practica de PHP estructurado'}
                    tags={['PHP', 'MySql', 'MVC', 'Bootstrap']} />
                <ProjectItem
                    image={`/images/projects/merking.png`}
                    title={'Merking'}
                    description={'Proyecto personal de e-commerce para Bazar de venta de productos'}
                    tags={['PHP', 'MySql', 'MVC', 'Bootstrap', 'REST']} />
                <ProjectItem
                    image={`/images/projects/vibeard.png`}
                    title={'Vibeard'}
                    description={'Proyecto personal para el control de citas en barberias (En Construcción)'}
                    tags={['Laravel', 'React', 'MySql', 'Tailwind']} />
                <ProjectItem
                    image={`/images/projects/citas-mascotas.png`}
                    title={'Administrador de citas para mascotas'}
                    description={"Proyecto para el control de citas en veterinarias, , creado para practicar desarrollo con Framework React"}
                    tags={['React','Local Storage' ,'Styled Components']} />
                <ProjectItem
                    image={`/images/projects/gasto-semanal.png`}
                    title={'Calculadora presupuesto semanal'}
                    description={'Proyecto personal para practicar el uso de React Hooks'}
                    tags={['React', 'Styled Components']} />


            </Snuggle>
        </div>

    );

}

export default Projects;