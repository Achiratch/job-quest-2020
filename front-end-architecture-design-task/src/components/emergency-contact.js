import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

// import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginRight: 12,
    marginBottom: theme.spacing(2),
  },
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.2rem",
    textAlign: "left",
  },
}));

function EmergencyContact({
  formProps: { register, errors, getValues, setValue },
  data,
}) {
  const classes = useStyles();
  const {
    firstNameE,
    lastNameE,
    phoneNumberE,
    relationship,
    firstNameE2,
    lastNameE2,
    phoneNumberE2,
    relationship2,
  } = data[0];
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <FormLabel>1st emergency contact</FormLabel>
        <Grid item md={12} xs={12}>
          <FormControl>
            <TextField
              defaultValue={firstNameE}
              inputRef={register}
              error={!!errors.firstNameE}
              id="firstNameE"
              name="firstNameE"
              label="Firstname"
              margin="normal"
              variant="outlined"
              className={classes.formControl}
            />
            {errors.firstNameE && (
              <p className={classes.errorMessage}>{errors.firstNameE.message}</p>
            )}
          </FormControl>
          <FormControl>
            <TextField
              defaultValue={lastNameE}
              inputRef={register}
              error={!!errors.lastNameE}
              id="lastNameE"
              name="lastNameE"
              label="Lastname"
              margin="normal"
              variant="outlined"
              className={classes.formControl}
            />
            {errors.lastNameE && (
              <p className={classes.errorMessage}>{errors.lastNameE.message}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl>
            <TextField
              defaultValue={phoneNumberE}
              inputRef={register}
              error={!!errors.phoneNumberE}
              margin="normal"
              name="phoneNumberE"
              id="phone"
              label="Phone Number"
              type="number"
              variant="outlined"
              className={classes.formControl}
            />
            {errors.phoneNumberE && (
              <p className={classes.errorMessage}>
                {errors.phoneNumberE.message}
              </p>
            )}
          </FormControl>
          <FormControl>
            <TextField
              defaultValue={relationship}
              inputRef={register}
              error={!!errors.relationship}
              margin="normal"
              id="relationship"
              name="relationship"
              label="Relationship"
              type="text"
              variant="outlined"
              placeholder="E.g. Mother"
              className={classes.formControl}
            />
            {errors.relationship && (
              <p className={classes.errorMessage}>
                {errors.relationship.message}
              </p>
            )}
          </FormControl>
        </Grid>
        <FormLabel>2nd emergency contact</FormLabel>
        <Grid item md={12} xs={12}>
          <FormControl>
            <TextField
              defaultValue={firstNameE2}
              inputRef={register}
              error={!!errors.firstNameE2}
              id="firstName2"
              name="firstNameE2"
              label="Firstname"
              margin="normal"
              variant="outlined"
              className={classes.formControl}
            />
            {errors.firstNameE2 && (
              <p className={classes.errorMessage}>
                {errors.firstNameE2.message}
              </p>
            )}
          </FormControl>
          <FormControl>
            <TextField
              defaultValue={lastNameE2}
              inputRef={register}
              error={!!errors.lastNameE2}
              id="lastNameE2"
              name="lastNameE2"
              label="Lastname"
              margin="normal"
              variant="outlined"
              className={classes.formControl}
            />
            {errors.lastNameE2 && (
              <p className={classes.errorMessage}>{errors.lastNameE2.message}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl>
            <TextField
              defaultValue={phoneNumberE2}
              inputRef={register}
              error={!!errors.phoneNumberE2}
              margin="normal"
              id="phoneNumberE2"
              name="phoneNumberE2"
              label="Phone Number"
              type="number"
              variant="outlined"
              className={classes.formControl}
            />
            {errors.phoneNumberE2 && (
              <p className={classes.errorMessage}>
                {errors.phoneNumberE2.message}
              </p>
            )}
          </FormControl>
          <FormControl>
            <TextField
              defaultValue={relationship2}
              inputRef={register}
              error={!!errors.relationship2}
              margin="normal"
              id="relationship2"
              name="relationship2"
              label="Relationship"
              type="text"
              variant="outlined"
              placeholder="E.g. Mother"
              className={classes.formControl}
            />
            {errors.relationship2 && (
              <p className={classes.errorMessage}>
                {errors.relationship2.message}
              </p>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default EmergencyContact;
