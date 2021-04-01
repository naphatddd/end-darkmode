import React from 'react'
import { Grid, Chip } from '@material-ui/core'
import { useRouteMatch, useHistory } from 'react-router-dom'
function CategoryItem({ Icon, title }) {
  const { path } = useRouteMatch()
  const history = useHistory()
  const filter = () => history.push(`${path}?category=${title}`)
  return (
    <Grid item onClick={filter}>
      <Chip icon={<Icon />} label={title} clickable color="primary"></Chip>
    </Grid>
  )
}

export default CategoryItem
