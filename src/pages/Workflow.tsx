import React from 'react';
import Timeline from "../components/Timeline.tsx";
import '../styles/App.css';
import '../styles/Workflow.css';

const Workflow: React.FC = () => {
    const milestones = [
        { title: 'Initial contact', description: 'Reach out to me using request form!' },
        { title: 'Free of charge quote', description: 'After receiving your request, I reach out to you to discuss budget and specify requirements.' },
        { title: 'Initial payment', description: 'When everything is agreed upon, I await for advance payment equal to 25% of total cost.' },
        { title: 'Commission Id', description: 'After receiving payment, you obtain your unique Commission Id, used in further communication.' },
        { title: 'Assembly', description: 'Your miniatures are getting assembled. Time may vary, depending on complexity and quantity of miniatures.' },
        { title: 'Quality check', description: 'I contact you to ensure that everything up to this point is satisfactory to you.' },
        { title: 'Painting', description: 'Painting work commences. Time may vary, depending on complexity, paint scheme, chosen quality and quantity of miniatures.' },
        { title: 'Quality check', description: 'I contact you to ensure that everything up to this point is satisfactory to you.' },
        { title: 'Photo documentation', description: 'I create the photo gallery of your new miniatures to present on the website.' },
        { title: 'Colour scheme', description: 'Your colour scheme is saved for ease of future commissions.' },
        { title: 'Review', description: 'I highly encourage you to review my work and your satisfaction with it.' },
        { title: 'Shipping', description: 'Miniatures are sent to you, packed safely.' },
        { title: 'Success!', description: 'You can happily enjoy new additions to your collection!' },
    ];

    return (
        <section className="px-4 py-8 fade-page">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-screen-xl mx-auto">
                <div className="w-full lg:w-1/2">
                    <h1 className="py-4 font-bold text-xl lg:text-2xl">See the process visualised!</h1>
                    <div className="aspect-w-16 aspect-h-9 w-full">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/QX43QTYyV-8"
                            title="Workflow Video"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="py-4 font-bold text-xl lg:text-2xl">Steps</h1>
                    <Timeline milestones={milestones}/>
                </div>


            </div>
        </section>
    );
};

export default Workflow;
