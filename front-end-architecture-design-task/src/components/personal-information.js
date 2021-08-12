import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginRight: 12,
  },
  email: {
    marginRight: 115,
  },
  idCard: {
    minWidth: 300,
    marginRight: 37,
  },
  address: {
    minWidth: 300,
    marginRight: 37,
  },
  upload: {
    marginTop: 10,
    marginBottom: 30,
  },
  label: {
    marginTop: 20,
  },
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.2rem",
    textAlign: "left",
  },
  errorMessageP: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.7rem",
    textAlign: "left",
  },
}));
function PersonalInformation({
  formProps: { register, errors, getValues, setValue },
  data,
}) {
  const classes = useStyles();
  const values = getValues();
  const handleDateChange = (date) => {
    setValue("birthday", date);
  };
  console.log(data);
  const {
    prefix,
    firstName,
    lastName,
    prefixTh,
    firstNameTh,
    lastNameTh,
    birthday,
    email,
    idCard,
    phoneNumber,
    address,
    bib,
    photo
  } = data[0];

  return (
    <>
      <div className={classes.root}>
        <FormLabel>Personal information</FormLabel>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item md={12} xs={12}>
            <FormControl
              variant="outlined"
              margin="normal"
              className={classes.formControl}
            >
              <InputLabel htmlFor="prefix">Prefix</InputLabel>
              <Select
                error={!!errors.prefix}
                name="prefix"
                id="prefix"
                defaultValue={prefix}
                value={values.prefix}
                onChange={(e) => setValue("prefix", e.target.value, true)}
                inputProps={{
                  inputRef: (ref) => {
                    if (!ref) return;
                    register({
                      name: "prefix",
                      value: ref.value,
                    });
                  },
                }}
                label="Prefix"
                variant="outlined"
                className="name"
                autoFocus
              >
                <MenuItem value="">
                  <em>-</em>
                </MenuItem>
                <MenuItem value="Mr">Mr</MenuItem>
                <MenuItem value="Mrs">Mrs</MenuItem>
                <MenuItem value="Ms">Ms</MenuItem>
              </Select>
              {errors.prefix && (
                <p className={classes.errorMessageP}>{errors.prefix.message}</p>
              )}
            </FormControl>
            <FormControl>
              <TextField
                inputRef={register}
                error={!!errors.firstName}
                name="firstName"
                id="firstName"
                label="Firstname"
                margin="normal"
                variant="outlined"
                defaultValue={firstName}
                className={classes.formControl}
                autoFocus
              />
              {errors.firstName && (
                <p className={classes.errorMessage}>
                  {errors.firstName.message}
                </p>
              )}
            </FormControl>
            <FormControl>
              <TextField
                inputRef={register}
                error={!!errors.lastName}
                name="lastName"
                id="lastName"
                label="Lastname"
                margin="normal"
                variant="outlined"
                defaultValue={lastName}
                autoFocus
              />
              {errors.lastName && (
                <p className={classes.errorMessage}>
                  {errors.lastName.message}
                </p>
              )}
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl
              variant="outlined"
              margin="normal"
              className={classes.formControl}
            >
              <InputLabel>คำนำหน้า</InputLabel>
              <Select
                defaultValue={prefixTh}
                value={values.prefixTh}
                onChange={(e) => setValue("prefixTh", e.target.value, true)}
                inputProps={{
                  inputRef: (ref) => {
                    if (!ref) return;
                    register({
                      name: "prefixTh",
                      value: ref.value,
                    });
                  },
                }}
                error={!!errors.prefixTh}
                name="prefixTh"
                label="คำนำหน้า"
                variant="outlined"
                className="name"
              >
                <MenuItem value="">
                  <em>-</em>
                </MenuItem>
                <MenuItem value="นาย">นาย</MenuItem>
                <MenuItem value="นาง">นาง</MenuItem>
                <MenuItem value="นางสาว">นางสาว</MenuItem>
              </Select>
              {errors.prefixTh && (
                <p className={classes.errorMessageP}>
                  {errors.prefixTh.message}
                </p>
              )}
            </FormControl>
            <FormControl>
              <TextField
                inputRef={register}
                error={!!errors.firstNameTh}
                name="firstNameTh"
                id="firstNameTh"
                label="ชื่อจริง"
                margin="normal"
                variant="outlined"
                defaultValue={firstNameTh}
                className={classes.formControl}
                autoFocus
              />
              {errors.firstNameTh && (
                <p className={classes.errorMessage}>
                  {errors.firstNameTh.message}
                </p>
              )}
            </FormControl>
            <FormControl>
              <TextField
                inputRef={register}
                error={!!errors.lastNameTh}
                name="lastNameTh"
                id="lastNameTh"
                label="นามสกุล"
                margin="normal"
                variant="outlined"
                defaultValue={lastNameTh}
                autoFocus
              />
              {errors.lastNameTh && (
                <p className={classes.errorMessage}>
                  {errors.lastNameTh.message}
                </p>
              )}
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  inputRef={register}
                  error={!!errors.birthday}
                  onChange={handleDateChange}
                  className={classes.email}
                  value={values.birthday}
                  margin="normal"
                  disableToolbar
                  id="birthday"
                  name="birthday"
                  label="Birthday"
                  format="dd/MM/yyyy"
                  defaultValue={birthday}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                {errors.birthday && (
                  <p className={classes.errorMessage}>
                    {errors.birthday.message}
                  </p>
                )}
              </MuiPickersUtilsProvider>
            </FormControl>
            <FormControl>
              <TextField
                inputRef={register}
                error={!!errors.email}
                margin="normal"
                id="email"
                name="email"
                label="Email Address"
                type="email"
                defaultValue={email}
                variant="outlined"
              />
              {errors.email && (
                <p className={classes.errorMessage}>{errors.email.message}</p>
              )}
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl>
              <TextField
                inputRef={register}
                error={!!errors.idCard}
                className={classes.idCard}
                margin="normal"
                id="idCard"
                name="idCard"
                label="Identification Card"
                type="number"
                variant="outlined"
                defaultValue={idCard}
              />
              {errors.idCard && (
                <p className={classes.errorMessage}>{errors.idCard.message}</p>
              )}
            </FormControl>
            <FormControl>
              <TextField
                inputRef={register}
                error={!!errors.phoneNumber}
                margin="normal"
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                type="number"
                variant="outlined"
                defaultValue={phoneNumber}
              />
              {errors.phoneNumber && (
                <p className={classes.errorMessage}>
                  {errors.phoneNumber.message}
                </p>
              )}
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl>
              <TextField
                inputRef={register}
                error={!!errors.address}
                className={classes.address}
                name="address"
                id="address"
                margin="normal"
                label="Address"
                placeholder="E.g. Bangkok .."
                multiline
                rows={4}
                defaultValue={address}
                variant="outlined"
              />
              {errors.address && (
                <p className={classes.errorMessage}>{errors.address.message}</p>
              )}
            </FormControl>
            <FormControl>
              <TextField
                inputRef={register}
                error={!!errors.bib}
                placeholder="E.g. ACHI123456"
                margin="normal"
                name="bib"
                id="bib"
                label="BIB"
                variant="outlined"
                defaultValue={bib}
              />
              {errors.bib && (
                <p className={classes.errorMessage}>{errors.bib.message}</p>
              )}
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl>
              <FormLabel className={classes.label} htmlFor="photo">
                รูปถ่ายหน้าตรง
              </FormLabel>
              <Button
                variant="contained"
                component="label"
                name="photo"
                className={classes.upload}
              >
                Upload File
                <input
                  accept="image/*"
                  ref={register}
                  type="file"
                  name="photo"
                  //defaultValue={photo[0]}
                  hidden
                />
              </Button>
              {errors.photo && (
                <p className={classes.errorMessage}>{errors.photo.message}</p>
              )}
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default PersonalInformation;
