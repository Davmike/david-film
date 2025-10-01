import Pricing from "./Pricing";

interface ServiceItemProps {
    title: string;
    image: string;
}

function ServiceItem({ title, image }: ServiceItemProps) {
    return (
        <div className="relative rounded-2xl overflow-hidden cursor-pointer group">
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-30 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                <span className="text-white text-xl font-light tracking-wide text-center">
                    {title}
                </span>
            </div>
        </div>
    );
}

function Service() {
    const services = [
        {
            title: 'Documentary Films',
            image: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'Wedding',
            image: 'https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'Event Videography',
            image: 'https://images.pexels.com/photos/274744/pexels-photo-274744.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'Sports Videography',
            image: 'https://images.pexels.com/photos/2291874/pexels-photo-2291874.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ];

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8 pt-[250px]" id="servicepage">
            <div className="w-full max-w-5xl">
                <h1 className="text-white tracking-widest text-center mb-12 uppercase gallerytext font-bold text-[40px] sm:text-[40px] md:text-[48px]">
                    Service
                </h1>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 description">
                    {services.map((service, index) => (
                        <ServiceItem key={index} title={service.title} image={service.image} />
                    ))}
                </div>

                <Pricing />
            </div>
        </div>
    );
}

export default Service;
