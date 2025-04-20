'use client';

import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
  TimelineContent, TimelineDot
} from '@mui/lab';
import { Typography, Paper } from '@mui/material';

export function TimelineSection({ experience }) {
  return (
    <Timeline position="alternate">
      {experience.map((item, i, arr) => (
        <TimelineItem key={item.date}>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: '#222' }} />
            {i !== arr.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ py: 2 }}>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>{item.date}</Typography>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                bgcolor: '#fff',
                border: '1.5px solid #ccc',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">{item.content}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
