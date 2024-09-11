import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";

export default function Contactme() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onValidation = (data) => {
    console.log(data);
  };

  return (
    <div style={{ marginLeft: "100px", padding: "0", width: "75%" }}>
      <div style={{ padding: "40px 0" }}>
        <Stack
          sx={{ width: "75%", maxWidth: 800, spacing: 3 }}
          component="form"
          onSubmit={handleSubmit(onValidation)}
          spacing={3}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <TextField
              sx={{
                flex: 1,
                "& .MuiInputBase-input::placeholder": {
                  color: "transparent",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                    borderBottom: "2px solid #dfd3ca",
                  },
                  "&:hover fieldset": {
                    borderBottom: "2px solid #dfd3ca",
                  },
                  "&.Mui-focused fieldset": {
                    borderBottom: "2px solid #dfd3ca",
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "gray",
                  fontSize: "16px",
                },
                "& .MuiInputLabel-shrink": {
                  color: "gray",
                  fontSize: "16px",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "gray",
                  fontSize: "16px",
                },
              }}
              error={!!errors?.fristname}
              label="First Name"
              {...register("fristname", {
                required: "Enter your first name, please",
              })}
              helperText={errors?.fristname?.message}
            />

            <TextField
              sx={{
                flex: 1,
                "& .MuiInputBase-input::placeholder": {
                  color: "transparent", // Hide placeholder text
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                    borderBottom: "2px solid #dfd3ca",
                  },
                  "&:hover fieldset": {
                    borderBottom: "2px solid #dfd3ca",
                  },
                  "&.Mui-focused fieldset": {
                    borderBottom: "2px solid #dfd3ca",
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "gray", // Default label color
                  fontSize: "16px", // Default label font size
                },
                "& .MuiInputLabel-shrink": {
                  color: "gray", // Label color when shrunk (focused)
                  fontSize: "16px", // Keep the font size consistent
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "gray", // Keep label color gray when focused
                  fontSize: "16px", // Keep the font size consistent
                },
              }}
              error={!!errors?.lastname}
              label="Last Name"
              {...register("lastname", {
                required: "Enter your last name, please",
              })}
              helperText={errors?.lastname?.message}
            />
          </div>

          <TextField
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "transparent", // Hide placeholder text
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                  borderBottom: "2px solid #dfd3ca",
                },
                "&:hover fieldset": {
                  borderBottom: "2px solid #dfd3ca",
                },
                "&.Mui-focused fieldset": {
                  borderBottom: "2px solid #dfd3ca",
                },
              },
              "& .MuiFormLabel-root": {
                color: "gray", // Default label color
                fontSize: "16px", // Default label font size
              },
              "& .MuiInputLabel-shrink": {
                color: "gray", // Label color when shrunk (focused)
                fontSize: "16px", // Keep the font size consistent
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "gray", // Keep label color gray when focused
                fontSize: "16px", // Keep the font size consistent
              },
            }}
            rows={3}
            label="Email"
            {...register("Message", { required: "This field is required" })}
            helperText={errors?.email?.message}
          />

          <TextField
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "transparent",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                  borderBottom: "2px solid #dfd3ca",
                },
                "&:hover fieldset": {
                  borderBottom: "2px solid #dfd3ca",
                },
                "&.Mui-focused fieldset": {
                  borderBottom: "2px solid #dfd3ca",
                },
              },
              "& .MuiFormLabel-root": {
                color: "gray",
                fontSize: "16px",
              },
              "& .MuiInputLabel-shrink": {
                color: "gray",
                fontSize: "16px",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "gray",
                fontSize: "16px",
              },
            }}
            multiline
            rows={3}
            label="Message"
            {...register("Message", { required: "This field is required" })}
            helperText={errors?.Message?.message}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "200px",
              backgroundColor: "#96bb7c",
              borderRadius: "50px",
              padding: "10px 20px",
            }}
          >
            Send Message
          </Button>
        </Stack>
      </div>
    </div>
  );
}
