import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '& > :not(style)': { m: 1, width: '90%' },
                '& > :not(style):first-child': { mt: 4 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField id="outlined-basic" label="Text" variant="outlined" InputProps={{
                multiline: true, sx: {
                    height: '150px', '& fieldset': {
                        borderColor: 'black', // Add border color here
                    },
                }
            }} />
        </Box>
    );
}