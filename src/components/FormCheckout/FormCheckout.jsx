import { Button, Grid, TextField } from "@mui/material";

const FormCheckout = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="">
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Teléfono"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <Button variant="contained">Comprar</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
