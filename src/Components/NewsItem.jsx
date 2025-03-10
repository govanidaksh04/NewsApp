import defimage from '../Assets/news.jpeg';
import PropTypes from 'prop-types';

const NewsItem = ({title, description, src, image}) => {
    return(
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={image ? image:defimage} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50) + "..."}</h5>
            <p className="card-text">{description?description.slice(0,70) + "...":"This news is one of the most recent news."}</p>
            <a href={src} className="btn btn-primary" target="_blank">Read More</a>
        </div>
        </div>
    )
}

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    src: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default NewsItem;