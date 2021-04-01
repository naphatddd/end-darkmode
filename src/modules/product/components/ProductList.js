import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CategoryList from './CategoryList'
import ProductItem from './ProductItem'
import axios from 'axios'
import querystring from 'query-string'
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
  },
}))
function ProductList() {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { search } = useLocation()
  const { category } = querystring.parse(search)
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true)
      const { data } = await axios.get(
        `https://react-api-six.vercel.app/products${search}`
      )
      setProducts(data)
      setIsLoading(false)
    }
    loadProducts()
  }, [search])
  return (
    <>
      <Typography variant="h3" component="h2" className={classes.title}>
        {category || 'All'} Product
      </Typography>
      <CategoryList />
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductItem key={product.id} {...product}></ProductItem>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ProductList
