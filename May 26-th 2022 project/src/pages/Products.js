import { Link } from 'react-router-dom';

const Products = () => {
  return(
    <div>
      <h1>This is the Products Page</h1>
      <ul>
        <li><Link to = "products/p1">A Book</Link></li>
        <li><Link to = "products/p2">A Carpet</Link></li>
        <li><Link to = "products/p3">Online Course</Link></li>
      </ul>
    </div>
    
  )
}

export default Products;