
const SectionHeading = ({title, details}) => {
    return (
        <div>

            <div className="space-y-4 text-center">
                <h3 className="text-3xl font-bold text-[#B68C5A]">{title}</h3>
                <p className="text-medium">{details}</p>
            </div>
            
        </div>
    );
};

export default SectionHeading;