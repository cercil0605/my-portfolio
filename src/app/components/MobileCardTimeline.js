'use client';

import { Box, Typography, Paper } from '@mui/material';

export function MobileCardTimeline({ experience }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      alignItems="center"
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: '2px',
          backgroundColor: '#ccc',
          transform: 'translateX(-50%)',
          zIndex: 0,
        },
      }}
    >
      {experience.map((item) => (
        <Paper
          key={item.date}
          elevation={1}
          sx={{
            width: '90%',
            p: 2,
            bgcolor: '#fff',
            border: '1.5px solid #ccc',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            position: 'relative',
            zIndex: 1,
            backgroundClip: 'padding-box',
            '&:hover': {
              boxShadow: 6,
              transform: 'translateY(-4px)',
            },
          }}
        >
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ mb: 1, fontSize: '0.75rem' }}
          >
            {item.date}
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 1, fontSize: '1rem' }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: '0.8rem' }}
          >
            {item.content}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}