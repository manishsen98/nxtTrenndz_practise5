import '../Assets/css/AddProduct.css'
import { useState } from 'react'
import axios from "axios"


const AddProducts = () => {

   const [values, setValues] = useState({
    title: "",
     brand: "",
     price: "",
     image: "",
     rating: ""
   })   
 
  const onChangeName  = (e) => {
    setValues({...values, title: e.target.value })
  }

  const onChangeBrand = (e) => {
    setValues({...values, brand: e.target.value })
  }

  const onChangePrice  = (e) => {
    setValues({...values, price: e.target.value })
  }

  const onChangeImg = (e) => {
    setValues({...values, image: e.target.value })
  }

  const onChangerating = (e) => {
    setValues({...values, rating: e.target.value })
  }                  

const onSubmit = async (e) => {
    e.preventDefault()

    const {title, brand, price, image, rating} = values
    const userDetails = {title, brand, price, image, rating}
    console.log(title, brand, price, image,  rating)
    axios.post("http://localhost:5000/api/addproductd", userDetails , {
      
      // headers: {
      //   'Content-Type': 'application/json ',
      // }
    })
    .then((res) => {
      console.log("ghdhdgfdfggdghfgdgfdgfghdfghd")
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
    
}


    return(
        <div className="input-container">
            <form className='form-container' onSubmit={onSubmit} encType="multipart/form-data" >
            <label>title</label>
            <input  type="text" placeholder="title" onChange={onChangeName} value={values.title}  />
            <label>brand</label>
            <input  type="text" placeholder="brand" onChange={onChangeBrand}  value={values.brand} />
            <label>price</label>
            <input  type="text" placeholder="price"  onChange={onChangePrice}  value={values.price} />
            <label>rating</label>
            <input  type="text" placeholder="rating"  onChange={onChangerating}  value={values.rating}  />

            <label>ImageUrl</label>
            <input  type="file" placeholder="ImgUrl" name='image' onChange={onChangeImg}  value={values.image_url} />
            <button className='button' type='submit'> submit  </button>
            </form>
        </div>
    )
}

export default AddProducts