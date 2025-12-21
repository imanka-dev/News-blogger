
 import image from '../assets/Untitled-1.jpg'
 const NewsItems = ({ title, description, src, url }) => {
  return (
   <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{width: "345px", height: "450px" }}>
  <img src={src?src:image} style={{height:"200px",width:"100%", objectFit:"cover"}} className="card-img-top" alt="..." />
  <div className="card-body d-flex flex-column">
    <h5 className="card-title" style={{minHeight: "3rem"}}>{title.slice(0,50)}</h5>
    <p className="card-text flex-grow-1" style={{minHeight: "4.5rem"}}>{description?description.slice(0,90):"No description available"}</p>
    <a href={url} className="btn btn-primary mt-auto">Read More</a>
  </div>
</div>
  )
}

export default NewsItems;