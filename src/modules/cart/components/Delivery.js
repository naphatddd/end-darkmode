import React from 'react'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  TextField,
  CardActions,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  form: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  submitBtn: {
    flex: 1,
  },
}))
function Delivery() {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        address: yup.string().required(),
      })
    ),
  })
const submit = (e) => {
  console.log(e);
}
  return (
    <form onSubmit={handleSubmit(submit)} autoComplete="off">
      <Card>
        <CardContent className={classes.form}>
          <Typography>Order Information</Typography>
          <TextField
            inputRef={register}
            variant="outlined"
            label="Name"
            placeholder="Enter your fullname"
            name="name"
            fullWidth
            helperText={errors.name?.message || ''}
            error={!!errors.name}
          />
          <TextField
            inputRef={register}
            type="email"
            variant="outlined"
            label="Email"
            placeholder="Enter your email"
            name="email"
            fullWidth
            helperText={errors.email?.message || ''}
            error={!!errors.email}
          />
          <TextField
            inputRef={register}
            multiline
            rows={4}
            variant="outlined"
            label="Address"
            placeholder="Enter your address"
            name="address"
            fullWidth
            helperText={errors.address?.message || ''}
            error={!!errors.address}
          />
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitBtn}
          >
            Place Order
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}

export default Delivery
