import { Button, Grid, TextField } from "@mui/material";

const FormCheckout = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Teléfono Móvil"
              variant="outlined"
              fullWidth
              name="telefono"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
          {/* <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Contraseña"
              variant="outlined"
              fullWidth
              name="password"
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password}
              type="password"
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Confirmar contraseña"
              variant="outlined"
              fullWidth
              name="confirmPassword"
              onChange={handleChange}
              error={errors.confirmPassword ? true : false}
              helperText={errors.confirmPassword}
              type="password"
            />
          </Grid> */}
          <Grid item xs={11} sm={7}>
            <Button type="submit" variant="contained">
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
