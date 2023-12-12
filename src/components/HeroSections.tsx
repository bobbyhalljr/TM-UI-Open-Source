interface ClassicHeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    className?: string;
}

export const ClassicHero: React.FC<ClassicHeroProps> = ({ title, subtitle, backgroundImage }) => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg">{subtitle}</p>
            </div>
        </div>
    );
};

interface MinimalHeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    className?: string;
}

export const MinimalHero: React.FC<MinimalHeroProps> = ({ title, subtitle, backgroundImage }) => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="text-center relative z-10">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg">{subtitle}</p>
                <button className='mt-12 px-6 py-3 bg-emerald-400 rounded-lg text-gray-700'>Start Now</button>
            </div>
        </div>
    );
};


interface GradientHeroProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
    gradientColors: string[];
    className?: string;
}

export const GradientHero: React.FC<GradientHeroProps> = ({ title, subtitle, backgroundImage, gradientColors }) => {
    return (
        <div className={`relative h-screen flex bg-gradient-to-r from-${gradientColors}-500 via-${gradientColors}-500 to-${gradientColors}-500 items-center justify-center text-white bg-cover bg-center`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            <div className="text-center relative z-10">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg">{subtitle}</p>
            </div>
        </div>
    );
};

interface VideoHeroProps {
    title: string;
    subtitle: string;
    videoSource: string;
    className?: string;
}

export const VideoHero: React.FC<VideoHeroProps> = ({ title, subtitle, videoSource }) => {
    return (
        <div className="relative h-screen overflow-hidden">
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                <source src={videoSource} type="video/mp4" />
            </video>
            <div className="flex items-center justify-center text-white text-center relative z-10">
                <div>
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-lg">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};



interface CtaHeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    className?: string;
}

export const CtaHero: React.FC<CtaHeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white bg-gray-900">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg mb-6">{subtitle}</p>
                <a href={ctaLink} className="text-blue-500 underline hover:text-blue-400">{ctaText}</a>
            </div>
        </div>
    );
};