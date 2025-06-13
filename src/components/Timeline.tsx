// Timeline.tsx
import React, { useState } from 'react';
import '../styles/Timeline.css';

interface Milestone {
    title: string;
    description: string;
}

interface TimelineProps {
    milestones: Milestone[];
}

const Timeline: React.FC<TimelineProps> = ({ milestones }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="timeline-container">
            {milestones.map((milestone, index) => (
                <div
                    key={index}
                    className="timeline-milestone"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onClick={() => toggleDescription(index)}
                >
                    <div className="milestone-dot" />
                    <div className="milestone-title">{milestone.title}</div>
                    <div className={`milestone-description ${activeIndex === index ? 'visible' : ''}`}>
                        {milestone.description}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
