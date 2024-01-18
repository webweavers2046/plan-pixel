const SectionTitle = ({title,fixW}) => {
    
    // const sanitizedHtml = DOMPurify.sanitize(title);
    return (
        <div className="text-center my-10">
            <h1 className={`text-6xl font-bold ${fixW?"max-w-xl mx-auto":""}`}>{ title}</h1>
        </div>
    );
};
export default SectionTitle;